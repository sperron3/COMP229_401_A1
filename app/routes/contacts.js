import {Router} from 'express';
import { DisplayAddContactsPage, DisplayContactsList, DisplayUpdateContactsPage, ProcessAddContactsPage, ProcessContactDelete, ProcessEditContactsPage } from '../controllers/contacts.js';
const router = Router();

// R ead
router.get('/contacts-list', DisplayContactsList);

// C reate
router.get('/contacts-add', DisplayAddContactsPage);
router.post('/contacts-add', ProcessAddContactsPage);

// U pdate
router.get('/contacts-update/:id', DisplayUpdateContactsPage);
router.post('/contacts-update/:id', ProcessEditContactsPage);

// D elete
router.get('/contacts-delete/:id', ProcessContactDelete);

export default router;