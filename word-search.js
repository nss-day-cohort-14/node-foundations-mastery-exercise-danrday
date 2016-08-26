#!/usr/bin/env node

const [,, ...args] = process.argv

var fs = require("fs");

var readStream = fs.createReadStream('/usr/share/dict/words')

readStream.pipe(process.stdout)
