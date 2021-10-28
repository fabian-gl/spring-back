# My little project

Provides an API that allow a user to register, login and get lists of posts and photos fetched from jsonplaceholder.
For the photos, the result is cached to allow fast response from the second page the user asks for.

## Running the app

Clone this project
Then, in the project directory you can run

### `npm install`

### `npm dev`

That will start the server on [http://localhost:5000](http://localhost:5000)

## Dependencies

Express: Backend framework

Sequelize: MySQL ORM

node-fetch: Make requests to jsonplaceholder API

Yup: Validations

bcrypt: Hash passwords before storing in DB

jsonwebtoken: Generates token for auth, allowing the API to be REST
