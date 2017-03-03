# URL-Shortener
Deployment of Web Applications

# Installation
## From Git
```sh
git clone https://github.com/milemu23/URL-Shortener.git
cd URL-Shortener
npm install
```

# Endpoints

0. <strong>POST /api/v1/urls</strong><br />
  This will pull the url data from the json file and create a shortened url.

 ```
 {
   "url" : "http://www.google.com"
 }
  ```

# Testing the API

0. Using Postman is the suggested way to test<br />
 RESULT

 ```
"Original URL: http://www.google.com\nShortened URL: localhost:3000/api/v1/url/dd_7QbeB"
```
