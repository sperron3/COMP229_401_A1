import express from 'express'
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import session from 'express-session';

// ES2022 Modules fix for __dirname
import path, {dirname} from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

//Import Mongoose Module
import mongoose from 'mongoose';


//Configuration Module
import { Secret, MongoURI } from '../config/index.js';

// Import Routes
import indexRouter from '../app/routes/index.js';
import contactsRouter from '../app/routes/contacts.js';


//Complete DB Configuration
mongoose.connect(MongoURI);
const db = mongoose.connection;

//Database Listeners
db.on('open', () => console.log("Connected to MongoDB"));
db.on('error', () => console.log("Mongo Connection Error"));

//Instantiate the Express Application
const app = express();

//Setup Express Middleware

//EJS Setup
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

//General Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(session({
    secret: Secret,
    saveUninitialized: false,
    resave: false
}));

//Use Routes
app.use('/', indexRouter);
app.use('/', contactsRouter);

export default app; 