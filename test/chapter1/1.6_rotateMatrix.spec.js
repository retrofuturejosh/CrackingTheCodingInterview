import { rotateMatrix, rotateMatrix1 } from '../../chapter1/1.7_rotateMatrix';

const expect = require('chai').expect;

describe('1.7 Rotate Matrix', () => {

//ADD SOLUTIONS FOR TESTING BELOW
   test('solution 1', rotateMatrix);
   test('solution 2', rotateMatrix1);
});

function test(description, cb) {
  let matrix = 
  [[1,  2,  3,  4],
   [5,  6,  7,  8],
   [9,  10, 11, 12],
   [13, 14, 15, 16]];
  let rotatedMatrix = 
  [[13, 9,  5, 1 ],
   [14, 10, 6, 2 ],
   [15, 11, 7, 3 ],
   [16, 12, 8, 4 ]];
  let matrixSmall = 
  [[1, 2],
   [3, 4]];
   let matrixSmallRotate = 
  [[3, 1],
   [4, 2]];

  return describe(description, () => {
    it('returns the correct matrix', () => {
      expect(rotateMatrix(matrix)).to.deep.equal(rotatedMatrix);
      expect(rotateMatrix(matrixSmall)).to.deep.equal(matrixSmallRotate);
    })
  })
}