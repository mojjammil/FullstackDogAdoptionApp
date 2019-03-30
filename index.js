// Import and Express server declaration
const express = require('express');
const server = express();
server.use(express.json());

// First Get request to route '/'
server.get('/', (req, res)=> {
    res.send("Woof Woof! We out the pound!")
});

// Define port variable and listen to server
const port = process.env.PORT || 5000;
server.listen(port, ()=> console.log(`\n Running on port ${port}\n`))

