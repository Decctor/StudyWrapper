const router = require("express").Router();
let Division = require("../models/division.model");
let Note = require("../models/note.model");
// Rota para acesso à coleção
router.route("/get/").get((req, res) => {
  Division.find()
    .then((divisions) => res.json(divisions))
    .catch((err) => res.status(400).send("Error" + err));
});
// Rota para criação de novas divisões
router.route("/create").post((req, res) => {
  const name = req.body.divisionName;
  const identity = req.body.divisionName;
  const subdivisions = req.body.subdivisions;
  const category = req.body.category;
  let newDivision = new Division({
    name,
    identity,
    subdivisions,
    category,
  });
  newDivision
    .save()
    .then(() => res.json("Division added!"))
    .catch((err) => res.status(400).send("Error" + err));
});
// Rota para alteração de novas divisões
router.route("/create/:divisionID").put(async (req, res) => {
  const name = req.body.divisionName;
  const identity = req.body.divisionName;
  const subdivisions = req.body.subdivisions;
  const category = req.body.category;
  const divisionID = req.params.divisionID;
  await Division.findByIdAndUpdate(divisionID, {
    name,
    subdivisions,
    category,
  });
  res.json("Division updated");
});
// Rota para remoção de coleções
router.route("/delete/:divisionID").delete(async (req, res) => {
  const divisionID = req.params.divisionID;
  await Division.findByIdAndDelete(divisionID);
  await Note.deleteMany({ divisionID: divisionID });
  res.json("Division deleted");
});
module.exports = router;
