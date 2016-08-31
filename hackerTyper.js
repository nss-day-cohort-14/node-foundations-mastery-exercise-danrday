
const { Transform } = require('stream')

const hackerTyper = Transform()

//ms
letterInterval = 50

hackerTyper._transform = (buffer, _, cb) => {

  const letters = [...buffer.toString()]

  //pushes each letter by 50ms * letter index
  letters.forEach((letter, i) => {
    setTimeout( () => hackerTyper.push(letters[i]), letterInterval*i)
  })

  //empty callback after wordlength * 50ms
  setTimeout( () => cb(), buffer.length*letterInterval);

}

module.exports = { hackerTyper }
