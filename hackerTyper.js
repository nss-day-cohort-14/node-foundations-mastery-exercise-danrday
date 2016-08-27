const { Transform } = require('stream')

const hackerTyper = Transform()

hackerTyper._transform = (buffer, _, cb) => {

  function f() {
    cb(null, buffer)
  }
  setTimeout(f, 50)

}

module.exports = { hackerTyper }
