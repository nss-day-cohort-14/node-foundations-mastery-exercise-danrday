#!/usr/bin/env node

const [,, ...args] = process.argv

var fs = require("fs");

var es = require('event-stream')

var readStream = fs.createReadStream('/usr/share/dict/words')

const { limitTen } = require('./limit-ten')


function Multiwords(s){
    var a = flix[0].toLowerCase();

    for(var i=0; i<s.length; i++){
        if (a.indexOf(s[i].toLowerCase()) != -1){
            alert('Found');
        } else {
            alert('Not Found');
        }
    }
}

wordToSearchFor = args[0].toLowerCase()


readStream.pipe(es.split()).pipe(es.map(function (data, cb) {

  let newData = "no match found\n"

      // for (letter in data) {
      //   console.log("data.length", typeof(data) + " " + data + " " + data[letter])
      //
      //   }

      currentComparedWord = data.toLowerCase();

      var n = currentComparedWord.indexOf(wordToSearchFor);

      if ( n === 0 ) {
        newData = data + '\n'
      }

      cb(null, newData)

    }))
    .pipe(limitTen).pipe(process.stdout)
