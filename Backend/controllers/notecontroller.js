const service = require("../services/noteservice")

// const badRequest = (res) =>{
//     res.status(404).send({
//         status: 404,
//         message: "Bad Request"
//     })
// }

// const processInfo = (response, error, res) =>{
//     if(error){
//         res.status(400).send(error);
//     }
//     else{
//         res.status(200).send(response);
//     }
// }
const getAllNotes = (req, res) =>{
    //var name = "Netizen";
    //....serviceObj = service.sendInfo();
    //res.send("This is where it belongs");
    //....console.log(serviceObj);
    //res.send(serviceObj);


    service.findNotes()
        .then(data => {
            res.status(data.status).send(data.result)
        })
        .catch(err => {
            res.status(500).send(err)
        })
}

const getNoteById = (req, res) =>{
    var id = req.params.id;

    service.findNoteById(id)
            .then(data => {
                console.log(data.result)
                res.status(data.status).send(data.result)
            })
            .catch(err => {
                res.status(500).send(err)
            })

}

const createNote = (req, res) =>{

    const noteData = {
        id : req.body.id,
        title: req.body.title,
        description: req.body.description
    }

    console.log("From controller1.")
   
    service.addNote(noteData)
        .then(data => {
            res.status(data.status).send(data.result)
        })
        .catch(err => {
            res.status(500).send(err)
        })

}

const deleteNote = (req, res) =>{
    const id = req.params.id;

    service.deleteNote(id)
    .then(data => {
        res.status(data.status).send(data.result)
    })
    .catch(err => {
        res.status(500).send(err)
    })
}

module.exports = {
    getAllNotes,
    getNoteById,
    createNote,
    deleteNote
}