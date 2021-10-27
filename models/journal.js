///////////////////////////////////
// import dependencies
///////////////////////////////////
// import the existing connected mongoose object from connection.js
const mongoose = require("./connection")

///////////////////////////////////////////
// Create our Journals Model
///////////////////////////////////////////
// destructuring Schema and model from mongoose
const {Schema, model} = mongoose 

// make a journals schema
const journalSchema = new Schema({
    name: String,
    date: String,
    topic: String,
    entry: String,
    username: String
})

// Make the Journal Model
const Journal = model("Journal", journalSchema)

// log the model to make sure it exists
// console.log(Journal)

///////////////////////////////////////
//export the journal model
///////////////////////////////////////
module.exports = Journal