//Imports 
import { sortingHandler } from './modules/sort.js';
import { fetchCSV } from './modules/fetchCSV.js';
import { csvParser } from './modules/csvParser.js';
import { submit, column, order, container } from './modules/selectors.js';
import { createTableUi } from './modules/UI/table.js';
//USE
const getDataConverted = async () => {
  const fetchData = await fetchCSV('../data/sp.csv');
  const convertedData = await csvParser( fetchData)
  return { parseData: convertedData.parsedData, headers: convertedData.headers }; 
}; 
const converted = await getDataConverted(); 
const convertedData = await converted.parseData; 
const dataHeaders = await converted.headers;
//init data
createTableUi(dataHeaders, convertedData, container);
//Events
submit.addEventListener('click', (event) => {
  event.preventDefault();
  console.clear();
  const ascendent = order.value === '1' ? true : false; 
  const handlingData = async () => {
    const test = sortingHandler({
      data: convertedData, 
      ascendent: ascendent, 
      column: column.value
    }); 
    // console.table(test); 
    createTableUi(dataHeaders, convertedData, container);
  }; 
  handlingData(); 
}); 


