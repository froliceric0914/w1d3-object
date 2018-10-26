var planetMoons = {
  mercury: 0,
  venus: 0,
  earth: 1,
  mars: 2,
  jupiter: 67,
  saturn: 62,
  uranus: 27,
  neptune: 14
};


// function hasOwnProperty(object) {
//   for (key in object )
//   if (object[key] === 0) {
//     delete object[key];
//   }
//   return object;
// }

// planetMoons.hasOwnProperty();

 for (var planet in planetMoons) {
  var numberOfMoons = planetMoons[planet];
  console.log("Planet: " + planet + ", # of Moons: "+ numberOfMoons);
}


