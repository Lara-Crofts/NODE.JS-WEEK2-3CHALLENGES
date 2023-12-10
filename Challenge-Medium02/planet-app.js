//initialize 
const fs = require('fs');

// make sure to cd into actual proper file //challenge-medium02 and then run node planet-app.js
// installed `fs` (file system) module, builtin module for Node.js, to read the content of the text file. --> npm install fs /// CHECCK PACKAGE-LOCK FOR MODULE
// `npm init -y` command to initialize the file project and creates a package. json file.


// Reads the content of the planets.txt file
fs.readFile('planets.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  // Split the planets by comma and trim spaces
  const planets = data.split(',').map(planet => planet.trim());
  // looks into txt file and split into words with , in between

  // Print the planets to the console
  console.log('Planets in the Solar System:');
  planets.forEach((planet, index) => {
    console.log(`${index + 1}. ${planet}`);
  });
});

///execute the code by running: node planet-app.js on terminal