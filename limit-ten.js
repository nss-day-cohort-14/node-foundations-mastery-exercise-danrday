const { Transform } = require('stream')

let counter = 0;

const limitTen = Transform()

limitTen._transform = (buffer, _, cb) => {

  if (buffer == 'no match found\n') {
    buffer = null
  }
  else {
    if (counter >= 10) {
      buffer = null
    }
    else {
      counter ++
    }
  }

  cb(null, buffer)
}

module.exports = { limitTen }
