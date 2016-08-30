#!/usr/bin/env node

const [,, ...args] = process.argv

var fs = require("fs");

var es = require('event-stream')

const { limitTen } = require('./limit-ten')

const { hackerTyper } = require('./hackerTyper')

process.stdin.once('readable', function (pipedArgument) {

  wordToSearchFor = args[0].toLowerCase()

  process.stdin.pipe(es.split()).pipe(es.map(function (data, cb) {

    let newData = "no match found\n"

        currentComparedWord = data.toLowerCase();

        var n = currentComparedWord.indexOf(wordToSearchFor);

        if ( n === 0 ) {
          newData = data + '\n'
          cb(null, newData)
        }
        else {
          cb()
        }




      }))
      .pipe(limitTen)
      .pipe(hackerTyper)
      .pipe(process.stdout)

});
