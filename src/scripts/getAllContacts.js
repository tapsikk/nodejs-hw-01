import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async () => {
  try{
  const data = await fs.readFile(PATH_DB, 'utf8');
  
  const contact = JSON.parse(data);

  console.table(contact)

  } catch (error){
    console.log(error);
  }

};

console.log(await getAllContacts());
