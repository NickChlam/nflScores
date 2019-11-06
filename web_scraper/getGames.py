from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import sys
import json
import pprint
from pymongo import MongoClient
import platform
import datetime

# TODO load conn string in env variables 
conn = 'mongodb://localhost:27017/scores'

# is platform windows  
if platform.system() == 'Windows':
    conn = 'mongodb://localhost:27017/scores'


client = MongoClient(conn)


class NFLScores:
    def __init__(self, *args, **kwargs):
        options = webdriver.ChromeOptions() 
        options.add_argument('--disable-dev-shm-usage')
        options.add_argument('--no-sandbox')
        options.add_argument('window-size=1400,650')
        options.add_argument('headless')
        self.bot = webdriver.Chrome(options=options)
        
        

    # TODO: create function to chnage array to object
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
            # getting stats 
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

    def getWeek(self, date):
        week10 = datetime.datetime(2019, 11, 5).date()
        week10End = datetime.datetime(2019, 11, 7).date()

        week11 = datetime.datetime(2019, 11, 12).date()
        week11End = datetime.datetime(2019, 11, 14).date()

        week12 = datetime.datetime(2019, 11, 19).date()
        week12End = datetime.datetime(2019, 11, 21).date()

        week13 = datetime.datetime(2019, 11, 26).date()
        week13End = datetime.datetime(2019, 11, 29).date()

        week14 = datetime.datetime(2019, 12, 3).date()
        week14End = datetime.datetime(2019, 12, 5).date()

        week15 = datetime.datetime(2019, 12, 10).date()
        week15End = datetime.datetime(2019, 12, 12).date()

        week16 = datetime.datetime(2019, 12, 17).date()
        week16End = datetime.datetime(2019, 12, 19).date()

        week17 = datetime.datetime(2019, 12, 24).date()
        week17End = datetime.datetime(2019, 12, 26).date()

        print(date)
        print(week10)
        print(week10End)
        if(date >= week10 and date < week10End):
            return '10'
        if(date >= week11 and date < week11End):
            return '11'
        if(date >= week12 and date < week12End):
            return '12'
        if(date >= week13 and date < week13End):
            return '13'
        if(date >= week14 and date < week14End):
            return '14'
        if(date >= week15 and date < week15End):
            return '15'
        if(date >= week16 and date < week16End):
            return '16'
        if(date >= week17 and date < week17End):
            return '17'
        # if no matches return none
        return None

scores = NFLScores()      
db = client.scores
posts = db.games
CurrentDate = datetime.datetime.today().date()

week = scores.getWeek(CurrentDate)
print(week)
#sys.argv[1]
#

data = posts.find({'week' : week})

# see if there is data for week.  If not get it 
try:
    data.next()
except Exception as ex:
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
