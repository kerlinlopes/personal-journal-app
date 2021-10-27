# Project 2 - My Journal App
#### BY KERLIN

## Project Summary

Building a Mongo-Express-Liquid-Node (MELN) Application. The tools used are HTML, CSS, Javascript, Dotenv, Express, Liquid-Express-Views, Method-Override, Mongoose, and Morgan!

## Models

Models:
```
Journal
 - name: String
 - topic: String
 - date: String
 - description: String
 - username: String
```
```
User
 - username: {type: String, required: true, unique: true},
 - password: {type: String, required: true}
```

## Route Table

List your routes in a table

| Route Name | URL | HTTP | Description |
|-----------|------|-------|-------------|
| INDEX | /journals | GET | Display all Journal Entires
| NEW | /journal/new | GET | Show form to make new Journal Entires
| CREATE | /journals | POST | Add new Journal Entires to database, then redirect (index)
| SHOW | /journals/:id | GET | Show information about one Journal Entry
| EDIT | /journals/:id/edit | GET | Show edit form of one Journal Entry
| UPDATE | /journals/:id | PUT | Update a particular Journal Entry, then redirect (index)
| DELETE | /journals/:id | DELETE | Delete a particular Journal Entry, then redirect (index)

## User Stories
 - As a user, I would like to be able to create my own account to log into the app
 - As a user, I want to create my own personal entiries or any entries at all
 - As a user, I want to be able to edit, update or delete any journal entry I make

## Challenges

- detail roadblocks and anything you did to overcome whether you did or didn't

## List of Technologies

-Node JS, Liquid JS, Express, Mongoose/MongoDB