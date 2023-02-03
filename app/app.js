import express from 'express'
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import session from 'express-session';

// ES2022 Modules fix for __dirname
import path, {dirname} from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

//Configuration Module
import { Secret } from '../config.js';

// Import Routes
import router from '../app/routes.index.js';

//Instantiate Routes
const app = express();

//Use Routes
app.use('/', router)

export default app; 