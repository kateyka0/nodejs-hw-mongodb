import { Contact } from '../models/contact.js';

export async function getContacts() {
  return Contact.find({});
}

