const message = "Hello, world.";

const encoded = btoa(message);
console.log("Encoded:", encoded);

const decoded = atob(encoded);
console.log("Decoded:", decoded);

// // Convert a string to Base64
// const originalString = "Hello, this is a string to encode!";
// const base64String = Buffer.from(originalString).toString("base64");

// console.log("Original String:", originalString);
// console.log("Base64 Encoded:", base64String);

// // Convert a Base64 string back to the original string
// const decodedString = Buffer.from(base64String, "base64").toString("utf-8");

// console.log("Base64 Decoded:", decodedString);
