console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

let myCollection = [];
console.log('my collection includes', this.myCollection);

let album = [
  {
  title: 'Rumours',
  artist: 'Fleetwood Mac',
  yearPublished: 1977,
 },
]

console.log('first album', album)






function addToCollection(collection, title, artist, yearPublished) {
const album = {
  myCollection: [],
  title: '',
  artist: '',
  yearPublished: 9
}
//myCollection.push(album1);
}
//console.log(album1.title)
console.log(`my stuff, ${addToCollection(['pupp'], 'am', 'struggling', 9)}`);





//console.log('album1', album1);
console.log('my collection now includes', this.myCollection);
console.log(addToCollection());





// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
