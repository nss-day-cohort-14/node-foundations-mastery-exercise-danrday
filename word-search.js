#!/usr/bin/env node

const [,, ...args] = process.argv

var fs = require("fs");

var es = require('event-stream')

var readStream = fs.createReadStream('/usr/share/dict/words')

const { limitTen } = require('./limit-ten')

wordToSearchFor = args[0].toLowerCase()

readStream.pipe(es.split()).pipe(es.map(function (data, cb) {

  let newData = "no match found\n"

      currentComparedWord = data.toLowerCase();

      var n = currentComparedWord.indexOf(wordToSearchFor);

      if ( n === 0 ) {
        newData = data + '\n'
      }

      cb(null, newData)

    }))
    .pipe(limitTen).pipe(process.stdout)
