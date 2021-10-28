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
        { name: "Apple", date: " Month - Day - Year", topic: "topic", entry: "entry" },
        { name: "Orange", date: " Month - Day - Year", topic: "topic", entry: "entry" },
        { name: "Peach", date: " Month - Day - Year", topic: "topic", entry: "entry" }

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