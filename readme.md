# Project 2 - My Journal App
#### BY KERLIN

## Project Summary

Building a Mongo-Express-Liquid-Node (MELN) Application. The tools used are HTML, CSS, Javascript, Dotenv, Express, Liquid-Express-Views, Method-Override, Mongoose, and Morgan!

## Models

Models:
```
Journal
 - name: String
 - date: String
 - topic: String
 - entry: String
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
 - User is able to create their own account to log into the My Personal Journal App
 - User can create their own personal entries or any entries at all
 - User is be able to edit, update or delete any journal entry they make

## Challenges

- typos 
```
// Register Journals Router
app.use("/jourals", JournalsRouter)
```
- responsive design
```
margin-inline: auto;
width: min(90%, 70.5rem);
```
```
margin: auto
width: min(90%, 70.5rem);
```
- ugly code/ unorganized


## List of Technologies

-Node JS, Liquid JS, Express, Mongoose/MongoDB