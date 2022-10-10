# To Do List

- Functionalities:
  :cloud: Login, Logout, Signup
  :cloud: Search, Add, Delete, Edit items
- React Application

![alt text](https://ibb.co/YDxdfjp)

### Install frontend Packages

`cd frontend`
`npm install @reduxjs/toolkit react-redux axios bootstrap react-bootstrap react-dom react-icons react-router-dom`

### Install backend Packages

`cd backend`
` npm install bcrypt cors dotenv express jsonwebtoken jwt-decode knex passport passport-jwt pg`

### setup frontend .env

- in /frontend , set 1 variable in .env
  `REACT_APP_BACKEND = http://localhost:8000`

### setup backend .env

- in /backend , set 4 variables in .env
  `DB_NAME = YOUR DATABASE NAME`
  `DB_USERNAME = YOUR DATABASE USERNAME`
  `DB_PASSWORD = YOUR DATABASE PASSWORD`
  `JWT_SECRET = YOUR JWT_SECRET`

### setup for backend DB connect

- set up dummy data, run:
  `knex migrate:latest`
  `knex seed:run`

### Start the App:

`npm start`

### Account information

login account: a
login password: a
