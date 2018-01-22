import { zeroMatrix, zeroMatrixBrute } from "../../chapter1/1.8_zeroMatrix";
const expect = require('chai').expect;

describe('1.8 Zero Matrix', () => {

//ADD SOLUTIONS FOR TESTING BELOW
  test('Solution 1: Optimized solution', zeroMatrix);
  test('Solution 2: Brute force solution', zeroMatrixBrute);
})

function test(description, cb) {
  describe(description, () => {
    let matrix = 
      [[1,  0,  3,  4],
      [5,  6,  7,  8],
      [9,  10, 0, 12],
      [13, 14, 15, 16]];

    let matrixSolution = 
      [[0, 0, 0, 0],
      [5,  0, 0, 8],
      [0,  0, 0, 0],
      [13, 0, 0, 16]];

    let matrix2 = 
      [[0, 2],
       [1, 2],
       [1, 2],
       [1, 2],
       [1, 2],];

    let matrix3 = 
      [[1, 2, 3, 4, 0, 5, 6, 7],
       [1, 2, 3, 4, 5, 6, 7, 8]];

    it('properly sets entire row and column to zero', () => {
      expect(cb(matrix)).to.deep.equal(matrixSolution);
      matrix2 = cb(matrix2);
      expect(matrix2[0]).to.deep.equal([0, 0]);
      expect(matrix2.length).to.equal(5);
      expect(matrix2[4]).to.deep.equal([0, 2]);
      matrix3 = cb(matrix3);
      expect(matrix3[0]).to.deep.equal([0, 0, 0, 0, 0, 0, 0, 0]);
      expect(matrix3[1]).to.deep.equal([1, 2, 3, 4, 0, 6, 7, 8]);
      expect(matrix3.length).to.equal(2);
    })
  })
}