const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database foi conectado com sucesso");
});
const notesRouter = require("./routes/notes");
const divisionsRouter = require("./routes/divisions");
app.use("/notes", notesRouter);
app.use("/divisions", divisionsRouter);
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
