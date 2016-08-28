
const { Transform } = require('stream')

const hackerTyper = Transform()


hackerTyper._transform = (buffer, _, cb) => {


  let word = buffer.toString().split('')


  function* generator(word){

  for (i=0; i<word.length; i++) {
    yield word[i]
  }
}

  var gen = generator(word);

  for (i=0; i<word.length; i++) {
    console.log("val", gen.next().value)
  }


  // console.log("val", gen.next().value)


  cb(null, word[0])

}



module.exports = { hackerTyper }
