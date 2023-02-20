import {Router} from 'express';
import { DisplayAddContactsPage, DisplayContactsList, DisplayUpdateContactsPage, ProcessAddContactsPage, ProcessContactDelete, ProcessUpdateContactsPage } from '../controllers/contacts.js';
import { AuthGuard } from '../utils/index.js';
const router = Router();

// R ead
router.get('/contacts-list', AuthGuard, DisplayContactsList);

// C reate
router.get('/contacts-add', AuthGuard, DisplayAddContactsPage);
router.post('/contacts-add', AuthGuard, ProcessAddContactsPage);

// U pdate
router.get('/contacts-update/:id', AuthGuard, DisplayUpdateContactsPage);
router.post('/contacts-update/:id', AuthGuard, ProcessContactDelete);

// D elete
router.get('/contacts-delete/:id', AuthGuard, ProcessContactDelete);

export default router;