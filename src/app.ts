import express from 'express';
import connect from './utils/connect.js';
import dotenv from 'dotenv'
import routes from './routes.js';
dotenv.config({path:"../config.env"})

const port = process.env.PORT;
const app = express();

app.listen(port, async () => {
    
    await connect()
    routes(app)
    console.log('listening on port 5000')
})