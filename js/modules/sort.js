 //Handle Sorting
 export const sortingHandler =  (info) => {
  const {data, ascendent, column} = info; 
  let dispatch = []; 
  if(ascendent){
    dispatch = data.sort((a, b) => a[column] - b[column]);
  }else{
    dispatch = data.sort((a, b) => b[column] - a[column]); 
  }
  return dispatch;
}; 
