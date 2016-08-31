#!/usr/bin/env node

const [,, ...args] = process.argv

var fs = require("fs");

var es = require('event-stream')

const { limitTen } = require('./limit-ten')

const { hackerTyper } = require('./hackerTyper')

// pipes in argument through terminal, e.g. cat /usr/share/dict/words | word-search
process.stdin.once('readable', function (pipedArgument) {

  wordToSearchFor = args[0].toLowerCase()

  //es.split() splits by word, then es.map() pipes individual words through
  process.stdin.pipe(es.split()).pipe(es.map(function (data, cb) {

    let newData = "no match found\n"

        currentComparedWord = data.toLowerCase();

        var n = currentComparedWord.indexOf(wordToSearchFor);

        //if match, pipe new word through
        if ( n === 0 ) {
          newData = data + '\n'
          cb(null, newData)
        }
        //if no match found, empty callback
        else {
          cb()
        }

      }))
      .pipe(limitTen)
      .pipe(hackerTyper)
      .pipe(process.stdout)

});
