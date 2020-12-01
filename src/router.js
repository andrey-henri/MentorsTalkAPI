const express = require('express');
const AgendaController = require('./controllers/AgendaController');
const FavoritoController = require('./controllers/FavoritoController');
const MentorController = require('./controllers/MentorController');
// const SystemController = require('./controllers/SystemController');

const routers = express.Router()

// // Rotas de cliente
// routers.get('/client', ClientController.getAll)
// routers.get('/client/:id', ClientController.getById)
// routers.post('/client', ClientController.create)
// routers.put('/client/:id', ClientController.update)
// routers.get('/client/LicenseKey/:key', ClientController.getByBirdLicenseKey)
// routers.get('/client/:id/license', ClientController.getAllBirdLicense)
// routers.post('/client/:id/license', ClientController.createBirdLicense)
// routers.put('/client/:id/license/:key', ClientController.updateBirdLicense)

// // Rotas de sistema
// routers.get('/system', SystemController.getAll)
// routers.get('/system/:id', SystemController.getById)
// routers.get('/system/name/:name', SystemController.getByName)
// routers.post('/system', SystemController.create)
// routers.put('/system/:id', SystemController.update)
// routers.post('/system/:id/error', SystemController.createError)

routers.get('/favorito', FavoritoController.getAll)
routers.post('/favorito', FavoritoController.create)
routers.delete('/favorito/:id', FavoritoController.delete)

routers.get('/mentor', MentorController.getAll)
routers.put('/mentor/:id', MentorController.alterMentor)

routers.get('/agenda', AgendaController.getAll)
routers.post('/agenda', AgendaController.create)
routers.delete('/agenda/:id', AgendaController.delete)

module.exports = routers