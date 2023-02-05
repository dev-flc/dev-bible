import { DATA } from './data.js';

let inputString = DATA;

let result = {};

inputString.split('},').forEach((element) => {
  let [key1, key2, key3, ...value] = element.replace(/[{}']/g, '').split(',');
  key1 = parseInt(key1);
  key2 = parseInt(key2);
  key3 = parseInt(key3);
  value = value.join().trim();
  if (!result[key1]) {
    result[key1] = {};
  }
  if (!result[key1][key2]) {
    result[key1][key2] = {};
  }
  result[key1][key2][key3] = value;
});

console.log(result);
console.log(JSON.stringify(result));
