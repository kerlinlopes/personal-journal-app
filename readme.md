# Project 2
#### By NAME

## Project Summary

Tell me what are your building and what tools are you using?

Building a Mongo-Express-Liquid-Node (MELN) Application. The tools im using are HTML, CSS, Javascript, Dotenv, Express, Liquid-Express-Views, Method-Override, Mongoose, and Morgan!

## Models11111

Models:
```
Journal
 - name: String
 - topic: String
 - date: String
 - description: String
 - username: String
```

## Route Table

List your routes in a table

| Route Name | URL | HTTP | Description |
|-----------|------|-------|-------------|
| INDEX | /journals | GET | Display all Journal Entires
| NEW | /journal/new | GET | Show for to make new Journal Entires
| CREATE | /journals | POST | Add new Journal Entires to database, then redirect
| SHOW | /journals/:id | GET | Show information about one Journal Entry
| EDIT | /journals/:id/edit | GET | Show edit form of one Journal Entry
| UPDATE | /journals/:id | PUT | Update a particular Journal Entry, then redirect
| DELETE | /journals/:id | DELETE | Delete a particular Journal Entry, then redirect

## User Stories

## Challenges

- detail roadblocks and anything you did to overcome whether you did or didn't

## List of Technologies