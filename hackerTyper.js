
const { Transform } = require('stream')

const hackerTyper = Transform()

letterInterval = 50

hackerTyper._transform = (buffer, _, cb) => {

  const letters = [...buffer.toString()]

  letters.forEach((letter, i) => {
    setTimeout( () => hackerTyper.push(letters[i]), letterInterval*i)
  })

  setTimeout( () => cb(), buffer.length*letterInterval);

}

module.exports = { hackerTyper }
