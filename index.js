import mongoose from "mongoose";
import { createBook, readBook, updateBook, deleteBook } from "./crud.js"; // <ctrl><space> sobre llaves vacias
const db = mongoose.connection;
// connecting, connected, disconnected, error
db.on("connecting", () => {
  console.log("ok conectando <🎇");
});
db.on("connected", () => {
  console.log("ok conectado <😊");
});
db.on("disconnected", () => {
  console.log("ok desconectado <🎨");
});
db.on("error", () => {
  console.log("ok conexion <🎃");
});

//mongoose.connect('mongodb://192.168.0.6:27017/test')
//mongodb+srv://userone:4aYN1PsJZKxu2Otf@cluster0.z7fnicu.mongodb.net/?retryWrites=true&w=majority
//mongodb://localhost:27017/test
mongoose.connect(
  "mongodb+srv://userone:4aYN1PsJZKxu2Otf@cluster0.z7fnicu.mongodb.net/?retryWrites=true&w=majority",
  async () => {
    try {
      //await createBook();
      await updateBook();
      //await deleteBook();
      /*const books = await readBook();
    console.log(books);*/
      /** CRUD
       * TODO: 1.- Crear un libro
       */
    } catch (err) {
      console.error("error :(" + err);
    }
    console.log("Después de conectado");
  }
);
