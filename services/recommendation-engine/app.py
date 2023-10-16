from sklearn.metrics.pairwise import cosine_similarity
from sklearn.feature_extraction.text import CountVectorizer
import pandas as pd

import numpy as np

import pickle

sites = pickle.load(open("data.pkl", 'rb'))

similarity = pickle.load(open("similarity.pkl", 'rb'))

sites['tags'] = sites['category']+sites['attractions']

cv = CountVectorizer(max_features=10000, stop_words='english')

vector = cv.fit_transform(sites['tags'].values.astype('U')).toarray()

similarity = cosine_similarity(vector)


def recommend(activities):

    _sites = sites

    _sites.loc[len(_sites.index)] = ['', '', '', activities]

    _vector = cv.fit_transform(_sites['tags'].values.astype('U')).toarray()

    _similarity = cosine_similarity(_vector)

    index = len(_sites.index) - 1

    result = []

    _distance = sorted(
        list(enumerate(_similarity[index])), reverse=True, key=lambda vector: vector[1])
    for i in _distance[0:10]:
        print(_sites.iloc[i[0]].title)
        result.append(_sites.iloc[i[0]].title)

    return result
