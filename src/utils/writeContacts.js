import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

// Clarificationn needed: This function rewrites the entire db file with the updated contacts.
// Do i have to change it to append new contacts instead?

export const writeContacts = async (updatedContacts) => {
  try {
    const data = JSON.stringify(updatedContacts, null, 2);
    await fs.writeFile(PATH_DB, data);
  } catch (error) {
    console.error('Error writing contacts:', error);
  }
};
