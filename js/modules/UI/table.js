const createHeaders = (value) => {
  const header = document.createElement('th'); 
  header.innerText = value;
  return header; 
}; 
const createBodyItems = (element) => {
  const currentTr = document.createElement('tr'); 
  for (let key in element) {
    const row = document.createElement('td'); 
    row.innerText = element[key];
    currentTr.appendChild(row); 
  }
  return currentTr; 
}; 
export const createTableUi = (headers, dataArray, container) => {
  const table = document.createElement('table');
  container.innerHTML= ''; 
  table.innerHTML = `
    <thead>
    <tr class="headers"></tr>
    </thead>
    <tbody>
    </tbody>
  `;
  // Select tr elem
  const trHead = table.querySelector('.headers'); 
  const tbody = table.querySelector('tbody'); 
  // Append the headers inside the array
  headers.forEach(header => trHead.appendChild(createHeaders(header))); 
  dataArray.forEach( elem => tbody.appendChild(createBodyItems(elem))); 
  container.appendChild(table);
}; 