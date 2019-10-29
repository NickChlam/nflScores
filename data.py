from pymongo import MongoClient
client = MongoClient()

db = client.scores
posts = db.posts

bills_post = posts.find()

for post in bills_post:
    print(post)