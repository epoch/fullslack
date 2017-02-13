var books = [{
  title: 'the hobbit',
  author: 'jrr tolkien',
  alreadyRead: true
}, {
  title: 'fight club',
  author: 'chuck p',
  alreadyRead: true
}, {
  title: 'the sell out',
  author: 'paul',
  alreadyRead: false
}];

for (var index = 0; index < books.length; index++) {
  var bookDescription = '"' + books[index].title + '" ' + books[index].author;

  if (books[index].alreadyRead) {
    console.log('you already read ' + bookDescription);
  } else {
    console.log('you need to read ' + bookDescription);
  }

}