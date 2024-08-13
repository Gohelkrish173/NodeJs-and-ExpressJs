const fs = require('fs');

// fs.exists('module1.js' , (exists) => {
//     console. log(exists ? 'Found' : 'Not Found!');
// })


// const data = fs.readFileSync('darshan .txt');
// console.log(data.toString()) //Synchronous (blocking)

// fs.readFile('mynewfile3.txt', function(err, data) {
//     console.log(data.toString())
//   }); //Asynchronous (non-blocking)

fs.unlink( 'darshanuni.txt', (err) => {
  if(err){ throw err }
  console.log("File Deleted");
})

// fs.rename('mynewfile4.txt', 'darshanuni.txt', (err) => {
//     if(err){ throw err }
//     console.log("Renamed");
// })

// fs.appendFile('mynewfile4.txt', 'Hello Students!', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
// });

// fs.writeFile('mynewfile4.txt', 'Hello Student!', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
// });


// fs.writeFileSync("./test.txt","Hello world");