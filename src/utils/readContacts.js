import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB);
    const parsedData = JSON.parse(data);
    return parsedData || [];
  } catch (error) {
    console.error('Error reading contacts:', error);
    return [];
  }
};
