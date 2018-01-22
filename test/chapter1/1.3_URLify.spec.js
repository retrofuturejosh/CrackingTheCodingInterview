import { urlify, urlify2, urlify3 } from '../../chapter1/1.3_URLify';
const expect = require('chai').expect;

//Testing for 1.3 URLify
describe('1.3 URLify', () => {

//ADD SOLUTIONS FOR TESTING BELOW
  test('Solution 1', urlify);
  test('Solution 2', urlify2);
  test('Solution 3', urlify3);
});

function test(description, cb) {
  describe(description, () => {
    it('should return correct string', () => {
      expect(cb('Mr John Smith    ', 13)).to.equal('Mr%20John%20Smith');
      expect(cb('Mr John  Smith         ', 14)).to.equal('Mr%20John%20%20Smith');
    });
  })
}
