import dotenv from 'dotenv';
import connect from './db/server.js';
dotenv.config({
    path:'./.env'
})
connect();