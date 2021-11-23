

class Contact {
  constructor(id, email, firstName, lastName, phoneNumber, address, contactType, group, initials, notes) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.contactType = contactType;
    this.initials = initials;
    this.notes = notes;
    this.group = group;
    this.address = address;
  }

  update(id, email, firstName, lastName, phoneNumber, address, contactType, group, initials, notes){
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.contactType = contactType;
    this.initials = initials;
    this.notes = notes;
    this.group = group;
    this.address = address;
  }

}


export { Contact };
