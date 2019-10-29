from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time
import csv



class IndeedBot:
    def __init__(self, username, password):
        self.username = username
        self.password = password
        options = webdriver.ChromeOptions() 
        # add chrome profile. Change window size and run headless 
        #options.add_argument('user-data-dir=' + 'Users/nicchl01/AppData/Local/Google/Chrome/User Data/Default')
        #options.add_argument('--profile-directory=Profile 1')
        #options.add_argument('user-data-dir=C:/Users/nicchl01/AppData/Local/Google/Chrome/User Data')
        options.add_argument('window-size=1400,650')
        options.add_argument('headless')
        self.bot = webdriver.Chrome(options=options)

    def login(self):
        bot = self.bot
        time.sleep(5)
        bot.get('https://secure.indeed.com/account/login')
        time.sleep(3)
        email = bot.find_element_by_id('login-email-input')
        password = bot.find_element_by_id('login-password-input')
        email.clear()
        password.clear()
        time.sleep(2)
        email.send_keys(self.username)
        password.send_keys(self.password)
        password.send_keys(Keys.RETURN)
        time.sleep(4)
        bot.find_element_by_class_name('icl-DesktopGlobalHeader-logoLink').click()

    def get_Jobs(self, company, city):
        bot = self.bot
        # see if we are on the jobs page - go to page 
        try:
            bot.find_element_by_id('text-input-what')
        except Exception as ex:
            bot.get('https://www.indeed.com/?sq=1')

        # get inputs 
        what = bot.find_element_by_id('text-input-what')
        time.sleep(.5)
        where = bot.find_element_by_id('text-input-where')
        time.sleep(.5)
        # get length of text if there is text in where field 
        length = len(where.get_attribute('value'))
        # delete where text if there is text 
        if length > 0:
            where.send_keys(length * Keys.BACKSPACE)
        
        # input company and where fields 
        what.send_keys(company)
        where.send_keys(city)
        
        # click search button 
        bot.find_element_by_class_name('icl-WhatWhere-button').click()
        #time.sleep(.5)

        # get jobs and titles 
        jobs = []
        job_card = bot.find_elements_by_class_name("jobsearch-SerpJobCard")
        # loop through job_cards and add link and title 
        for block in job_card:
            jobs.append(block.find_element_by_class_name('company').text)
            elements = block.find_elements_by_tag_name('a.jobtitle')
            for el in elements:
                title = el.get_attribute('title')
                href = el.get_attribute('href')
                jobs.append(title)  
                jobs.append(href)
            

        with open('jobs.csv', 'a', newline='') as new_file:
            csv_writer = csv.writer(new_file)

            i = 0
            while i < len(jobs):
                 csv_writer.writerow([jobs[i], jobs[i+1], jobs[i+2]])
                 i = i + 3


nick = IndeedBot('Nick.Chlam@rht.com', 'dickhead123')
try:
    nick.login()
    
except Exception as ex:
    nick.bot.find_element_by_class_name('icl-DesktopGlobalHeader-logoLink').click()
   
time.sleep(1)

with open('companies.csv', 'r') as csv_file:
    csv_reader = csv.reader(csv_file)

    for line in csv_reader:
        if line:
            if line[0] != '':
                print(line[0])  
                nick.get_Jobs('"' + line[0] + '"', 'Denver, CO')



