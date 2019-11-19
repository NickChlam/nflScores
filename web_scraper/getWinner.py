import requests
import json 
import datetime




def getWeek(date):
    week10 = datetime.datetime(2019, 11, 5).date()
    week10End = datetime.datetime(2019, 11, 7).date()

    week11 = datetime.datetime(2019, 11, 12).date()
    week11End = datetime.datetime(2019, 11, 14).date()

    week12 = datetime.datetime(2019, 11, 18).date()
    week12End = datetime.datetime(2019, 11, 21).date()

    week13 = datetime.datetime(2019, 11, 25).date()
    week13End = datetime.datetime(2019, 11, 29).date()

    week14 = datetime.datetime(2019, 12, 2).date()
    week14End = datetime.datetime(2019, 12, 5).date()

    week15 = datetime.datetime(2019, 12, 9).date()
    week15End = datetime.datetime(2019, 12, 12).date()

    week16 = datetime.datetime(2019, 12, 16).date()
    week16End = datetime.datetime(2019, 12, 19).date()

    week17 = datetime.datetime(2019, 12, 23).date()
    week17End = datetime.datetime(2019, 12, 26).date()

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


CurrentDate = datetime.datetime.today().date()

week = getWeek(CurrentDate)

print(week)

data = requests.get(f'http://localhost:3001/winner/wins/{week}' )


text = ''

picks = data.json()

print(data.json())

for d in picks:
    print(d)
    text +=  d['name'] + ' '+ d['email'] + ' ' + 'won ' + str(d['gamesWon']) + ' games. ' + 'picks: '

    for pick in d['games']:
        text += ' ' + pick + ','
    
    text += '\n'



# email list of wins for each pick 
email = {
    'to': 'Nick.Chlam@rht.com',
    'text': text,
    'subject': 'winners'}

email  = requests.post('http://localhost:3001/mail',json= email )
print(email.text)
# email winner out 


