import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const countContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const constant = JSON.parse(data);

    return constant.length;

  } catch(error) {
    console.log(error);
  }

};

console.log(await countContacts());
