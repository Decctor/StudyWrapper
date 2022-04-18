const router = require("express").Router();
let Note = require("../models/note.model");
// Rota para acesso à coleção
router.route("/get").post((req, res) => {
  const identifier = req.body.identifier;
  Note.find({ identifier: identifier })
    .then((notes) => res.json(notes))
    .catch((err) => res.status(400).json("Error" + err));
});
// Rota para criação de novas notas
router.route("/add").post((req, res) => {
  const divisionID = req.body.divisionID;
  const identifier = req.body.identifier;
  const content = req.body.content;
  const newNote = new Note({ divisionID, identifier, content });
  newNote
    .save()
    .then(() => res.json("Note added!"))
    .catch((err) => res.status(400).json("Error" + err));
});
// Rota para remoção de notas
router.route("/delete/:id").delete((req, res) => {
  const noteId = req.params.id;
  Note.findByIdAndDelete(noteId).then(() => res.json("Note deleted!"));
});
module.exports = router;
