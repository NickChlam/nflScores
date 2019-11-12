from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import sys
from pymongo import MongoClient
import datetime

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
    # TODO: create function to chnage array to objec
        self.winners = []
    
    def getGames(self, week):
        bot = self.bot

        bot.get(f'https://www.foxsports.com/nfl/scores?season=2019&seasonType=1&week={week}')

        scoreContainer = bot.find_element_by_id('wisbb_scoresContainer')

        games = bot.find_elements_by_class_name('wisbb_final')
        
        for game in games:
            info = self.getWinningTeam(game)
            
            self.winners.append(info)

    def getWinningTeam(self, game):
        scores = game.find_element_by_class_name('wisbb_winningTeam')
        score = scores.find_element_by_class_name('wisbb_score').get_attribute('innerHTML')
        name = scores.find_element_by_class_name('wisbb_name').get_attribute('innerHTML')

        return {'name': name, 'score': score}
    
    def getWeek(self, date) :
        # TODO import from getGames.py
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
        if(date >= week10 and date < week10End):
            return '9'
        if(date >= week11 and date < week11End):
            return '10'
        if(date >= week12 and date < week12End):
            return '11'
        if(date >= week13 and date < week13End):
            return '12'
        if(date >= week14 and date < week14End):
            return '13'
        if(date >= week15 and date < week15End):
            return '14'
        if(date >= week16 and date < week16End):
            return '15'
        if(date >= week17 and date < week17End):
            return '16'

        return None


scores = NFLScores()
# TODO: create dict on football season weeks and have a default set to the current week
CurrentDate = datetime.datetime.today().date()
week = scores.getWeek(CurrentDate)
print(week)
if week == None:
    quit()
scores.getGames(week)




db = client.scores
posts = db.results

print(scores.winners)

try :
    isData = posts.find({'week' : week})
    isData.next()
    print('exists')
except Exception as ex:

    print('saving')
    for game in scores.winners:
        post = {
            "week" : week,
            "game" : game
        }
        save = posts.insert_one(post)

scores.bot.close()
scores.bot.quit()
data = posts.find()

for post in data:
    print(post)


