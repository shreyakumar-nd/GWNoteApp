// Import express
const express = require('express')

// Import workers-controller
const workersRoutes = require('./controller.js')

// Create router
const router = express.Router()

// Add route for GET request to retrieve all workers
// In server.js, workers route is specified as '/workers'
// this means that '/all' translates to '/workers/all'
router.get('/all', workersRoutes.workersAll)

// Add route for POST request to create new worker
// In server.js, worker route is specified as '/workers'
// this means that '/create' translates to '/workers/create'
router.post('/create', workersRoutes.workersCreate)

// Add route for PUT request to delete specific worker
// In server.js, workers route is specified as '/workers'
// this means that '/delete' translates to '/workers/delete'
router.put('/delete', workersRoutes.workersDelete)

// Export router
module.exports = router