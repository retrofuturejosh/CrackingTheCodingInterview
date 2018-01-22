import { stringCompression } from '../../chapter1/1.6_stringCompression';

const expect = require('chai').expect;

describe('1.6 String Compression', () => {

//ADD SOLUTIONS FOR TESTING BELOW
  test('Solution 1', stringCompression);
})

function test(description, cb) {
  describe(description, () => {
    it('returns properly compressed string', () => {
      expect(cb('aaaaabbbbbccccc')).to.equal('a5b5c5');
      expect(cb('JJJJJJJoooooossssshhhhuuuaa!')).to.equal('J7o6s5h4u3a2!1');
    })
    it('returns original string if compressed string is longer', () => {
      expect(cb('dog')).to.equal('dog');
    })
  })
}