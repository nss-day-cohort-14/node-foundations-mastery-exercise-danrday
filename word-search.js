#!/usr/bin/env node

const [,, ...args] = process.argv
//
var fs = require("fs");
//
var es = require('event-stream')
//

const { limitTen } = require('./limit-ten')

const { hackerTyper } = require('./hackerTyper')

////// /usr/share/dict/words

// process.stdin.resume();

// process.stdin.setEncoding('utf8');

// var readStream = fs.createReadStream(fileToRead)


process.stdin.once('readable', function (pipedArgument) {

  wordToSearchFor = args[0].toLowerCase()

  process.stdin.pipe(es.split()).pipe(es.map(function (data, cb) {

    let newData = "no match found\n"

        currentComparedWord = data.toLowerCase();

        var n = currentComparedWord.indexOf(wordToSearchFor);

        if ( n === 0 ) {
          newData = data + '\n'
        }

        cb(null, newData)

      }))
      .pipe(limitTen).pipe(hackerTyper).pipe(process.stdout)

});

////////





// data = '';
//
//   process.stdin.setEncoding("utf-8");
//
//   process.stdin.on('readable', function() {
//     var chunk;
//     while (chunk = process.stdin.read()) {
//       data += chunk;
//     }
//
//     data.pipe(process.stdout)
//
//   });




//////
// process.stdin.resume();
//
// process.stdin.setEncoding('utf8');
//
// process.stdin.on('data', function (chunk) {
//   // passedArgs += chunk
//   process.stdout.write('Data! -> ' + chunk);
// });
//
// // var data = fs.readFileSync(process.stdin);
//
// // console.log("data:", data)
//
// process.stdin.on('end', function() {
//   process.stderr.write('End\n')
// })


////////

//
// const { limitTen } = require('./limit-ten')
//
// wordToSearchFor = args[0].toLowerCase()
//
// readStream.pipe(es.split()).pipe(es.map(function (data, cb) {
//
//   let newData = "no match found\n"
//
//       currentComparedWord = data.toLowerCase();
//
//       var n = currentComparedWord.indexOf(wordToSearchFor);
//
//       if ( n === 0 ) {
//         newData = data + '\n'
//       }
//
//       cb(null, newData)
//
//     }))
//     .pipe(limitTen).pipe(process.stdout)
