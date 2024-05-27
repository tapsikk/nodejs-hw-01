import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeAllContacts = async () => {
  try {
    const removeContacts = [];

    await fs.writeFile(PATH_DB, JSON.stringify(removeContacts, null, 2))
  
    console.log("all contacts have been deleted");
  } catch (error) {
    console.log(error);
  }
};

await removeAllContacts();
