import { zeroMatrix, zeroMatrixBrute } from "../../chapter1/1.8_zeroMatrix";

const expect = require('chai').expect;

describe('1.8 Zero Matrix', () => {
  test('Optimized solution', zeroMatrix);
  test('Brute force solution', zeroMatrixBrute);
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
    it('properly sets entire row and column to zero', () => {
      expect(cb(matrix)).to.deep.equal(matrixSolution);
    })
  })
}