import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  const contacts = await readContacts();
  return contacts;
};

const displayContacts = async () => {
  const contacts = await getAllContacts();
  console.log(contacts);
};

displayContacts();
