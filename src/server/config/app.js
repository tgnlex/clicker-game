import express from 'express';
import helmet from 'helmet';
import logger from 'morgan';
import eta from './eta.js';

const app = express();

// Settomgs
app.set('view engine', 'eta')
app.set('views', 'src/pages/')
// customs settings 
app.set('name', "Clicker Game",)
// middleware
app.use(logger('dev'));
app.use(helmet());
app.use(express.urlencoded({extended: true}))
app.use(express.json)
// Static Server 
app.use('/src', express.static('src/static/'))


export default app;
