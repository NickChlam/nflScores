import requests
import json 

data = requests.get('http://localhost:3001/winner/wins/11')


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


