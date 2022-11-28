// Import database
const knex = require('C:\\Users\\socce\\')

// Retrieve all workers
exports.workersAll = async (req, res) => {
  // Get all workers from database
  knex
    .select('*') // select all records
    .from('Workers') // from 'Workers' table
    .then(userData => {
      // Send workers extracted from database in response
      res.json(userData)
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error retrieving workers: ${err}` })
    })
}

// Create new worker
exports.workersCreate = async (req, res) => {
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
      res.json({ message: `Worker \'${req.body.firstName}\' created.` })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error creating ${req.body.firstName}: ${err}` })
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
      res.json({ message: `There was an error deleting ${req.body.workerID} book: ${err}` })
    })
}