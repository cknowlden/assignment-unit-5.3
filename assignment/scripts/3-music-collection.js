console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

let myCollection = [];
console.log('my collection includes', this.myCollection);

// {
//   title: 'Rumours',
//   artist: 'Fleetwood Mac',
//   yearPublished: 1977,
//  },


function addToCollection(collection, title, artist, yearPublished) {
  console.log('in collection function');
  let album = {
    collection: collection,
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  };
  collection.push(album);
  return album;
};
console.log(`my new collection has ${addToCollection('classicRock', 'Rumours', 'Fleetwood MAc', 1977)}`)

myCollection.push(addToCollection);
console.log(myCollection);






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
