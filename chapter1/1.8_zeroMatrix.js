//optimized solution
export function zeroMatrix(matrix) {
//create arrays to store row and column indexes of 0 elements
  let zeroColumn = [];
  let zeroRow = [];
  let colLength = matrix.length;
  let rowLength = matrix[0].length;

  matrix.forEach((row, rowIdx) => {
    row.forEach((col, colIdx) => {
//chek if element is 0
      if(!matrix[rowIdx][colIdx]){
        zeroRow.push(rowIdx);
        zeroColumn.push(colIdx);
      }
    });
  });

//set entire row to zero if index is in zeroRow array
  zeroRow.forEach(idx => {
    for(let k = 0; k < rowLength; k++) {
      matrix[idx][k] = 0;
    }
  });
//set entire column to zero if index is in zeroColumn array
  zeroColumn.forEach(idx => {
    for(let k = 0; k < colLength; k++) {
      matrix[k][idx] = 0;
    }
  });
  
  return matrix;
}

//brute force solution, creating new matrix
export function zeroMatrixBrute(matrix) {
  let colLength = matrix.length;
  let rowLength = matrix[0].length;
  let newMatrix = [];

//build new Matrix
  for(let i = 0; i < matrix.length; i++) {
    newMatrix.push(Array.apply(null, Array(rowLength)).map(() => 1));
  }

  matrix.forEach((row, rowIdx) => {
    row.forEach((col, colIdx) => {
//check if element is already 0 in newMatrix
      if(!newMatrix[rowIdx][colIdx]) return;
      
//check if element is 0 in matrix
      if(!matrix[rowIdx][colIdx]) {

//make the row 0;
        for(let i = 0; i < rowLength; i++) {
          newMatrix[rowIdx][i] = 0;
        }

//make the column 0;
        for(let i = 0; i < colLength; i++) {
          newMatrix[i][colIdx] = 0;
        }
      }
      
//assign the element from original matrix to new matrix
      newMatrix[rowIdx][colIdx] = matrix[rowIdx][colIdx];
    });
  });
  return newMatrix;
}