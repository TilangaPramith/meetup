import express from 'express';
import dbConfig from './config/db';
import middlewareConfig from './config/middleware';
import {MeetupRoutes} from './modules'

const app = express();
dbConfig(); //DATABASE
middlewareConfig(app); //MIDDLEWARE

app.use('/api',[MeetupRoutes])

const PORT = process.env.PORT || 3000;
app.listen(PORT, function(err){
    if(err){
        console.error(err)
    }
    else{
        console.log('server is run on ',PORT);
    }
})