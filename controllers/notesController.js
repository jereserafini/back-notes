const fs = require('fs')

//Guardado de notas 
const saveNotes = async ( req, res ) => {
    try {

        const {notes} = req.body
        await fs.promises.writeFile( 'db/notes.json', JSON.stringify(notes))
        
        res.status(200)

    } catch (error) {
        res
        .status(error.statusCode ? error.statusCode : 500)
        .json({ error: error.message });
    }  

}

//Get a notas
const getNotes = async ( req, res ) => {
    try {
        const notes = JSON.parse(await fs.promises.readFile( 'db/notes.json', 'utf-8'))

        res.json(notes)
        
        res.status(200)
    } catch (error) {
        res
        .status(error.statusCode ? error.statusCode : 500)
        .json({ error: error.message });
    }
}

module.exports = {saveNotes, getNotes}