#!/usr/bin/env node        // This is the Shebang line. This tells the operating system to use Node.js to run this script

// Import the built-in modules we need
const fs = require("fs");
const path = require("path");

//mports just the performance part from Node's "perf_hooks" module
//Gives us high-precision timing functions to measure how long operations take

const { performance } = require("perf_hooks");

// Grab the command-line arguments
// process.argv is an array where:
// [0] = path to Node.js
// [1] = path to this script
// [2] = first argument (action: "read" or "write")
// [3] = second argument (file path)

const [, , action, filePath] = process.argv;

// Helper: print usage if the user did something wrong
function showHelp() {
  console.log("Usage: node latency.js read  <file>");
  console.log("       node latency.js write <file>");
  process.exit(1); // stop the program with an error code
}

// Debugging output to see what arguments were received
console.log("Received arguments:", process.argv);

// If the user did not give exactly two arguments (action + file), show help
if (!action || !filePath) showHelp();

// Turn the file path into an absolute path (safer)
const fullPath = path.resolve(filePath);

// Decide what to do: read or write
if (action === "read") {
  // Start the stopwatch
  const start = performance.now();

  // Ask the operating system to read the file
  fs.readFile(fullPath, (err, data) => {
    if (err) {
      console.error("Error:", err.message);
      process.exit(1);
    }
    // Stop the stopwatch
    const end = performance.now();
    const ms = (end - start).toFixed(3);
    console.log(`Read ${data.length} bytes in ${ms} ms`);
  });
} else if (action === "write") {
  // Make 1 MB of dummy data
  // If we don't provide any data, Node.js takes 0 as the default data
  const dummy = Buffer.alloc(1024 * 1024, "x");

  // Start the stopwatch
  const start = performance.now();

  // Ask the operating system to write the file
  // fullPath - Where to save the file (the absolute path we created earlier)
  //dummy - What to save (our 1MB of "x" characters)

  fs.writeFile(fullPath, dummy, (err) => {
    if (err) {
      console.error("Error:", err.message);
      process.exit(1);
    }
    // Stop the stopwatch
    const end = performance.now();
    const ms = (end - start).toFixed(3);
    console.log(`Wrote ${dummy.length} bytes in ${ms} ms`);
  });
} else {
  showHelp();
}

// To Read -

// C:\Users\admin\Desktop\io-latency-cli> echo hello world my name is jay>file_name.txt
// this creates a file inside the io-latency-cli.
// after creating the file, run the command - node latency.js read file_name.txt

// To Write -

// Simply run the command - node latency.js write file_name.txt
