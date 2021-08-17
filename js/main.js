//Imports 
import { sortingHandler } from './modules/sort.js';
import { fetchCSV } from './modules/fetchCSV.js';
import { csvParser } from './modules/csvParser.js';
import { submit, column, order } from './modules/selectors.js';
//USE
const dataConverted = fetchCSV('../data/sp.csv').then(csvParser);
//Events
submit.addEventListener('click', (event) => {
  event.preventDefault();
  console.clear();
  const ascendent = order.value === '1' ? true : false; 
  const handlingData = async () => {
    const converted = await dataConverted; 
    const test = sortingHandler({
      data: converted, 
      ascendent: ascendent, 
      column: column.value
    }); 
    console.table(test); 
  }; 
  handlingData(); 
}); 
