const fs = require('fs')
const path = require('path')

// this path needs to be relative to work with fs
const contactsLocation = 'contacts.json'

/**
 * should read the contacts at the
 * @contactsLocation path and convert
 * it to a js object
 */
const getContacts = () => {
  const contactsBuffer = fs.readFileSync(path.resolve(contactsLocation));
  const contactsString = contactsBuffer.toString();
  const contactsJson = JSON.parse(contactsString);
  process.stdout.write(contactsString);
  // console.log(is a wrapper around process.stdout)
  console.log(contactsJson);
  return contactsJson;
}

/**
 * takes a contacts object, converts it to JSON
 * and saves it at the @contactsLocation path
 * @param {Object} contacts contacts object
 */
const saveContacts = (contacts) => {
  fs.writeFileSync(path.resolve(contactsLocation), JSON.stringify(contacts), 'utf8');
}

module.exports = {
  contactsLocation,
  getContacts,
  saveContacts
}

