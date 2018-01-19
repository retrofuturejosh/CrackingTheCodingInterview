import { palindromePermutation, palindromePermutation2 } from '../../chapter1/1.4_palindromePermutation';

const expect = require('chai').expect;

describe('1.4 Palindrome Permutation', () => {
  test('Solution 1', palindromePermutation);
  test('Solution 2', palindromePermutation2);
})

function test(description, cb) {
  describe(description, () => {
    it('returns true if string is a palindrome and permutation of original string', () => {
      expect(cb('Tact coa', 'taco cat')).to.equal(true);
      expect(cb('Tcat coa', 'atco cta')).to.equal(true);
    })
    it('returns false if not', () => {
      expect(cb('cat', 'toc')).to.equal(false);
      expect(cb('cat', 'tac')).to.equal(false);
    })
  })
}