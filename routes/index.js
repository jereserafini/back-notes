const { Router } = require("express");
const {saveNotes, getNotes} = require("../controllers/notesController");

const routes = Router()

//Rutas
routes.post('/notes', saveNotes)

routes.get( '/notes', getNotes )

module.exports = routes