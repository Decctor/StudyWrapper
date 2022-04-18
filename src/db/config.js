import { Schema, model, connect } from "mongoose";
import "regenerator-runtime";
async function openDb() {
  await connect("mongodb://localhost:27017/test");
}
openDb();
