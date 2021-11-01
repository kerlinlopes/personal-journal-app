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
- Modal pop up box


## List of Technologies

-Node JS, Liquid JS, Express, Mongoose/MongoDB

## Resources 
- Emoji Unicode Reference: https://www.w3schools.com/charsets/ref_emoji.asp
- Responsive Styling: https://www.youtube.com/watch?v=bn-DQCifeQQ
- Modals 4 ways: https://dzone.com/articles/4-ways-to-create-a-modal-popup-box-with-html-css-a
- Pop up box icon: https://fontawesome.com/v5.15/icons/user-lock?style=solid
