import express from 'express';
import Contact from '../models/contact.js'; 

const router = express.Router();

router.get('/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json({
      status: 200,
      message: 'Successfully found contacts!',
      data: contacts,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: 'Failed to get contacts',
      error: error.message,
    });
  }
});

export default router;
