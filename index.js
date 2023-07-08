import contactsService from './contacts.js'


const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
      case 'list':
        const allContacts = await contactsService.listContacts();
       return console.log(allContacts);  
      case 'get':
        const contactId = await contactsService.getContactById(id)
        return console.log(contactId);  
      case 'add':
    const addNewContact = await contactsService.addContact(name, email, phone);
    return console.log(addNewContact);  
      case 'remove':
       const deleteContact = await contactsService.removeContact(id)
        return console.log(deleteContact);
  
      default:
        console.warn('Unknown action type!');
    }
  }
  
//   invokeAction({action: 'list'});
//   invokeAction({action: 'get', id: 'AeHIrLTr6JkxGE6SN-0Rw'});
invokeAction({action: 'add', name: 'Stepan Giga', email: 'stepan@i.ua', phone: '(044) 222-16-18' });
//   invokeAction({action: 'remove', id: 'AeHIrLTr6JkxGE6SN-0Rw'})