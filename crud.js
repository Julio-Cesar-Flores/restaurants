import Book from "./models/Book.js"; //Con <ctrl> sobre Book

// Arrow function vs function una hereda el contexto?

// Crear
const createBook = async () =>
  Book.create({
    author: "Julio",
    title: "Programando",
    edition: "2022",
    pages: 200,
    isbn: "123",
    publishDate: new Date(),
  });

// Leer
const readBook = async () =>
  Book.findOne({
    author: "Julio",
  });

// Actualizar
const updateBook = async () =>
  Book.updateOne(
    {
      //filtro AND
      author: "Julio",
      pages: 200,
    },
    { author: "joseph" }
  );

// Borrar
const deleteBook = async () =>
  Book.deleteOne({
    //filtro AND
    author: "joseph",
  });

export { createBook, readBook, updateBook, deleteBook };
