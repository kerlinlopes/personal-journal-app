/////////////////////////
// Import Dependencies
/////////////////////////
const express = require("express") // express for Router function
const Journal = require("../models/journal.js") // journal model

//////////////////
// create router
//////////////////
const router = express.Router()

/////////////////////////////////
// Router Middleware
/////////////////////////////////

// middleware to check if user is logged in
router.use((req, res, next) => {
    // check if logged in
    if (req.session.loggedIn){
        // send to routes
        next()
    } else {
        res.redirect("/user/login")
    }
})

////////////////////////
// Journals Routes
////////////////////////

//seed route - seed our example data
router.get("/seed", (req, res) => {
    // array of example journals
    const exJournals = [
        { name: "John Doe", date: " Month - Day - Year", topic: "Topic of your entry", entry: "Your entry goes here" },
        { name: "Kerlin", date: " 10 - 27 - 2021", topic: "Starting my project", entry: "Im starting my MELN Application project and Im very excited to see my completed project" },
      ];

    // delete all journals
    Journal.deleteMany({}).then((data) => {
        // seed the starter journals
        Journal.create(exJournals).then((data) => {
            // send created journals back as JSON
            res.json(data)
        })
    })
})

// index route - get - /journals
router.get("/", (req, res) => {
    //find all the journals
    Journal.find({username: req.session.username})
    .then((journals) => {
        // render the index template with the journals
        res.render("journals/index.liquid", {journals})
    })
    // error handling
    .catch((error) => {
        res.json({error})
    })
})

// new route - get request - /journals/new
router.get("/new", (req, res) => {
    res.render("journals/new.liquid")
})

// create - post request - /journals
router.post("/", (req, res) => {

    // add the username to req.body, to track user
    req.body.username = req.session.username

    // create the new journal
    Journal.create(req.body)
    .then((journal) => {
        // redirect the user back to the index route
        res.redirect("/journals")
    })
    // error handling
    .catch((error) => {
        res.json({error})
    })

})

// edit route - get request - /journals/:id/edit
router.get("/:id/edit", (req, res) => {
    // get the id from params
    const id = req.params.id

    // get the journal with the matching id
    Journal.findById(id)
    .then((journal) => {
        // render the edit page template with the journal data
        res.render("journals/edit.liquid", { journal })
    })
    // error handling
    .catch((error) => {
        res.json({error})
    })
})

// update route - put request - "/journals/:id"
router.put("/:id", (req, res) => {
    // get the id from params
    const id = req.params.id
 
    // update the item with the matching id
    Journal.findByIdAndUpdate(id, req.body, {new: true})
    .then((journal) => {
        // redirect user back to index
        res.redirect("/journals")
    })
     // error handling
     .catch((error) => {
        res.json({error})
    })
}
)

// destroy route - delete request - /journals/:id
router.delete("/:id", (req, res) => {
    // grab the id from params
    const id = req.params.id
    // delete the journal
    Journal.findByIdAndRemove(id)
    .then((journal) => {
        // redirect user back to index
        res.redirect("/journals")
    })
     // error handling
     .catch((error) => {
        res.json({error})
    })
})

// show route - get - /journals/:id
router.get("/:id", (req, res) => {
    // get the id from params
    const id = req.params.id

    // get that particular journal from the database
    Journal.findById(id)
    .then((journal) => {
        // render the show template with the journal
        res.render("journals/show.liquid", {journal})
    })
    // error handling
    .catch((error) => {
        res.json({error})
    })
})

/////////////////////////////
// export the router
/////////////////////////////
module.exports = router