

// 1. run npm init --> populates package.json file 
// 3. terminal: npm init -y ...to answer yes to all q's 
// 2. download sudo npm install express 
// 3. create employees-app.js


// ****require is built-in function; JSON file can be synchronously read & parsed
// into JavaScript objects by passing require() with its path 
// set variables 
const express = require('express');
const employeesData = require('./employees.json');

  const app = express();
  const PORT = process.env.port || 3000;

// const PORT = process.env.PORT || 3000; //set to port 3000

// Endpoint to get information for all employees
// req and res are like brothers :`) 
// setting url as to where data will be displayed on browser, always need /
// route to get info on all employees. create page /employees. responds with json file of Employees.
app.get('/employees', (req, res) => {
  // res means RESPOND; sends a JSON response composed of the specified data, the employees.json file
    res.json(employeesData.Employees);
});

// Endpoint to get information for a specific employee by ID
// GET 
app.get('/employees/:employeeID', (req, res) => {

    const employeeID = parseInt(req.params.employeeID); // parseInt method converts its first argument to a string, parses that string to then return as integer
    const employee = employeesData.Employees.find(emp => emp.employeeID === employeeID);

  //conditional 
  if (employee) {
    res.json(employee); //response of json file of employee ID 
  } else {
    res.status(404).json({ error: 'Employee not found' });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});

// test this by running on browser: http://localhost:3000/employees/12

// control + c to get out of server
  // once done... make sure to go on browser and go to: http://localhost:3000 ---> will see JSON data
  // if type : http://localhost:3000/1 ---> will show JSON object of first ID employee, Jay Gatsby! 


// use this format for JSON files 
// {
  // "data" : [
  //   {
  //       "number": "1",
  //       "author": "Von R. Glitschka",
  //       "quote": "The client may be king, but he's not the art director."
  //   },

  // instead of 
  // {
  //   "employees": [
  //     {


  // 

//   HARD - Create a JSON file that will have 10 employees in it, their employeeID, their name, their salary and department name.
// Then, create an express API so that when you hit the endpoint with a GET request we want the api to respond with all data on the employees.
// If you hit the endpoint with their employeeID, we want to hand up only the information on that one employee.
// If you hit the endpoint with an incorrect employeeID, send back the correct HTTP status code and an error message stating that the employee was not found.
// GET::myendpointname.com/employees = Json with information from all 10 employees.
// GET::myendpointname.com/employees/<employeeID> = Json with the information from that specific employee.

