import {sortingHandler} from './modules/sort.js';
import { fetchCSV } from './modules/fetchCSV.js';
import { csvParser } from './modules/csvParser.js';

//USE
const dataAsString = fetchCSV('../data/sp.csv');
const converted = dataAsString.then(value => {
  csvParser(value).then(result => {
    console.table(result)
    const test = sortingHandler({data: result, ascendent: false, column: 'B'})
    console.table(test)
  }); 
});
