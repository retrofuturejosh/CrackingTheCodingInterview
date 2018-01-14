const expect = require('chai').expect;

import { isPermutation } from '../../chapter1/1.2_isPermutation';

//Testing for 1.2 isPermutation
describe('1.1 isPermutation', () => {
  it('should return true if strings are permuation', () => {
    expect(isPermutation('abcdefg', 'badcfeg')).to.equal(true);
    expect(isPermutation('dog', 'god')).to.equal(true);
  });
  it('should return false if strings are not a permuation', () => {
    expect(isPermutation('123', '1234')).to.equal(false);
    expect(isPermutation('123', '412')).to.equal(false);
    expect(isPermutation('dog', 'gad')).to.equal(false);
  });
});