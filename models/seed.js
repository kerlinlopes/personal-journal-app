/////////////////////////////
//Import Dependencies
/////////////////////////////
const mongoose = require("./connection")
const Journal = require("./journal")

///////////////////////////////
// Seed Code
///////////////////////////////

// save the connection in it a variable
const db = mongoose.connection

// make sure code doesn't run till connection is open
db.on("open", () => {
    // array of example/instruction journals
    const exJournals = [
        { name: "John Doe", date: " Month - Day - Year", topic: "Topic of your entry", entry: "Your entry goes here" },
        { name: "Kerlin", date: " 10 - 27 - 2021", topic: "Starting my project", entry: "Im starting my MELN Application project and Im very excited to see my completed project" },
      ];

    // delete all journals
    Journal.deleteMany({}).then((data) => {
        // seed the example/instruction journals
        Journal.create(exJournals).then((data) => {
            console.log(data)
            db.close()
        })
    })
})