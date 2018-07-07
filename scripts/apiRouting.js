const survey1 = require('../assets/data/surveys/survey1.json')

const getData = require('./calcResults')


const apiRouting = (app)=>{
    
    // API ROUTE TO GET SURVEY QUESTIONS TO ASK
    app.get('/api/questions', (req,res)=>{
        res.json(survey1)
    })

    // API ROUTE TO GET OVERALL SURVEY RESULTS (RETURNS AN ARRAY OF OBJECTS CONTAINING EACH QUESTIONS RESULTS)
    // .. (e.g. [{"EMINUSE": {"1":"80","2""20"}}]) where '80' and '20' represent percentage of people with that answer
    app.get('/api/getResults', (req,res)=>{
        const params = req.body.params
        res.json(getData.stats(params))

    })

    // API ROUTE FOR FRONT END TO SEND USERS SURVEY RESULTS TO DATABASE
    app.post('/api/sendResults', (req,res)=>{
        // Get user answers object from request body
        const user_results = req.body.results
        // Do magic that adds user results to database
    })

    // ADDS NEW USER TO DATABASE WITH SELECTED DEMOGRAPHICS
    app.post('/api/addUser', (req,res)=>{
        // get user information from request body (must be JSON)
        const newUser = req.body        
        // will send back new user object for now
        res.send(newUser)
    })    
}


module.exports = apiRouting
