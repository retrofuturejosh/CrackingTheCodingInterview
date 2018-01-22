import { isUnique, isUnique2, isUnique3 } from '../../chapter1/1.1_isUnique';
const expect = require('chai').expect;

//Testing for 1.1 isUnique
describe('1.1 isUnique', () => {

//ADD SOLUTIONS FOR TESTING BELOW
  test('Solution 1', isUnique);
  test('Solution 2', isUnique2);
  test('Solution 3', isUnique3);
});

function test(description, cb) {
  describe(description, () => {

    it('should return true if all characters are unique', () => {
      expect(cb('abcdefg')).to.equal(true);
      expect(cb('12345')).to.equal(true);
    });

    it('should return false if all characters are not unique', () => {
      expect(cb('aba')).to.equal(false);
      expect(cb('12334')).to.equal(false);
    });
  })
}