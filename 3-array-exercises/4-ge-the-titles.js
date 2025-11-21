const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  },
  {
    title: 'Book3',
    author: 'Name2'
  },
  {
    title: 'Book4',
    author: 'Name2'
  },
  {
    title: 'Book5',
    author: 'Name2'
  },
  {
    title: 'Book6',
    author: 'Name2'
  },
  {
    title: 'Book7',
    author: 'Name2'
  },
  {
    title: 'Book8',
    author: 'Name2'
  }
]

function getTheTitles(obj) {
    let arr = [];
    for (item of obj) {
        arr.push(item.title);
    }
    return arr;
}

console.log(getTheTitles(books));