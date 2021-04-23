# Covid-19 Rest API information

## Overview
This is web API serving covid-19 information using Node JS. Covid-19 sources information gathered from :
- [https://covid19api.com/](https://covid19api.com/)
- [https://newsapi.org/](https://newsapi.org/)

## Features
- Summary - Total and new cases of covid-19
- History - Covid-19 history from day one outbreak
- News : Top headline news about covid-19

## Docs
- API Documentation see [https://kevinyuslianto.docs.apiary.io/#](https://kevinyuslianto.docs.apiary.io/#) or
[API Documentation](https://github.com/kaye5/Covid19-RestAPI-Information/blob/master/docs/API%20Documentation.apib)
- [Architecture Documentation](https://github.com/kaye5/Covid19-RestAPI-Information/blob/master/docs/Covid-19%20Information%20API%20Documentation.pdf)

## Requirement
The system requirement for running this project:
- Nodejs tested on v12.8.2
- npm / yarn

## Running this project locally
1. ### Prepare .env
- Create .env file using .env.example as a template
  - PORT : server running port
  - JWT_KEY : JWT secret key
  - NEWSAPI_KEY : NewsAPI provider api key
2. ### Using npm :
- Clone this repo
- Install dependencies with console
  - Using npm ```npm install```
  - OR
  - Using yarn if installed ```yarn install```
- Using console start the server
  - ``` node server.js ```
  - OR
  - if computer installed with nodemon ``` npm start ```
  - OR
  - if computer installed with nodemon ``` yarn start ```
- (optional) ```npm i -g nodemon ```

## Aditional Information
- For getting access key use /login endpoint with request body ```{"user" : "anything"}``` since there's no active authentication here.

## Dependencies
- [Express](https://github.com/expressjs/express)
- [Axios](https://github.com/axios/axios)
- [Cors](https://github.com/expressjs/cors)
- [Jsonwebtoken](https://jwt.io/)
- [Lodash](https://github.com/lodash/lodash)
- [Morgan](https://github.com/expressjs/morgan)

