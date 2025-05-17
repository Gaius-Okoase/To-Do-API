import express from 'express'; // Import express.js
import toDoRouter from './router/toDoRouter.js';

const app = express(); //Instantiate an express.js app
app.use(express.json()); //Middleware to parse json

const PORT = 5000; //Set up port to listen to server

app.use('/api/v1/todo', toDoRouter);

// app.get('/', (req, res) => {
//     console.log(`Received request for ${req.url}`);
//     res.send(`Hello, Express!`);
// });

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});