from pymongo import MongoClient
import pandas as pd
import numpy as np

# Connect to MongoDB
client = MongoClient('mongodb+srv://kailamnyc:MyBWw1gz3Ri55Btg@yarnsolutions.gujsrth.mongodb.net/?retryWrites=true&w=majority')

db = client['tech-secure']  # Replace 'your_database' with your actual database name
collection = db['layoffs']  # Replace 'your_collection' with your actual collection name

# Read the CSV file using pandas
# df = pd.read_csv('/Users/outzider/projects/techsecure/tech-secure/data/layoffs.csv')  # Replace 'your_file.csv' with the path to your CSV file

# Convert the dataframe to a dictionary and insert into MongoDB
# records = df.to_dict(orient='records')
# collection.insert_many(records)

# Create collection of unique industries
# unique_values = collection.distinct("industry")
# print(unique_values)
# new_collection = db.newCollection
# for value in unique_values:
#     new_collection.insert_one({"name": value})

# Create collection of unique companies(unique_values)
# new_collection = db.newCollection
# unique_values = collection.distinct("location")
# for value in unique_values:
#     new_collection.insert_one({"name": value})


# for doc in list(db.collection.find({ 'total_laid_off': np.nan })):
#     db.collection.update_one({'_id': doc['_id']}, {'$set': {'total_laid_off': (lambda x: None if np.isnan(x) else x)(doc['total_laid_off'])}})

from bson import ObjectId
import math

# Get all documents where 'total_laid_off' is NaN
# docs = collection.find({'total_laid_off':  'NaN'})

# Loop through each document
# for doc in docs:
#     Update 'total_laid_off' to be an empty value
    # db.collection.update_one({'_id': ObjectId(doc['_id'])}, {'$set': {'total_laid_off': ""}})


docs = collection.find({'stage': np.NaN})
for doc in docs:
    # print(doc)
    collection.update_one({'_id': ObjectId(doc['_id'])}, {'$set': {'stage': None}})