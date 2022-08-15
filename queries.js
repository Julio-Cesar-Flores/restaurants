import Restaurant from "./models/Restaurant.js"; //Con <ctrl> sobre Book

// Todos los restaurantes todos los campos
//const getAllRestaurants = async () => Restaurant.find({});

/* Todos los restaurantes campos
const getAllRestaurants = async () =>
  Restaurant.find().select({
    restaurant_id: 1,
    name: 1,
    borough: 1,
    cuisine: 1,
  });*/

// Todos los restaurantes campos
/*const getAllRestaurants = async () =>
  Restaurant.find(
    {},
    {
      restaurant_id: 1,
      address: { street: 1, coord: 0 },
      name: 1,
      borough: 1,
      cuisine: 1,
      _id: 0, // Para que no me regrese el _id
    }
  );*/

/* Los primeros 5 restaurentes del Bronx
const getAllRestaurants = async () =>
  Restaurant.find({ borough: "Bronx" }).limit(5);*/

/*Nombres de restaurantes que tengan al meno grade>=9
const getAllRestaurants = async () =>
  Restaurant.find(
    {
      grades: { $elemMatch: { score: { $gt: 9 } } },
    },
    { name: 1, grades: 1, _id: 0 }
  );*/

//primeros 10 cocina americana por su nombre alfabético
const getAllRestaurants = async () =>
  Restaurant.find(
    {
      cuisine: "American ",
    },
    { name: 1, cuisine: 1, _id: 0 }
  ).sort('name').limit(10);
export { getAllRestaurants };
