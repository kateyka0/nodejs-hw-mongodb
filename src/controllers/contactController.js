import { getContacts } from '../services/contacts.js';

export async function getAllContacts(req, res) {
  try {
    const contacts = await getContacts();
    res.status(200).json({
      status: 200,
      message: "Successfully found contacts!",
      data: contacts,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}

