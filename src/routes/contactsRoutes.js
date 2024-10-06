import { Router } from 'express';
import { getAllContacts } from '../controllers/contactsController.js';

const router = Router();

router.get('/', getAllContacts); 

export default router;



