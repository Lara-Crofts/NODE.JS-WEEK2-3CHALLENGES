// Create a file named my-first-async-io.js.  


// Write a program that uses a single asynchronous filesystem operation to  
//   read a file and print the number of newlines it contains to the console  
//   (stdout), similar to running cat file | wc -l.  
// -----> cat file  print the content of a file onto the standard output stream.
// Other than that, the cat command also allows us to write some texts into a file
   
//   The full path to the file to read will be provided as the first  
//   command-line argument.  

// 'fs' is short for “file system,” and the module contains all the functions you need 
// to read, write, and delete files on the local machine.
const fs = require('fs');
// const file = process.argv[2]; // same as the fs.readFile(process.argv[2])


//  .readFile --> reads the full content of the file in memory before returning the data
//CALLBACK FUNCTION in use. A callback function is a function passed into another function as an argument
// syntax : function callback (err, data) { /* ... */ }  
//                                   error  data
fs.readFile(process.argv[2], function(err, data) {
    
    if (!err) { // if NOT error 
        const str = data.toString(); //  convert to string 
        const strArray = str.split('\n'); //  separates the string into substrings

        console.log(strArray.length-1); // return as set of strings 
    } else {
        if (err) { // IS error
            return console.log(err)
          }
    }
});



// ---------------------------- NOTES ------------------------------------------

// Check to see if your program is correct by running this command:  
// sudo learnyounode verify my-first-async-io.js


//-------

// challenge 4, step 4 
// ** READ FILE 

// The solution to this problem is almost the same as the previous problem  
//   except you must now do it the Node.js way: asynchronous.  
   
//   Instead of fs.readFileSync() you will want to use fs.readFile() and  
//   instead of using the return value of this method you need to collect the  
//   value from a callback function that you pass in as the second argument. To  
//   learn more about callbacks, check out:  
//   (https://github.com/maxogden/art-of-node#callbacks).  
   
//   Remember that idiomatic Node.js callbacks normally have the signature:  
   
//      function callback (err, data) { /* ... */ }  
   
//   so you can check if an error occurred by checking whether the first  
//   argument is truthy. If there is no error, you should have your Buffer  
//   object as the second argument. As with readFile(), you can supply 'utf8'  
//   as the second argument and put the callback as the third argument and you  
//   will get a String instead of a Buffer.  
   
//   Documentation on the fs module can be found by pointing your browser here:  
//   file:///usr/local/lib/node_modules/learnyounode/docs-nodejs/fs.html  