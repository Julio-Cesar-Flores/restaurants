import mongoose from "mongoose";

import { getAllRestaurants } from "./queries.js"; // <ctrl><space> sobre llaves vacias

const db = mongoose.connection;
// connecting, connected, disconnected, error
db.on("connecting", () => {
  console.log("conectando <๐");
});
db.on("connected", () => {
  console.log("ok conectado <๐");
});
db.on("disconnected", () => {
  console.log("ok desconectado <๐จ");
});
db.on("error", () => {
  console.log("Error conexion <๐");
});

//mongoose.connect('mongodb://192.168.0.6:27017/test')
//mongodb+srv://userone:4aYN1PsJZKxu2Otf@cluster0.z7fnicu.mongodb.net/?retryWrites=true&w=majority
//mongodb://localhost:27017/test
mongoose.connect("mongodb://localhost:27017/ejercicios2", async () => {
  try {
    const restaurants = await getAllRestaurants();
    console.log(restaurants);
  } catch (err) {
    console.error("error :(" + err);
  }
  console.log("Despuรฉs de conectado");
});
