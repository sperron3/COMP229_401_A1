import {Router} from 'express';
import { DisplayLoginPage, ProcessLoginPage, ProcessLogoutPage } from '../controllers/auth.js';

const router = Router();

//Display Login Page
router.get('/login', DisplayLoginPage)
//Process Login Page
router.post('/login', ProcessLoginPage);
//Process Logout Page
router.get('/logout', ProcessLogoutPage);

export default router;