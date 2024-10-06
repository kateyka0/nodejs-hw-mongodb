import Contact from '../models/contact.js';

export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json({
      status: 200,
      message: 'Successfully found contacts!',
      data: contacts,
    });
  } catch (error) {
    console.error(error); 
    res.status(500).json({
      status: 500,
      message: 'Server error',
      error: error.message, 
    });
  }
};




