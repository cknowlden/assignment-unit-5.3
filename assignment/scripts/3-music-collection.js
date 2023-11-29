console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

let myCollection = [];

function addToCollection(collection, title, artist, yearPublished) {
  //console.log('in collection function');
  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  };
  collection.push(album);
  return album;
};
addToCollection(myCollection, 'Rumours', 'Fleetwood Mac', 1977);
addToCollection(myCollection, 'Candy-O', 'The Cars', 1979);
addToCollection(myCollection, 'Very Necessary', 'Salt-N-Pepa', 1993);
addToCollection(myCollection, 'Tell All Your Friends', 'Taking Back Sunday', 2002);
addToCollection(myCollection, 'Moondance', 'Van Morrison', 1970);
addToCollection(myCollection, 'Let It Enfold You', 'Senses Fail', 2004);
console.log('my collection includes:', myCollection);

//showCollection function
function showCollection(collection){
  //loop through collection
  for (let album of collection){
    console.log(JSON.stringify(album));
  }
};
showCollection(myCollection);

//findByArtist function
function findByArtist(collection, artist){
  //console.log('in findByArtist function');
  const newArtist = [];
  //console.log('new artist array', newArtist);
  for (let album of collection){
    if (album.artist === artist){
    console.log(artist);
    newArtist.push(album.artist);
    }
  }
  return newArtist;
}
findByArtist(myCollection, 'Fleetwood Mac');


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
