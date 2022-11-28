const { default: ResetPassword } = require("../components/ResetPassword")

// Create new Worker
exports.WorkersCreate = async (req, res) => {
    // Add new worker to database
    knex('Workers')
      .insert({ // insert new record, a worker
        'workerID': req.body.workerID,
        'email': req.body.email,
        'firstName': req.body.firstName,
        'lastName': req.body.lastName,
        'affiliation': req.body.affiliation,
        'phone': req.body.phone
      })
      .then(() => {
        // Send a success message in response
        res.json({ message: `Worker ${req.body.workerID} created.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error creating ${req.body.workerID}: ${err}` })
      })
  }
  
  // Remove specific worker
  exports.workersDelete = async (req, res) => {
    // Find specific worker in the database and remove it
    knex('Workers')
      .where('WorkerID', req.body.workerID) // find correct record based on id
      .del() // delete the record
      .then(() => {
        // Send a success message in response
        res.json({ message: `Worker ${req.body.workerID} deleted.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error deleting ${req.body.workerID}: ${err}` })
      })
  }

// Create new W2W Communication
exports.W2WCommunicationsCreate = async (req, res) => {
    // Add new communication to database
    knex('W2WCommunications')
      .insert({ // insert new record, a communication
        'messageID': req.body.messageID,
        'timeStamp': req.body.timeStamp,
        'messageText': req.body.messageText
      })
      .then(() => {
        // Send a success message in response
        res.json({ message: `Communication ${req.body.messageID} created.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error creating ${req.body.messageID}: ${err}` })
      })
  }
  
  // Remove specific W2W communication
  exports.W2WCommunicationsDelete = async (req, res) => {
    // Find specific communication in the database and remove it
    knex('W2WCommunications')
      .where('messageID', req.body.messageID) // find correct record based on id
      .del() // delete the record
      .then(() => {
        // Send a success message in response
        res.json({ message: `Communication ${req.body.messageID} deleted.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error deleting ${req.body.messageID}: ${err}` })
      })
  }

// Create new Message Recipient
exports.MessageRecipientsCreate = async (req, res) => {
    // Add new message recipient to database
    knex('MessageRecipients')
      .insert({ // insert new record, a message recipient
        'messageID': req.body.messageID,
        'recipient': req.body.recipient
      })
      .then(() => {
        // Send a success message in response
        res.json({ message: `Message Recipient ${req.body.recipient} created.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error creating ${req.body.recipient}: ${err}` })
      })
  }
  
  // Remove specific message recipient
  exports.MessageRecipientsDelete = async (req, res) => {
    // Find specific message recipient in the database and remove it
    knex('MessageRecipients')
      .where('messageID', req.body.messageID) // find correct record based on id
      .del() // delete the record
      .then(() => {
        // Send a success message in response
        res.json({ message: `Message Recipient ${req.body.messageID} deleted.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error deleting ${req.body.messageID}: ${err}` })
      })
  }

    // Create new Contact
exports.ContactsCreate = async (req, res) => {
    // Add new contact to database
    knex('Contacts')
      .insert({ // insert new record
        'contactID': req.body.messageID,
        'firstName': req.body.firstName,
        'middleName': req.body.middleName,
        'lastName': req.body.lastName,
        'DoB': req.body.DoB,
        'race': req.body.race,
        'sex': req.body.sex,
        'setting': req.body.setting,
        'notes': req.body.notes,
        'isDeceased': req.body.isDeceased,
        'isAtRisk': req.body.isAtRisk,
        'isActive': req.body.isActive
      })
      .then(() => {
        // Send a success message in response
        res.json({ message: `Contact ${req.body.contactID} created.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error creating ${req.body.contactID}: ${err}` })
      })
  }
  
  // Remove specific contact
  exports.ContactsDelete = async (req, res) => {
    // Find specific contact in the database and remove it
    knex('Contacts')
      .where('contactID', req.body.contactID) // find correct record based on id
      .del() // delete the record
      .then(() => {
        // Send a success message in response
        res.json({ message: `Contact ${req.body.contactID} deleted.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error deleting ${req.body.contactID}: ${err}` })
      })
  }

    // Create new Contact Status
exports.ContactStatusCreate = async (req, res) => {
    // Add new contact status to database
    knex('ContactStatus')
      .insert({ // insert new record, a contact status
        'contactID': req.body.messageID,
        'statusUpdateDate': req.body.firstName,
        'status': req.body.middleName,
        'note': req.body.lastName,
        'workerID': req.body.DoB
      })
      .then(() => {
        // Send a success message in response
        res.json({ message: `Contact Status ${req.body.contactID} created.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error creating ${req.body.contactID}: ${err}` })
      })
  }
  
  // Remove specific contact status
  exports.ContactStatusDelete = async (req, res) => {
    // Find specific contact status in the database and remove it
    knex('ContactStatus')
      .where('contactID', req.body.contactID) // find correct record based on id
      .del() // delete the record
      .then(() => {
        // Send a success message in response
        res.json({ message: `Contact Status ${req.body.contactID} deleted.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error deleting ${req.body.contactID}: ${err}` })
      })
  }

      // Create new Contact Address
exports.ContactAddressesCreate = async (req, res) => {
    // Add new contact address to database
    knex('ContactAddresses')
      .insert({ // insert new record
        'addressID': req.body.addressID,
        'contactID': req.body.contactID,
        'streetAddress': req.body.streetAddress,
        'city': req.body.city,
        'state': req.body.state,
        'zip': req.body.zip,
        'isCurrent': req.body.isCurrent
      })
      .then(() => {
        // Send a success message in response
        res.json({ message: `Contact Address ${req.body.addressID} created.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error creating ${req.body.addressID}: ${err}` })
      })
  }
  
  // Remove specific contact address
  exports.ContactAddressDelete = async (req, res) => {
    // Find specific contact address in the database and remove it
    knex('ContactAddress')
      .where('addressID', req.body.addressID) // find correct record based on id
      .del() // delete the record
      .then(() => {
        // Send a success message in response
        res.json({ message: `Contact Address ${req.body.addressID} deleted.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error deleting ${req.body.contactID}: ${err}` })
      })
  }

      // Create new Contact Phone
exports.ContactPhonesCreate = async (req, res) => {
    // Add new contact phone to database
    knex('ContactPhones')
      .insert({ // insert new record
        'contactID': req.body.contactID,
        'phone': req.body.phone,
        'phoneType': req.body.phoneType,
        'isCurrent': req.body.isCurrent
      })
      .then(() => {
        // Send a success message in response
        res.json({ message: `Contact Phone ${req.body.contactID} created.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error creating ${req.body.contactID}: ${err}` })
      })
  }
  
  // Remove specific contact phone
  exports.ContactStatusDelete = async (req, res) => {
    // Find specific contact phone in the database and remove it
    knex('ContactPhones')
      .where('contactID', req.body.contactID) // find correct record based on id
      .del() // delete the record
      .then(() => {
        // Send a success message in response
        res.json({ message: `Contact Status ${req.body.contactID} deleted.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error deleting ${req.body.contactID}: ${err}` })
      })
  }

// Create new Contact Email
exports.ContactEmailsCreate = async (req, res) => {
    // Add new contact email to database
    knex('ContactEmails')
      .insert({ // insert new record
        'contactID': req.body.contactID,
        'email': req.body.email,
        'emailType': req.body.emailType,
        'isCurrent': req.body.isCurrent
      })
      .then(() => {
        // Send a success message in response
        res.json({ message: `Contact Email ${req.body.contactID} created.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error creating ${req.body.contactID}: ${err}` })
      })
  }
  
  // Remove specific contact email
  exports.ContactStatusDelete = async (req, res) => {
    // Find specific contact email in the database and remove it
    knex('ContactEmails')
      .where('contactID', req.body.contactID) // find correct record based on id
      .del() // delete the record
      .then(() => {
        // Send a success message in response
        res.json({ message: `Contact Status ${req.body.contactID} deleted.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error deleting ${req.body.contactID}: ${err}` })
      })
  }

// Create new Contact Social Media
exports.ContactSocialMediaCreate = async (req, res) => {
    // Add new contact phone to database
    knex('ContactSocialMedia')
      .insert({ // insert new record
        'contactID': req.body.contactID,
        'platform': req.body.platform,
        'platformID': req.body.platformID
      })
      .then(() => {
        // Send a success message in response
        res.json({ message: `Contact Social Media ${req.body.contactID} created.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error creating ${req.body.contactID}: ${err}` })
      })
  }
  
  // Remove specific contact social media
  exports.ContactStatusDelete = async (req, res) => {
    // Find specific contact social media in the database and remove it
    knex('ContactSocialMedia')
      .where('contactID', req.body.contactID) // find correct record based on id
      .del() // delete the record
      .then(() => {
        // Send a success message in response
        res.json({ message: `Contact Social Media ${req.body.contactID} deleted.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error deleting ${req.body.contactID}: ${err}` })
      })
  }

// Create new Contact Media
exports.ContactMediaCreate = async (req, res) => {
    // Add new contact media to database
    knex('ContactMedia')
      .insert({ // insert new record
        'contactID': req.body.contactID,
        'mediaType': req.body.mediaType,
        'format': req.body.format,
        'fullPath': req.body.fullPath,
        'filename': req.body.filename,
        'path': req.body.path,
        'isProfilePic': req.body.isProfilePic,
        'altText': req.body.altText
      })
      .then(() => {
        // Send a success message in response
        res.json({ message: `Contact Media ${req.body.contactID} created.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error creating ${req.body.contactID}: ${err}` })
      })
  }
  
  // Remove specific contact media
  exports.ContactMediaDelete = async (req, res) => {
    // Find specific contact media in the database and remove it
    knex('ContactMedia')
      .where('contactID', req.body.contactID) // find correct record based on id
      .del() // delete the record
      .then(() => {
        // Send a success message in response
        res.json({ message: `Contact Media ${req.body.contactID} deleted.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error deleting ${req.body.contactID}: ${err}` })
      })
  }

// Create new Contact Connection
exports.ContactConnectionsCreate = async (req, res) => {
    // Add new contact connection to database
    knex('ContactConnections')
      .insert({ // insert new record
        'contactID': req.body.contactID,
        'connectedTO': req.body.connectedTO,
        'natureOfConnection': req.body.natureOfConnection,
        'notes': req.body.notes,
        'isEmergencyContact': req.body.isEmergencyContact,
        'isPrimaryEmergencyContact': req.body.isPrimaryEmergencyContact,
        'timeStamp': req.body.timeStamp
      })
      .then(() => {
        // Send a success message in response
        res.json({ message: `Contact Connection ${req.body.contactID} created.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error creating ${req.body.contactID}: ${err}` })
      })
  }
  
  // Remove specific contact connection
  exports.ContactConnectionsDelete = async (req, res) => {
    // Find specific contact connection in the database and remove it
    knex('ContactConnections')
      .where('contactID', req.body.contactID) // find correct record based on id
      .del() // delete the record
      .then(() => {
        // Send a success message in response
        res.json({ message: `Contact Connection ${req.body.contactID} deleted.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error deleting ${req.body.contactID}: ${err}` })
      })
  }

// Create new Worker Contact
exports.ContactWorkersCreate = async (req, res) => {
    // Add new worker contact to database
    knex('ContactWorkers')
      .insert({ // insert new record
        'contactID': req.body.contactID,
        'workerID': req.body.workerID,
        'dateAssigned': req.body.dateAssigned,
        'stopDates': req.body.stopDates
      })
      .then(() => {
        // Send a success message in response
        res.json({ message: `Worker Contact ${req.body.contactID} created.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error creating ${req.body.contactID}: ${err}` })
      })
  }
  
  // Remove specific worker contact
  exports.ContactWorkersDelete = async (req, res) => {
    // Find specific worker contact in the database and remove it
    knex('ContactWorkers')
      .where('contactID', req.body.contactID) // find correct record based on id
      .del() // delete the record
      .then(() => {
        // Send a success message in response
        res.json({ message: `Worker Contact ${req.body.contactID} deleted.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error deleting ${req.body.contactID}: ${err}` })
      })
  }

// Create new Probation Officer Contact
exports.ContactPhonesCreate = async (req, res) => {
    // Add new probation officer contact to database
    knex('ContactProbationOfficer')
      .insert({ // insert new record
        'contactID': req.body.contactID,
        'from': req.body.from,
        'to': req.body.to,
        'isCurrent': req.body.isCurrent,
        'officerFirstName': req.body.officerFirstName,
        'officerLastName': req.body.officerLastName,
        'officerPhone': req.body.officerPhone,
        'officerEmail': req.body.officerEmail,
        'officerOffice': req.body.officerOffice
      })
      .then(() => {
        // Send a success message in response
        res.json({ message: `Probation Officer Contact ${req.body.contactID} created.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error creating ${req.body.contactID}: ${err}` })
      })
  }
  
  // Remove specific probation officer contact
  exports.ContactProbationOfficerDelete = async (req, res) => {
    // Find specific probation officer contact in the database and remove it
    knex('ContactProbationOfficer')
      .where('contactID', req.body.contactID) // find correct record based on id
      .del() // delete the record
      .then(() => {
        // Send a success message in response
        res.json({ message: `Probation Officer Contact ${req.body.contactID} deleted.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error deleting ${req.body.contactID}: ${err}` })
      })
  }

// Create new Group
exports.GroupsCreate = async (req, res) => {
    // Add new group to database
    knex('Groups')
      .insert({ // insert new record
        'groupID': req.body.groupID,
        'name': req.body.name,
        'shortName': req.body.shortName,
        'mediaName': req.body.mediaName,
        'dateEstablished': req.body.dateEstablished
      })
      .then(() => {
        // Send a success message in response
        res.json({ message: `Group ${req.body.groupID} created.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error creating ${req.body.groupID}: ${err}` })
      })
  }
  
  // Remove specific group
  exports.GroupsDelete = async (req, res) => {
    // Find specific group in the database and remove it
    knex('Groups')
      .where('groupID', req.body.groupID) // find correct record based on id
      .del() // delete the record
      .then(() => {
        // Send a success message in response
        res.json({ message: `Group ${req.body.groupID} deleted.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error deleting ${req.body.groupID}: ${err}` })
      })
  }

// Create new Prior Group Name
exports.GroupPriorNamesCreate = async (req, res) => {
    // Add new prior group name to database
    knex('GroupPriorNames')
      .insert({ // insert new record
        'groupID': req.body.groupID,
        'name': req.body.name,
        'shortName': req.body.shortName,
        'mediaName': req.body.mediaName,
        'from': req.body.from,
        'to': req.body.to
      })
      .then(() => {
        // Send a success message in response
        res.json({ message: `Prior Group Name ${req.body.groupID} created.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error creating ${req.body.groupID}: ${err}` })
      })
  }
  
  // Remove specific prior group name
  exports.GroupPriorNamesDelete = async (req, res) => {
    // Find specific prior group name in the database and remove it
    knex('GroupPriorNames')
      .where('groupID', req.body.groupID) // find correct record based on id
      .del() // delete the record
      .then(() => {
        // Send a success message in response
        res.json({ message: `Prior Group Name ${req.body.groupID} deleted.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error deleting ${req.body.groupID}: ${err}` })
      })
  }

// Create new Group Connection
exports.GroupConnectionsCreate = async (req, res) => {
    // Add new group connection to database
    knex('GroupConnections')
      .insert({ // insert new record
        'group1': req.body.group1,
        'group2': req.body.group2,
        'natureOfConnection': req.body.natureOfConnection,
        'from': req.body.from,
        'to': req.body.to,
        'notes': req.body.notes
      })
      .then(() => {
        // Send a success message in response
        res.json({ message: `Group Connection ${req.body.group1} created.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error creating ${req.body.group1}: ${err}` })
      })
  }
  
  // Remove specific group connection
  exports.GroupConnectionsDelete = async (req, res) => {
    // Find specific group connection in the database and remove it
    knex('GroupConnections')
      .where('group1', req.body.group1) // find correct record based on id
      .del() // delete the record
      .then(() => {
        // Send a success message in response
        res.json({ message: `Group connection ${req.body.group1} deleted.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error deleting ${req.body.group1}: ${err}` })
      })
  }

// Create new Group Media
exports.GroupMediaCreate = async (req, res) => {
    // Add new group media to database
    knex('GroupMedia')
      .insert({ // insert new record
        'groupID': req.body.groupID,
        'mediaType': req.body.mediaType,
        'format': req.body.format,
        'fullPath': req.body.fullPath,
        'filename': req.body.filename,
        'path': req.body.path,
        'isProfilePic': req.body.isProfilePic
      })
      .then(() => {
        // Send a success message in response
        res.json({ message: `Group Media ${req.body.groupID} created.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error creating ${req.body.groupID}: ${err}` })
      })
  }
  
  // Remove specific group media
  exports.GroupMediaDelete = async (req, res) => {
    // Find specific group media in the database and remove it
    knex('GroupMedia')
      .where('groupID', req.body.groupID) // find correct record based on id
      .del() // delete the record
      .then(() => {
        // Send a success message in response
        res.json({ message: `Group Media ${req.body.groupID} deleted.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error deleting ${req.body.groupID}: ${err}` })
      })
  }

  // Create new Case
exports.CasesCreate = async (req, res) => {
    // Add new case to database
    knex('Cases')
      .insert({ // insert new record
        'caseID': req.body.caseID,
        'caseDate': req.body.caseDate,
        'caseTime': req.body.caseTime,
        'caseZip': req.body.caseZip,
        'description': req.body.description,
        'numberOfVictims': req.bpdy.numberofVictims,
        'isGangRelated': req.body.isGangRelated,
        'numberOfDeaths': req.body.numberOfDeaths,
        'note': req.body.note,
        'enteredBy': req.body.enteredBy,
        'caseTimestamp': req.body.caseTimestamp
      })
      .then(() => {
        // Send a success message in response
        res.json({ message: `Case ${req.body.caseID} created.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error creating ${req.body.caseID}: ${err}` })
      })
  }
  
  // Remove specific case
  exports.CasesDelete = async (req, res) => {
    // Find specific case in the database and remove it
    knex('Cases')
      .where('caseID', req.body.caseID) // find correct record based on id
      .del() // delete the record
      .then(() => {
        // Send a success message in response
        res.json({ message: `Case ${req.body.caseID} deleted.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error deleting ${req.body.caseID}: ${err}` })
      })
  }

// Create new case press coverage
exports.CasePressCoverageCreate = async (req, res) => {
    // Add new case press coverage to database
    knex('CasePressCoverage')
      .insert({ // insert new record
        'articleID': req.body.articleID,
        'articleURL': req.body.articleURL,
        'source': req.body.source,
        'sourceType': req.body.sourceType,
        'sourceCoverage': req.body.sourceCoverage,
        'caseID': req.body.caseID
      })
      .then(() => {
        // Send a success message in response
        res.json({ message: `Case press coverage ${req.body.articleID} created.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error creating ${req.body.articleID}: ${err}` })
      })
  }
  
  // Remove specific case press coverage
  exports.CasePressCoverageDelete = async (req, res) => {
    // Find specific case press coverage in the database and remove it
    knex('CasePressCoverage')
      .where('articleID', req.body.articleID) // find correct record based on id
      .del() // delete the record
      .then(() => {
        // Send a success message in response
        res.json({ message: `Case press coverage ${req.body.articleID} deleted.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error deleting ${req.body.articleID}: ${err}` })
      })
  }

// Create new incident type
exports.IncidentTypeCreate = async (req, res) => {
    // Add new incident type to database
    knex('IncidentType')
      .insert({ // insert new record
        'caseID': req.body.caseID,
        'incidentType': req.body.incidentType
      })
      .then(() => {
        // Send a success message in response
        res.json({ message: `Incident Type ${req.body.caseID} created.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error creating ${req.body.caseID}: ${err}` })
      })
  }
  
  // Remove specific incident type
  exports.IncidentTypeDelete = async (req, res) => {
    // Find specific incident type in the database and remove it
    knex('IncidentType')
      .where('caseID', req.body.caseID) // find correct record based on id
      .del() // delete the record
      .then(() => {
        // Send a success message in response
        res.json({ message: `Incident type ${req.body.caseID} deleted.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error deleting ${req.body.caseID}: ${err}` })
      })
  }

// Create new incident victims
exports.IncidentVictimsCreate = async (req, res) => {
    // Add new incident victims to database
    knex('IncidentVictims')
      .insert({ // insert new record
        'caseID': req.body.caseID,
        'victimID': req.body.victimID,
        'victimIsDeceased': req.body.victimIsDeceased,
        'victimIsHospitalized': req.body.victimIsHospitalized,
        'hospital': req.body.hospital,
        'injuryDescription': req.body.injuryDescription,
        'notes': req.body.notes
      })
      .then(() => {
        // Send a success message in response
        res.json({ message: `Incident Victim ${req.body.victimID} created.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error creating ${req.body.victimID}: ${err}` })
      })
  }
  
  // Remove specific incident victim
  exports.IncidentVictimsDelete = async (req, res) => {
    // Find specific incident victim in the database and remove it
    knex('IncidentVictims')
      .where('victimsID', req.body.victimID) // find correct record based on id
      .del() // delete the record
      .then(() => {
        // Send a success message in response
        res.json({ message: `Incident victim ${req.body.victimID} deleted.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error deleting ${req.body.victimID}: ${err}` })
      })
  }

// Create new Case Media
exports.CaseMediaCreate = async (req, res) => {
    // Add new case media to database
    knex('CaseMedia')
      .insert({ // insert new record
        'caseID': req.body.caseID,
        'format': req.body.format,
        'fullPath': req.body.fullPath,
        'filename': req.body.filename,
        'path': req.body.path,
        'caption': req.body.caption
      })
      .then(() => {
        // Send a success message in response
        res.json({ message: `Case Media ${req.body.caseID} created.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error creating ${req.body.caseID}: ${err}` })
      })
  }
  
  // Remove specific case media
  exports.CaseMediaDelete = async (req, res) => {
    // Find specific case media in the database and remove it
    knex('CaseMedia')
      .where('caseID', req.body.groupID) // find correct record based on id
      .del() // delete the record
      .then(() => {
        // Send a success message in response
        res.json({ message: `Case Media ${req.body.caseID} deleted.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error deleting ${req.body.caseID}: ${err}` })
      })
  }

// Create new contact association
exports.contactAssociationsCreate = async (req, res) => {
    // Add new contact association to database
    knex('contactAssociations')
      .insert({ // insert new record
        'contactID': req.body.contactID,
        'groupID': req.body.groupID,
        'associationDate': req.body.associationDate,
        'disassocationDate': req.body.disassocationDate,
        'natureOfAssociation': req.body.natureOfAssociation,
        'timeStamp': req.body.timeStamp,
        'notes': req.body.notes,
        'isActive': req.body.isActive
      })
      .then(() => {
        // Send a success message in response
        res.json({ message: `Contact Association ${req.body.contactID} created.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error creating ${req.body.contactID}: ${err}` })
      })
  }
  
  // Remove specific contact association
  exports.contactAssociationsDelete = async (req, res) => {
    // Find specific contact association in the database and remove it
    knex('contactAssociations')
      .where('contactID', req.body.contactID) // find correct record based on id
      .del() // delete the record
      .then(() => {
        // Send a success message in response
        res.json({ message: `Contact Association ${req.body.contactID} deleted.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error deleting ${req.body.contactID}: ${err}` })
      })
  }

// Create new Contact 2 Case
exports.Contact2CaseCreate = async (req, res) => {
    // Add new contact 2 case to database
    knex('Contact2Case')
      .insert({ // insert new record
        'contactID': req.body.groupID,
        'caseID': req.body.caseID,
        'role': req.body.role,
        'notes': req.body.notes
      })
      .then(() => {
        // Send a success message in response
        res.json({ message: `Contact2Case ${req.body.contactID} created.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error creating ${req.body.contactID}: ${err}` })
      })
  }
  
  // Remove specific Contact2Case
  exports.Contact2CaseDelete = async (req, res) => {
    // Find specific Contact2Case in the database and remove it
    knex('Contact2Case')
      .where('contactID', req.body.contactID) // find correct record based on id
      .del() // delete the record
      .then(() => {
        // Send a success message in response
        res.json({ message: `Contact2Case ${req.body.contactID} deleted.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error deleting ${req.body.contactID}: ${err}` })
      })
  }

/// Create a new group association with a case (Group2Case)
exports.Group2CaseCreate = async (req, res) => {
    // Add new Group2Case to database
    knex('Group2Case')
      .insert({ // insert new record, a Group2Case
        'groupID': req.body.groupID,
        'caseID': req.body.caseID,
        'role': req.body.role,
        'notes': req.body.notes
      })
      .then(() => {
        // Send a success message in response
        res.json({ message: `Group ${req.body.groupID} associated with case ${req.body.caseID} created.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error creating group ${req.body.groupID}  associated with case ${req.body.caseID}: ${err}` })
      })
  }
   
  // Remove specific Group2Case
  exports.Group2CaseDelete = async (req, res) => {
    // Find specific Group2Case in the database and remove it
    knex('Group2Case')
      .where('groupID', req.body.groupID) // find correct record based on id
      .del() // delete the record
      .then(() => {
        // Send a success message in response
        res.json({ message: `Group2Case ${req.body.groupID} deleted.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error deleting ${req.body.groupID} Group2Case: ${err}` })
      })
  }
  
  
  
  /// Create new referral
  exports.ReferralCreate = async (req, res) => {
    // Add new referral to database
    knex('Referrals')
      .insert({ // insert new record, a referral
        'referralID': req.body.referralID,
        'source': req.body.source,
        'referralDate': req.body.referralDate,
        'notes': req.body.notes,
        'contactID': req.body.contactID,
        'enteredBy': req.body.enteredBy,
  'referralTimestamp': req.body.referralTimestamp
      })
      .then(() => {
        // Send a success message in response
        res.json({ message: `Referral \'${req.body.referralID}\' created.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error creating ${req.body.referralID}: ${err}` })
      })
  }
   
  // Remove specific referral
  exports.ReferralDelete = async (req, res) => {
    // Find specific referral in the database and remove it
    knex('Referrals')
      .where('referralID', req.body.referralID) // find correct record based on id
      .del() // delete the record
      .then(() => {
        // Send a success message in response
        res.json({ message: `Referral ${req.body.referralID} deleted.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error deleting ${req.body.referralID} referral: ${err}` })
      })
  }
  
  
  
  /// Create a new case to referral connection
  exports.Referral2CaseCreate = async (req, res) => {
    // Add new Referral2Case to database
    knex('Referrals2Case')
      .insert({ // insert new record, a Referral2Case
        'caseID': req.body.caseID,
        'referralID': req.body.referralID
      })
      .then(() => {
        // Send a success message in response
        res.json({ message: `Case ${req.body.caseID} connected to referral ${req.body.referralID} created.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error connecting case ${req.body.caseID} connected to referral ${req.body.referralID}: ${err}` })
      })
  }
   
  // Remove specific Referrals2Case
  exports.Referrals2CaseDelete = async (req, res) => {
    // Find specific Referrals2Case in the database and remove it
    knex('Referrals2Case')
      .where('caseID', req.body.caseID) // find correct record based on id
      .del() // delete the record
      .then(() => {
        // Send a success message in response
        res.json({ message: `Case ${req.body.caseID} connected to referral deleted.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error deleting case ${req.body.caseID} connected to referral: ${err}` })
      })
  }
  
  
  
  /// Create new social service
  exports.SocialServicesCreate = async (req, res) => {
    // Add new social service to database
    knex('SocialServices')
      .insert({ // insert new record, social service
        'socialServiceID': req.body.socialServiceID,
        'serviceName': req.body.serviceName,
        'phone': req.body.phone,
        'liasonFirstName': req.body.liasonFirstName,
        'liasonLastName': req.body.liasonLastName,
        'email': req.body.email,
       'category': req.body.category,
        'description': req.body.description,
        'streetAddress': req.body.streetAddress,
        'city': req.body.city,
        'state': req.body.state,
        'zip': req.body.zip,
  'note': req.body.note
      })
      .then(() => {
        // Send a success message in response
        res.json({ message: `Social service ${req.body.socialServiceID} created.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error creating social service ${req.body.socialServiceID}: ${err}` })
      })
  }
   
  // Remove specific social service
  exports.SocialServiceDelete = async (req, res) => {
    // Find specific social service in the database and remove it
    knex('SocialServices')
      .where('socialServiceID', req.body.socialServiceID) // find correct record based on id
      .del() // delete the record
      .then(() => {
        // Send a success message in response
        res.json({ message: `Social service ${req.body.socialServiceID} deleted.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error deleting social service ${req.body.socialServiceID}: ${err}` })
      })
  }
   
  
  
  /// Create new activity
  exports.ActivitiesCreate = async (req, res) => {
    // Add new activity to database
    knex('Activities')
      .insert({ // insert new record, an activity
        'activityID': req.body.activityID,
        'activityDate': req.body.activityDate,
        'activityCategory': req.body.activityCategory,
        'from': req.body.from,
        'to': req.body.to,
        'duration': req.body.duration,
       'setting': req.body.setting,
        'shortDescription': req.body.shortDescription,
        'notes': req.body.notes,
        'outcome': req.body.outcome,
        'actionItems': req.body.actionItems,
        'activityMode': req.body.activityMode,
  'activityType': req.body.activityType,
  'reason': req.body.reason,
        'initiator': req.body.initiator,
        'attendance': req.body.attendance,
        'activityTimestamp': req.body.activityTimestamp,
        'isScheduled': req.body.isScheduled
      })
      .then(() => {
        // Send a success message in response
        res.json({ message: `Activity ${req.body.activityID} created.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error creating activity ${req.body.activityID}: ${err}` })
      })
  }
   
  // Remove specific activity
  exports.ActivitiesDelete = async (req, res) => {
    // Find specific activity in the database and remove it
    knex('Activities')
      .where('activityID', req.body.activity) // find correct record based on id
      .del() // delete the record
      .then(() => {
        // Send a success message in response
        res.json({ message: `Activity ${req.body.activityID} deleted.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error deleting ${req.body.activityID} activity: ${err}` })
      })
  }
  
  
  /// Create new worker participation
  exports.workerParticipationCreate = async (req, res) => {
    // Add new worker participation to database
    knex('WorkerParticipation')
      .insert({ // insert new record, worker participation
        'activityID': req.body.activityID,
        'workerID': req.body.workerID,
        'role': req.body.role
      })
      .then(() => {
        // Send a success message in response
        res.json({ message: `Worker participation for ${req.body.workerID} created.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error creating worker participation for ${req.body.workerID}: ${err}` })
      })
  }
   
  // Remove specific worker participation
  exports.workerParitipcationDelete = async (req, res) => {
    // Find specific worker participation in the database and remove it
    knex('WorkerParticipation')
      .where('workerID', req.body.workerID) // find correct record based on id
      .del() // delete the record
      .then(() => {
        // Send a success message in response
        res.json({ message: `Worker ${req.body.workerID} removed from activity.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error deleting worker ${req.body.workerID} from activity: ${err}` })
      })
  }
  
  
  
  /// Create new contact participation
  exports.ContactParticipationCreate = async (req, res) => {
    // Add new contact participation to database
    knex('ContactParticipation')
      .insert({ // insert new record, contact participation
        'activityID': req.body.activityID,
        'contactID': req.body.contactID,
        'contactType': req.body.contactType,
        'role': req.body.role,
        'helpedOrganize': req.body.helpedOrganize,
        'note': req.body.note
      })
      .then(() => {
        // Send a success message in response
        res.json({ message: `Contact participation for ${req.body.contactID} created.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error creating contact participation for ${req.body.contactID}: ${err}` })
      })
  }
   
  // Remove specific contact participation
  exports.ContactParticipationDelete = async (req, res) => {
    // Find specific contact participation in the database and remove it
    knex('ContactParticipation')
      .where('contactID', req.body.contactID) // find correct record based on id
      .del() // delete the record
      .then(() => {
        // Send a success message in response
        res.json({ message: `Participation for ${req.body.contactID} deleted.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error deleting participation for ${req.body.contactID}: ${err}` })
      })
  }
  
  /// Create new case activity
  exports.CaseActivitiesCrease = async (req, res) => {
    // Add new case activity to database
    knex('CaseActivities')
      .insert({ // insert new record, case activity
        'activityID': req.body.activityID,
        'caseID': req.body.caseID,
        'associationType': req.body.associationType
  })
      .then(() => {
        // Send a success message in response
        res.json({ message: `Case activity for ${req.body.caseID} created.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error creating case activity for ${req.body.caseID}: ${err}` })
      })
  }
   
  // Remove specific case activity
  exports.CaseActivities = async (req, res) => {
    // Find specific case activity in the database and remove it
    knex('CaseActivities')
      .where('caseID', req.body.caseID) // find correct record based on id
      .del() // delete the record
      .then(() => {
        // Send a success message in response
        res.json({ message: `Case activity for ${req.body.caseID} deleted.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error deleting case activity for ${req.body.caseID}: ${err}` })
      })
  }
  
  
  /// Create new relationship between activity and referral
  exports.Activity2ReferralCreate = async (req, res) => {
    // Add new Activity2Referral to database
    knex('Activity2Referral')
      .insert({ // insert new record, a Activity2Referral
        'activityID': req.body.activityID,
        'referralID': req.body.referralID
      })
      .then(() => {
        // Send a success message in response
        res.json({ message: `Activity to referral ${req.body.referralID} created.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error creating activity to referral ${req.body.referralID}: ${err}` })
      })
  }
   
  // Remove specific activity to referral connection
  exports.Activity2ReferralDelete = async (req, res) => {
    // Find specific Activity2Referral in the database and remove it
    knex('Activity2Referral')
      .where('referralID', req.body.referralID) // find correct record based on id
      .del() // delete the record
      .then(() => {
        // Send a success message in response
        res.json({ message: `Activity to referral ${req.body.referralID} deleted.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error deleting activity to referral ${req.body.referralID}: ${err}` })
      })
  }
  
  
  /// Create new outside referral
  exports.OutsideReferralsCreate = async (req, res) => {
    // Add new outside referral to database
    knex('OutsideReferrals')
      .insert({ // insert new record, an outside referral
        'referralID': req.body.referralID,
        'workerID': req.body.workerID,
        'contactID': req.body.contactID,
        'activityID': req.body.activityID,
        'socialServiceID': req.body.socialServiceID,
        'referralDate': req.body.referralDate,
        'notes': req.body.notes
      })
      .then(() => {
        // Send a success message in response
        res.json({ message: `Referral ${req.body.referralID} created.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error creating referral ${req.body.referralID}: ${err}` })
      })
  }
   
  // Remove specific referral
  exports.OutsideReferralsDelete = async (req, res) => {
    // Find specific outside referral in the database and remove it
    knex('OutsideReferrals')
      .where('referralID', req.body.referralID) // find correct record based on id
      .del() // delete the record
      .then(() => {
        // Send a success message in response
        res.json({ message: `Referral ${req.body.referralID} deleted.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error deleting ${req.body.referralID} referral: ${err}` })
      })
  }
  
  
  /// Create new community service
  exports.CommunityServiceCreate = async (req, res) => {
    // Add new community service to database
    knex('CommunityService')
      .insert({ // insert new record, community service
        'logID': req.body.logID,
        'activityID': req.body.activityID,
        'description': req.body.description,
        'quality': req.body.quality,
        'valueOfUnit': req.body.valueOfUnit,
        'totalValue': req.body.totalValue,
        'valueOverride': req.body.valueOverride,
        'notes': req.body.notes
      })
      .then(() => {
        // Send a success message in response
        res.json({ message: `Community service ${req.body.logID} created.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error creating community service ${req.body.logID}: ${err}` })
      })
  }
   
  // Remove specific community service
  exports.CommunityServiceDelete = async (req, res) => {
    // Find specific community service in the database and remove it
    knex('CommunityService')
      .where('logID', req.body.logID) // find correct record based on id
      .del() // delete the record
      .then(() => {
        // Send a success message in response
        res.json({ message: `Community service ${req.body.logID} deleted.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error deleting ${req.body.logID} community service: ${err}` })
      })
  }
  
  
  /// Create new miles traveled
  exports.MilesTravelledCreate = async (req, res) => {
    // Add new miles traveled to database
    knex('MilesTravelled')
      .insert({ // insert new record, a worker
        'mtID': req.body.mtID,
        'travelDate': req.body.travelID,
        'to': req.body.to,
        'miles': req.body.miles,
        'purpose': req.body.purpose,
        'notes': req.body.notes
      })
      .then(() => {
        // Send a success message in response
        res.json({ message: `Miles traveled ${req.body.mtID} created.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error creating miles traveled ${req.body.mdID}: ${err}` })
      })
  }
   
  // Remove specific miles traveled
  exports.workersDelete = async (req, res) => {
    // Find specific miles traveled in the database and remove it
    knex('MilesTravelled')
      .where('mtID', req.body.mtID) // find correct record based on id
      .del() // delete the record
      .then(() => {
        // Send a success message in response
        res.json({ message: `Miles traveled ${req.body.mtID} deleted.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error deleting ${req.body.mtID} miles traveled: ${err}` })
      })
  }
  
  
  /// Create new worker miles
  exports.WorkerMilesCreate = async (req, res) => {
    // Add new worker miles to database
    knex('WorkerMiles')
      .insert({ // insert new record, worker miles
        'mtID': req.body.mtID,
        'workerID': req.body.workerID,
        'isDriver': req.body.isDriver,
        'isVehicleOwner': req.body.isVehicleOwner
      })
      .then(() => {
        // Send a success message in response
        res.json({ message: `Worker miles ${req.body.mtID} created.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error creating worker miles ${req.body.mtID}: ${err}` })
      })
  }
   
  // Remove specific worker miles
  exports.WorkerMilesDelete = async (req, res) => {
    // Find specific worker miles in the database and remove it
    knex('WorkerMiles')
      .where('mtID', req.body.mtID) // find correct record based on id
      .del() // delete the record
      .then(() => {
        // Send a success message in response
        res.json({ message: `Worker miles ${req.body.mtID} deleted.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error deleting ${req.body.mtID} worker miles: ${err}` })
      })
  }
  
  
  /// Create new activity miles
  exports.ActivityMiles = async (req, res) => {
    // Add new activity miles to database
    knex('ActivityMiles')
      .insert({ // insert new record, activity miles
        'mtID': req.body.mtID,
        'activityID': req.body.activityID
      })
      .then(() => {
        // Send a success message in response
        res.json({ message: `Activity miles ${req.body.mtID} created.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error creating ${req.body.mtID} activity miles: ${err}` })
      })
  }
   
  // Remove specific activity miles
  exports.ActivityMilesDelete = async (req, res) => {
    // Find specific activity miles in the database and remove it
    knex('ActivityMiles')
      .where('mtID', req.body.mtID) // find correct record based on id
      .del() // delete the record
      .then(() => {
        // Send a success message in response
        res.json({ message: `Activity miles ${req.body.mtID} deleted.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error deleting activity miles ${req.body.mtID}: ${err}` })
      })
  }
  
  
  /// Create new case miles
  exports.CaseMiles = async (req, res) => {
    // Add new case miles to database
    knex('CaseMiles')
      .insert({ // insert new record, case miles
        'mtID': req.body.mtID,
        'caseID': req.body.caseID
      })
      .then(() => {
        // Send a success message in response
        res.json({ message: `Case miles ${req.body.mtID} created.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error creating ${req.body.mtID} case miles: ${err}` })
      })
  }
   
  // Remove specific case miles
  exports.CaseyMilesDelete = async (req, res) => {
    // Find specific case miles in the database and remove it
    knex('CaseMiles')
      .where('mtID', req.body.mtID) // find correct record based on id
      .del() // delete the record
      .then(() => {
        // Send a success message in response
        res.json({ message: `Case miles ${req.body.mtID} deleted.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error deleting case miles ${req.body.mtID}: ${err}` })
      })
  }
   
  
  
  /// Create new worker tracking
  exports.WorkerTrackingCreate = async (req, res) => {
    // Add new worker to database
    knex('WorkerTracking')
      .insert({ // insert new record, a worker
        'trackID': req.body.workerID,
        'workerID': req.body.workerID,
        'trackDate': req.body.trackDate,
        'trackStartTime': req.body.trackStartTime,
        'isCurrent': req.body.isCurrent,
        'purpose': req.body.purpose,
        'notes': req.body.notes,
  'trackEndTime': req.body.trackEndTime,
        'trackEndDate': req.body.trackEndDate
   
      })
      .then(() => {
        // Send a success message in response
        res.json({ message: `Worker tracking ${req.body.trackID} created.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error creating ${req.body.trackID}: ${err}` })
      })
  }
   
  // Remove specific worker tracking
  exports.WorkerTrackingDelete = async (req, res) => {
    // Find specific worker tracking in the database and remove it
    knex('WorkerTracking')
      .where('trackID', req.body.trackID) // find correct record based on id
      .del() // delete the record
      .then(() => {
        // Send a success message in response
        res.json({ message: `Worker tracking ${req.body.trackID} deleted.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error deleting ${req.body.trackID} worker tracking: ${err}` })
      })
  }
  
  
  /// Create new worker location
  exports.WorkerLocationsCreate = async (req, res) => {
    // Add new worker location to database
    knex('WorkerLocations')
      .insert({ // insert new record, worker location
        'workerID': req.body.workerID,
        'trackID': req.body.trackID,
        'snapshotTime': req.body.snapshotTime,
        'workerLocation': req.body.workerLocation
      })
      .then(() => {
        // Send a success message in response
        res.json({ message: `Worker location ${req.body.trackID} created.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error creating ${req.body.trackID}: ${err}` })
      })
  }
   
  // Remove specific worker location
  exports.WorkerLocationDelete = async (req, res) => {
    // Find specific worker location in the database and remove it
    knex('WorkerLocation')
      .where('trackID', req.body.trackID) // find correct record based on id
      .del() // delete the record
      .then(() => {
        // Send a success message in response
        res.json({ message: `Worker location ${req.body.trackID} deleted.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error deleting ${req.body.trackID} worker location: ${err}` })
      })
  }
  
  
  /// Create new distress signal
  exports.DistressSignalsCreate = async (req, res) => {
    // Add new distress signal to database
    knex('DistressSignals')
      .insert({ // insert new record, a distress signal
        'signalID': req.body.signalID,
        'trackID': req.body.trackID,
        'workerID': req.body.workerID,
        'activationTime': req.body.activationTime,
        'signalLocation': req.body.signalLocation,
        'isActive': req.body.isActive,
  'description': req.body.description,
        'notes': req.body.notes,
        'deactivationTime': req.body.deactivationTime
      })
      .then(() => {
        // Send a success message in response
        res.json({ message: `Distress signal ${req.body.signalID} created.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error creating ${req.body.signalID}: ${err}` })
      })
  }
   
  // Remove specific distress signal
  exports.DistressSignalDelete = async (req, res) => {
    // Find specific distress signal in the database and remove it
    knex('DistressSignal')
      .where('signalID', req.body.signalID) // find correct record based on id
      .del() // delete the record
      .then(() => {
        // Send a success message in response
        res.json({ message: `Distress signal ${req.body.signalID} deleted.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error deleting ${req.body.signalID} distress signal: ${err}` })
      })
  }
  
  
  /// Create new area of activity
  exports.GroupActiveAreaCreate = async (req, res) => {
    // Add new area of activity to database
    knex('GroupActiveArea')
      .insert({ // insert new record, area of activity
        'groupID': req.body.groupID,
        'areaDate': req.body.areaDate,
        'itCurrent': req.body.itCurrent,
        'location': req.body.location,
        'locationType': req.body.locationType,
        'notes': req.body.note
      })
      .then(() => {
        // Send a success message in response
        res.json({ message: `Area of activity for ${req.body.groupID} created.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error creating area of activity for ${req.body.groupID}: ${err}` })
      })
  }
   
  // Remove specific area of activity
  exports.GroupActiveAreaDelete = async (req, res) => {
    // Find specific area of activity in the database and remove it
    knex('GroupActiveArea')
      .where('groupID', req.body.groupID) // find correct record based on id
      .del() // delete the record
      .then(() => {
        // Send a success message in response
        res.json({ message: `Area of activity ${req.body.groupID} deleted.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error deleting ${req.body.groupID} area of activity: ${err}` })
      })
  }
  
  
  /// Create new case location
  exports.CaseLocationsCreate = async (req, res) => {
    // Add new case location to database
    knex('CaseLocations')
      .insert({ // insert new record, case location
        'caseID': req.body.caseID,
        'caseLocationOrdinal': req.body.caseLocationOrdinal,
        'location': req.body.location,
        'locationType': req.body.locationType,
        'addedOn': req.body.addedOn,
       'occurrenceTime': req.body.occurrenceTime,
        'streetAddress': req.body.streetAddress,
        'city': req.body.city,
        'state': req.body.state,
        'zip': req.body.zip,
        'isAddress': req.body.isAddress
      })
      .then(() => {
        // Send a success message in response
        res.json({ message: `Case location ${req.body.caseLocationOrdinal} created.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error creating ${req.body.caseLocationOrdinal}: ${err}` })
      })
  }
   
  // Remove specific case location
  exports.CaseLocationsDelete = async (req, res) => {
    // Find specific case location in the database and remove it
    knex('CaseLocations')
      .where('caseLocationOrdinal', req.body.caseLocationOrdinal) // find correct record based on id
      .del() // delete the record
      .then(() => {
        // Send a success message in response
        res.json({ message: `Case location ${req.body.caseLocationOrdinal} deleted.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error deleting ${req.body.caseLocationOrdinal} case location: ${err}` })
      })
  }
  
  
  /// Create new activity location
  exports.ActivityLocationsCreate = async (req, res) => {
    // Add new activity location to database
    knex('ActivityLocations')
      .insert({ // insert new record, an activity location
        'activityID': req.body.activityID,
        'activityLocationOrdinal': req.body.activityLocationOrdinal,
        'location': req.body.location,
        'locationType': req.body.locationType
      })
      .then(() => {
        // Send a success message in response
        res.json({ message: `Activity location ${req.body.activityLocationOrdinal} created.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error creating ${req.body.activityLocationOrdinal}: ${err}` })
      })
  }
   
  // Remove specific activity location
  exports.ActivityLocationDelete = async (req, res) => {
    // Find specific activity location in the database and remove it
    knex('ActivityLocations')
      .where('activityLocationOrdinal', req.body.activityLocationOrdinal) // find correct record based on id
      .del() // delete the record
      .then(() => {
        // Send a success message in response
        res.json({ message: `Activity location ${req.body.activityLocationOrdinal} deleted.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error deleting ${req.body.activityLocationOrdinal} activity location: ${err}` })
      })
  }
  
  
  /// Create new story event type
  exports.StoryEventTypesCreate = async (req, res) => {
    // Add new story event type to database
    knex('StoryEventTypes')
      .insert({ // insert new record, story event type
        'etID': req.body.etID,
        'eventType': req.body.eventType
      })
      .then(() => {
        // Send a success message in response
        res.json({ message: `Story event type ${req.body.etID} created.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error creating ${req.body.etID}: ${err}` })
      })
  }
   
  // Remove specific story event type
  exports.StoryEventTypeDelete = async (req, res) => {
    // Find specific story event type in the database and remove it
    knex('StoryEventTypes')
      .where('etID', req.body.etID) // find correct record based on id
      .del() // delete the record
      .then(() => {
        // Send a success message in response
        res.json({ message: `Story event type ${req.body.etID} deleted.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error deleting ${req.body.etID} story event type: ${err}` })
      })
  }  

// Create new Story
  exports.StoriesCreate = async (req, res) => {
      // Add new story to database
      knex('Stories')
        .insert({ // insert new record
          'storyId': req.body.storyId,
          'contactID': req.body.contactID,
          'startingPoint': req.body.startingPoint,
          'alias': req.body.alias,
          'description': req.body.description,
          'dateCreated': req.body.dateCreated,
          'createdBy': req.body.createdBy
        })
        .then(() => {
          // Send a success message in response
          res.json({ message: `Story ${req.body.storyId} created.` })
        })
        .catch(err => {
          // Send a error message in response
          res.json({ message: `There was an error creating ${req.body.storyId}: ${err}` })
        })
    }
    
    // Remove specific story
    exports.StoriesDelete = async (req, res) => {
      // Find specific story in the database and remove it
      knex('Stories')
        .where('storyId', req.body.storyId) // find correct record based on id
        .del() // delete the record
        .then(() => {
          // Send a success message in response
          res.json({ message: `Story ${req.body.storyId} deleted.` })
        })
        .catch(err => {
          // Send a error message in response
          res.json({ message: `There was an error deleting ${req.body.storyId}: ${err}` })
        })
    }

// Create new Story Event
exports.StoryEventsCreate = async (req, res) => {
    // Add new story event to database
    knex('StoryEvents')
      .insert({ // insert new record
        'eventID': req.body.eventID,
        'storyID': req.body.storyID,
        'postion': req.body.position,
        'eventType': req.body.eventType,
        'eventDescription': req.body.eventDescription,
        'score': req.body.score,
        'eventDate': req.body.eventDate,
        'howCreated': req.body.howCreated
      })
      .then(() => {
        // Send a success message in response
        res.json({ message: `Story event ${req.body.eventID} created.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error creating ${req.body.eventID}: ${err}` })
      })
  }
  
  // Remove specific story event
  exports.StoryEventsDelete = async (req, res) => {
    // Find specific story event in the database and remove it
    knex('StoryEvents')
      .where('eventID', req.body.eventID) // find correct record based on id
      .del() // delete the record
      .then(() => {
        // Send a success message in response
        res.json({ message: `Story event ${req.body.eventID} deleted.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error deleting ${req.body.eventID}: ${err}` })
      })
  }