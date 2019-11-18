from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import sys
from pymongo import MongoClient

class nflVideos:
    def __init__(self, *args):
        options = webdriver.ChromeOptions() 
        options.add_argument('--disable-dev-shm-usage')
        options.add_argument('--no-sandbox')
        options.add_argument('window-size=1400,650')
        options.add_argument('headless')
        self.bot = webdriver.Chrome(options=options)

    def getVideos(self):
        bot = self.bot 
        try:
            bot.get('https://www.foxsports.com/nfl')
        except Exception as ex:
            print(ex)
            exit()
        
