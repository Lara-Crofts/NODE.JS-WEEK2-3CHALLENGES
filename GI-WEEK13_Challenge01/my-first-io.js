// Write a program that uses a single synchronous filesystem operation to  
//   read a file and print the number of newlines (\n) it contains to the  
//   console (stdout), similar to running cat file | wc -l.  


// To perform a filesystem operation you are going to need the fs module from  
//   the Node core library. To load this kind of module, or any other "global"  
//   module, use the following incantation:  
// turn fs module into fs variable to hold it 
// *** 'fs' is short for “file system,” and the module contains all the functions you need 
// to read, write, and delete files on the local machine.

const fs = require('fs');

// Buffer objects, buffer store a sequence of integers, binary data; 
// Objects that store an array of unformatted memory allocated in memory space
// ****need to start at 2 index (3rd element) bc first two commandline arguments are: 'node' and 'baby-stewps.js'
const buf = fs.readFileSync(process.argv[2]);
const str = buf.toString(); // Buffer objects can be converted to strings by simply calling the toString() method on them
const strArray = str.split('\n'); // split the string into an array of strings using “\n” as a delimiter.
// *** \n .... using this method you'll end up with an array that has one more element than the number of newlines
// thus when console log... need to -1 (not care for that extra line and remove it/not read it)

console.log(strArray.length-1);



//---------------------------- NOTES -------------------------------------------

// ****** process.argv is an array-like object in Node.js 
// that stores the command-line arguments passed to the script

// challenge 3, step 3
// ** FILE SYNC 

// All synchronous (or blocking) filesystem methods in the fs module end with  
//   'Sync'. To read a file, you'll need to use  
//   fs.readFileSync('/path/to/file'). This method will return a Buffer object  
//   containing the complete contents of the file.  
   
//   Documentation on the fs module can be found by pointing your browser here:  
//   file:///usr/local/lib/node_modules/learnyounode/docs-nodejs/fs.html  
   
//   Buffer objects are Node's way of efficiently representing arbitrary arrays  
//   of data, whether it be ascii, binary or some other format. Buffer objects  
//   can be converted to strings by simply calling the toString() method on  
//   them. e.g. const str = buf.toString().  
   
//   Documentation on Buffers can be found by pointing your browser here:  
//   file:///usr/local/lib/node_modules/learnyounode/docs-nodejs/buffer.html  
   
//   If you're looking for an easy way to count the number of newlines in a  
//   string, recall that a JavaScript String can be .split() into an array of  
//   substrings and that '\n' can be used as a delimiter. Note that the test  
//   file does not have a newline character ('\n') at the end of the last line,  
//   so using this method you'll end up with an array that has one more element  
//   than the number of newlines.  
   
//   Check to see if your program is correct by running this command:  
   
//      sudo learnyounode verify my-first-io.js 