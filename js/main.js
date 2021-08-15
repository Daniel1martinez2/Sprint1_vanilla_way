//Fetch the csv file and return it up
const fetchCSV = async (path) => {
  const response = await fetch(path);
  const table = await response.text();
  return table;
}; 
//Transform the csv data to an array of js objects
const csvParser = async (data) => {
  //1. split de data by break lines and commas in a single movement
  //-> Expected result: [val1, val2, val3... ]
  const transformed = data.split(/\r?\n/).map(data => data.split(','));
  //Get the headers
  const headers = transformed[0];
  //rid of the headers
  transformed.splice(0, 1);
  //Design the array elem according to the headers
  const obj_data = transformed.map(data => {
    const current = {};
    headers.forEach((i, index) => current[i] = data[index])
    return current;
  })
  return obj_data;
};
//Handle sorting
const sortingHandler = (data, ascendent, column) => {
  let dispatch = []; 
  if(ascendent){
    dispatch = data.sort((a, b) => a[column] - b[column]);
  }else{
    dispatch = data.sort((a, b) => b[column] - a[column]); 
  }
  return dispatch;
}
//USE
const dataAsString = fetchCSV('../data/sp.csv');
const converted = dataAsString.then(value => {
  csvParser(value).then(result => {
    console.table(result)
    const test = sortingHandler(result, true, 'A')
    console.table(test)
  }); 
});
