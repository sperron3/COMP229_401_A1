import { Router } from "express";
import { displayAboutPage, displayContactPage, displayHomePage, displayProjectsPage, displayServicesPage } from "../controllers/index.js";

const router = Router();

router.get('/', displayHomePage);
router.get('/home', displayHomePage);
router.get('/about', displayAboutPage);
router.get('/contact', displayContactPage);
router.get('/projects', displayProjectsPage);
router.get('/services', displayServicesPage);

export default router;