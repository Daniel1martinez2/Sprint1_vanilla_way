//Imports 
import { sortingHandler } from './modules/sort.js';
import { fetchCSV } from './modules/fetchCSV.js';
import { csvParser } from './modules/csvParser.js';
//Selectors
const form = document.querySelector('.form');
const submit = form.submit; 
const column = form.column;
const order = form.order; 
//USE
const dataAsString = fetchCSV('../data/sp.csv');
const converted = dataAsString.then(value => {
  return csvParser(value);  
});
//Events
submit.addEventListener('click', (event) => {
  event.preventDefault();
  // console.clear();
  console.log(order.value);
  const ascendent = order.value === '1' ? true : false; 
  converted.then(result => {
    const test = sortingHandler({
      data: result, 
      ascendent: ascendent , 
      column: column.value
    })
    console.table(test)
  }); 
}); 
