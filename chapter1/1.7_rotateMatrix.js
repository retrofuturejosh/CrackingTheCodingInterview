export function rotateMatrix(matrixArr) {
  let newMatrix = [];

  matrixArr.forEach((row, rowIdx) => {
    row.forEach((column, colIdx) => {
      if(rowIdx === 0) newMatrix.push([]);
      newMatrix[colIdx][matrixArr.length - rowIdx - 1] = matrixArr[rowIdx][colIdx];
    })
  })

 return newMatrix;
}

//easier to read but more variables
export function rotateMatrix1(matrixArr) {
  let newMatrix = [];
  let length = matrixArr.length;

  matrixArr.forEach((row, rowIdx) => {
    let newColumn = length - rowIdx - 1;
    row.forEach((column, colIdx) => {
      if(rowIdx === 0) newMatrix.push([]);
      let currentPosition = matrixArr[rowIdx][colIdx];
      let newRow = colIdx;
      newMatrix[newRow][newColumn] = currentPosition;
    })
  })

 return newMatrix;
}


//visual aid!
/*


[[1,  2,  3,  4],
 [5,  6,  7,  8],
 [9,  10, 11, 12],
 [13, 14, 15, 16]]

 should become...

 [[13, 9,  5, 1],
  [14, 10, 6, 2],
  [15, 11, 7, 3],
  [16, 12, 8, 4]]

*/

// position swaps
// old[row][column] => new[row][column]
// [0][0] => [0][4]
// [0][1] => [1][4]
// [0][2] => [2][4]
// [0][3] => [3][4]

// [1][0] => [0][3]
// [1][1] => [1][3]
// [1][2] => [2][3]