import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const thanos = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8')
    
    const contact = JSON.parse(data);
  
    const deleteOneContact = contact.filter(() => Math.random() >= 0.5);

    await fs.writeFile(PATH_DB, JSON.stringify(deleteOneContact, null, 2))

  } catch (error) {
    console.log(error);
  }
};

await thanos();
