# URL-Shortener
Deployment of Web Applications

# Installation
## From Git
```sh
git clone https://github.com/milemu23/URL-Shortener.git
cd URL-Shortener
```
## Add dependencies
```sh
npm install
```
# Start Server
To start your server, run this code in your terminal:
```sh
node src/server.js
```
To allow your server to restart automatically when making changes to your code, install [nodemon](https://www.npmjs.com/package/nodemon):
```sh
npm install -g nodemon
```
then run to start the server:
```sh
nodemon src/server.js
```

# Using MySQL
## create .env file to store your environmental variables
```sh
DB_NAME=
DB_USER=
DB_PASS=
DB_HOST=
DB_SCHEMA=
DB_PORT=
```
## managing your database
To manage my database I used Sequel Pro, but any data management application will work.

# Routes
Route  | Result
------------- | -------------
localhost:3000/status  |   healthy: true
localhost:3000/api/v1/go/:shortURL   |   Redirect to Original URL

# Endpoints
Method  | Route  | Result
------------- | ------------- | -------------
POST  |   /api/v1/urls  |   Create a shortened URL
GET  |   /api/v1/urls  |   Display all URLS
GET  |   /api/v1/urls/:id  |   Display URL based upon id
POST  |   /api/v1/urls/:id  |   Update URL based upon id
DELETE  |   /api/v1/urls/:id  |   Delete url based upon id

# Testing the API
I test the API using [Postmon](https://www.getpostman.com/)
0. TO POST:
Select Method POST
```sh
enter localhost:3000/api/v1/urls
```
Click on BODY tab and RAW radio button
```sh
enter {
  "original" : "http://www.testurl.com"
}
```
Click SEND!
<br />
RESULTS:
```sh
{
  "id": 4,
  "original": "http://www.gmail.com",
  "shortURL": "J1w8cF8Y",
  "updatedAt": "2017-03-06T03:21:42.000Z",
  "createdAt": "2017-03-06T03:21:42.000Z"
}
```
1. TO GET ALL URLS:
Select Method GET
```sh
enter localhost:3000/api/v1/urls
```
Click SEND!
<br />
RESULTS:
```sh
[
  {
    "id": 2,
    "original": "http://www.google.com",
    "shortURL": "krC4LB12",
    "createdAt": "2017-03-06T02:53:38.000Z",
    "updatedAt": "2017-03-06T02:53:38.000Z"
  },
  {
    "id": 3,
    "original": "http://www.gmail.com",
    "shortURL": "NmKMV_7v",
    "createdAt": "2017-03-06T03:03:59.000Z",
    "updatedAt": "2017-03-06T03:03:59.000Z"
  },
  {
    "id": 4,
    "original": "http://www.gmail.com",
    "shortURL": "J1w8cF8Y",
    "createdAt": "2017-03-06T03:21:42.000Z",
    "updatedAt": "2017-03-06T03:21:42.000Z"
  }
]
```
2. TO GET ONE URL BY ID:
Select Method GET
```sh
enter localhost:3000/api/v1/urls/2
```
Click SEND!
<br />
RESULTS:
```sh
{
  "id": 2,
  "original": "http://www.google.com",
  "shortURL": "krC4LB12",
  "createdAt": "2017-03-06T02:53:38.000Z",
  "updatedAt": "2017-03-06T02:53:38.000Z"
}
```
3. TO UPDATE ONE URL:
Select Method POST
```sh
enter localhost:3000/api/v1/urls/2
```
Click on BODY tab and RAW radio button
```sh
enter {
  "original" : "http://www.updateurl.com"
}
```
Click SEND!
<br />
RESULTS:
```sh
{
  "id": 2,
  "original": "http://www.updateurl.com",
  "shortURL": "krC4LB12",
  "createdAt": "2017-03-06T02:53:38.000Z",
  "updatedAt": "2017-03-06T03:26:16.000Z"
}
```
4. TO DELETE ONE URL BY ID:
Select Method DELETE
```sh
enter localhost:3000/api/v1/urls/3
```
Click SEND!
<br />
RESULTS:
```sh
DELETED
```
