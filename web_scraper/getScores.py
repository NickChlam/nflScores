from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import sys
from pymongo import MongoClient
client = MongoClient()


class NFLScores:
    def __init__(self, *args, **kwargs):
        options = webdriver.ChromeOptions() 
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


scores = NFLScores()
# TODO: create dict on football season weeks and have a default set to the current week
week = sys.argv[1]
scores.getGames(week)


scores.bot.close()
scores.bot.quit()

db = client.scores
posts = db.results

for game in scores.winners:
    post = {
        "week" : week,
        "game" : game
    }
    save = posts.insert_one(post)


data = posts.find()

for post in data:
    print(post)

# result = db.posts.delete_many({'author': 'jacl'})
# print(result.deleted_count)
