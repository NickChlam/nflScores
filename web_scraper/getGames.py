from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import sys
import json
import pprint
from pymongo import MongoClient
client = MongoClient('mongodb://mongo:27017/scores')


class NFLScores:
    def __init__(self, *args, **kwargs):
        options = webdriver.ChromeOptions() 
        options.add_argument('--disable-dev-shm-usage')
        options.add_argument('--no-sandbox')
        options.add_argument('window-size=1400,650')
        options.add_argument('headless')
        self.bot = webdriver.Chrome(options=options)
        
        

    # TODO: create function to chnage array to objec
        self.matches = []
    
    def getGames(self, week):
        print('please wait scraping data .... ')

        Matches = []
        matchup = []
        home = {
            "name" : '',
            "rank" : '',
            "PPG" : '',
            "Opp_PPG" : '',
            "Pass_YPG" : '',
            "Rush_YPG" : '',
            "url" : '',
            "style" : ''
        }
        away = {
            
        }
        bot = self.bot

        bot.get(f'https://www.foxsports.com/nfl/scores?season=2019&seasonType=1&week={week}')

        scoreContainer = bot.find_element_by_id('wisbb_scoresContainer')

        games = bot.find_elements_by_class_name('wisbb_scoreChip')
        
        for game in games:
            generalInfo = []
            stats = self.getMatchup(game)
            # get away info --------------------------------------------------------------------->
            teams = game.find_element_by_class_name('wisbb_teams')
            teamA = teams.find_element_by_class_name('wisbb_teamA')
            awayTeamName = teamA.find_element_by_class_name('wisbb_name').get_attribute('innerHTML')
            awayRecord = teamA.find_element_by_class_name('wisbb_record').get_attribute('innerHTML')
            away["name"] = awayTeamName
            away["rank"] = awayRecord

            # away URL and Style 
            url = self.getUrl(game, 'wisbb_teamA')
            away["url"] = url[0]    
            away["style"] = url[1]

            # matchup stats
            away["PPG"] = stats[0]
            away["Opp_PPG"] = stats[3]
            away["Pass_YPG"] = stats[6]
            away["Rush_YPG"] = stats[9]
            # GameTime
            

            #get home info --------------------------------------------------------------------->
            teamB = teams.find_element_by_class_name('wisbb_teamB')
            homeTeamName = teamB.find_element_by_class_name('wisbb_name').get_attribute('innerHTML')
            homeRecord = teamB.find_element_by_class_name('wisbb_record').get_attribute('innerHTML')
            home["name"] = homeTeamName
            home["rank"] = homeRecord
            # Home URL and Style 
            url = self.getUrl(game, 'wisbb_teamB')
            home["url"] = url[0]    
            home["style"] = url[1]
            # matchup stats 
            home["PPG"] = stats[2]
            home["Opp_PPG"] = stats[5]
            home["Pass_YPG"] = stats[8]
            home["Rush_YPG"] = stats[11]
            # GameTime
            

            
            
            # append data to matches
            matchup.append(home)
            matchup.append(away)

            try:
                headline = self.getHeadline(game)
            
            except Exception as ex:
                headline = ''

            
            matchup.append(
                {
                    "gameTime" : self.getAirTime(game),
                    "headline" : headline
                }
            )
            
            self.matches.append(matchup)
            
            matchup = []
            home = {}
            away = {}

            # TODO REMOVE PRINT
            print(awayTeamName + ' ' + awayRecord + ' vs. ' + homeTeamName + ' ' + homeRecord)

            
        
            
            

    def getMatchup(self, game):
        match = []
        stats = game.find_element_by_class_name('wisbb_matchup')
        data = stats.find_elements_by_tag_name('tr')
        for row in data:
                data2 = row.find_elements_by_tag_name('td')
                for d in data2:
                    match.append(d.get_attribute('innerHTML'))

        match.pop(0)
        match.pop(0)
        match.pop(0)
        
        return match
    
    def getUrl(self, game, team):
        logos = []
        branding = game.find_element_by_class_name('wisbb_teamBranding')
        teamA = branding.find_element_by_class_name(team)
        urlA = teamA.find_element_by_tag_name('img').get_attribute('src')
        color = teamA.find_element_by_class_name('wisbb_stripe').get_attribute('style')
        logos.append(urlA)
        logos.append(color)
        return logos
    
    def getAirTime(self, game):
        gameTime = {}
        info = game.find_element_by_class_name('wisbb_status')
        network = info.find_element_by_class_name('wisbb_network').get_attribute('innerHTML')
        day = info.find_element_by_class_name('wisbb_gameTime').get_attribute('innerHTML')
        try:
            time = info.find_elements_by_class_name('wisbb_gameTime')[1].get_attribute('innerHTML')
        except Exception as ex:
            time = ''

        gameTime = {"network" : network, "day" : day, "time" : time}

        return gameTime

    def getHeadline(self, game):

        headline = game.find_element_by_class_name('wisbb_headlines').get_attribute('innerHTML')

        return headline.strip()


db = client.scores

posts = db.games
week = sys.argv[1]


data = posts.find({'week' : '7'})

# see if there is data for week.  If not get it 
try:
    data.next()
except Exception as ex:
    scores = NFLScores()
    # TODO: create dict on football season weeks and have a default set to the current week
    scores.getGames(week)
    if scores.matches == []:
        scores.getGames(week)

    for game in scores.matches:
        pprint.pprint(game)

    scores.bot.close()
    scores.bot.quit()

    for game in scores.matches:
        post = {
            "week" : week,
            "game" : game
        }
        save = posts.insert_one(post)
    quit()

print(f'data for week {week} already exists')   


# bills_post = posts.find()

# for post in bills_post:
#     print(post)

# result = db.posts.delete_many({'author': 'jacl'})
# print(result.deleted_count)
