//   Create a file named filtered-ls.js.  CHALLENGE 5 // step 5. 


// Create a program that prints a list of files in a given directory,  
//   filtered by the extension of the files. You will be provided a directory  
//   name as the first argument to your program (e.g. '/path/to/dir/') and a  
//   file extension to filter by as the second argument.  
   
//   For example, if you get 'txt' as the second argument then you will need to  
//   filter the list to only files that end with .txt. Note that the second  
//   argument will not come prefixed with a '.'.  
   
//   Keep in mind that the first arguments of your program are not the first  
//   values of the process.argv array, as the first two values are reserved for  
//   system info by Node.  
   
//   The list of files should be printed to the console, one file per line. You  
//   must use asynchronous I/O.  


const fs = require('fs');
const path = require('path');

// passing directory into element 3 [2]
const directory = process.argv[2]; // or could have used 'const folder' as variable 

// file extensions will be set here in 4th element
const ext = '.' + process.argv[3];

// The fs.readdir() method takes a pathname as its first argument and a callback as its second.
// The callback signature is:    function callback (err, list) { /* ... */ } 
fs.readdir(directory, function (err, files) {

if (err) {
   return console.log(err); 
}

// forEach() method calls a function for each element in an array. for 'EACH' FILE in FILES 
files.forEach(function(file) {
    // -----> extname() method returns the extension of a file path
if (path.extname(file) === ext) {

    console.log(file);

          };
      });
});


// ------------------------ NOTES ---------------------------------


// The fs.readdir() method takes a pathname as its first argument and a  
//   callback as its second. The callback signature is:  
   
//      function callback (err, list) { /* ... */ }  
   
//   where list is an array of filename strings.  
   
//   Documentation on the fs module can be found by pointing your browser here:  
//   file:///usr/local/lib/node_modules/learnyounode/docs-nodejs/fs.html  
   
//   You may also find node's path module helpful, particularly the extname  
//   method.  
   
//   Documentation on the path module can be found by pointing your browser  
//   here:  
//   file:///usr/local/lib/node_modules/learnyounode/docs-nodejs/path.html  
   
//   Check to see if your program is correct by running this command:  
   
//      sudo learnyounode verify filtered-ls.js  
