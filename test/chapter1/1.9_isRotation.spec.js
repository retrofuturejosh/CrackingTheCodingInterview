import { isRotation } from "../../chapter1/1.9_isRotation";
const expect = require('chai').expect;

describe('1.9 Is Rotation', () => {

//ADD SOLUTIONS FOR TESTING BELOW
  test('Solution 1', isRotation);
})

function test(description, cb) {
  describe(description, () => {
    it('returns true if string 2 is a rotation of string 1', () => {
      expect(isRotation('doggies', 'giesdog')).to.equal(true);
      expect(isRotation('Eh, whats up doc?!', ' up doc?!Eh, whats')).to.equal(true);
    })
    it('returns false if string 2 is not a rotation of string 1', () => {
      expect(isRotation('dogs', 'cats')).to.equal(false);
      expect(isRotation('cat', 'atk')).to.equal(false);
      expect(isRotation('hi', 'ih ')).to.equal(false);
    })
  })
}