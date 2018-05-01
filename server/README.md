SERVER Side (Express, MongoDB)
===
Running with 2 terminals 

**First terminal (for Express)**
```
cd <project folder>/server
```
```
yarn install or npm install
```
```
nodemon or npm start
```
server will run on 2 ports
* http on port 3500
* https on port 4000

*So you can test server with <br>
**http**://localhost:*3500* <br>
**https**://localhost:*4000*

**Second terminal (for MongoDB)**
```
mongod --dbpath <server directory>/db/
```
*MongoDB will running on port :27017*

<h3> Routing </h3>

Api route
* /api/v1/<...>   **ex.**
```
https://localhost:4000/api/v1/
```

<h3>Api Documentation</h3>

* **/api/v1/..**

HTTP Method  | Path | Body | Response | Description
------------ | ---- | ---- | -------- | -----------
GET  | / | | { message: String } | Landing Page
GET  | /course/semester/**<:numberOfSemester>** | |{ **success**: bool, **message**: String, **data**: Array of JSON }  | replace **numberOfSemester** to GET Array of courses' JSON
GET  | /re-fetch | | {**success**: bool, **message**: String} | Call this get method to remove and fetch all new data
POST | /register | {**email**: String, **password**: String, **name**: String, **surname**: String} | {**success**: bool, **message**: String} | Send body as application/json as follows to register new user
POST | /login | {**usernameOrEmail**: String, **password**: String} | {**success**: bool, **message**: String, **data**: Object of User} | This method will return data of user as object if login success
