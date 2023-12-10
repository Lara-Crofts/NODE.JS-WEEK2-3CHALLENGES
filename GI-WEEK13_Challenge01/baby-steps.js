// You can access command-line arguments via the global process object. The  
//   process object has an argv property which is an array containing the  
//   complete command-line. i.e. process.argv. 

// console.log(process.argv)  

// You'll need to think about how to loop through the number arguments so  
//   you can output just their sum. The first element of the process.argv array  
//   is always 'node', and the second element is always the path to your  
//   baby-steps.js file, so you need to start at the 3rd element (index 2),  
//   adding each item to the total until you reach the end of the array.  
   
//   Also be aware that all elements of process.argv are strings and you may  
//   need to coerce them into numbers. You can do this by prefixing the  
//   property with + or passing it to Number(). e.g. +process.argv[2] or  
//   Number(process.argv[2]).  
   
//   Check to see if your program is correct by running this command:  
   
//      sudo learnyounode verify baby-steps.js 


    var sum = 0;
// start at index 2 (3rd element).. iterate through length of process.argv.
// start at second argument/element bc first two commandline arguments are: 'node' and 'baby-stewps.js'

// adding each item [i] to total result +=. 
// need Number to convert process.argv string into integers; use Numbers() and pass process.arg[i]. 

for (let i = 2; i < process.argv.length; i++) {
    sum += Number(process.argv[i]);
  }
console.log(sum);

// challenge 2


