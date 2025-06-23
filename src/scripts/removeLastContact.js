import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    if (contacts.length === 0) {
      console.log('No contacts to remove.');
      return;
    }
    // const removedContact = contacts.pop();
    contacts.pop();
    await writeContacts(contacts);
  } catch (error) {
    console.error('Error removing last contact:', error);
  }
};

removeLastContact();
