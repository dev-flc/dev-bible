import { obj_books } from './obj_books.js';
import { books } from './books.js';

console.log(
  '%cobj_books==>',
  'color:#FF8A71;font-size:1rem;font-weight:bold;',
  obj_books
);

console.log(
  '%cbooks==>',
  'color:#FF8A71;font-size:1rem;font-weight:bold;',
  books
);

console.log(
  '%c<== Convert JSON ==>',
  'color:#FE8356;font-size:3rem;font-weight:bold;'
);

console.log(
  '%cobj_books==>',
  'color:#FF8A99;font-size:1rem;font-weight:bold;',
  JSON.stringify(obj_books)
);

console.log(
  '%cbooks==>',
  'color:#FF8A99;font-size:1rem;font-weight:bold;',
  JSON.stringify(books)
);
