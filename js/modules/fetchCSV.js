//Fetch the csv file and return it up
export const fetchCSV = async (path) => {
  const response = await fetch(path);
  const table = await response.text();
  return table;
}; 