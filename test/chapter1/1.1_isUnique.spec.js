const expect = require('chai').expect;

import { isUnique, isUnique2, isUnique3 } from '../../chapter1/1.1_isUnique';

//Testing for 1.1 isUnique
describe('1.1 isUnique', () => {
  describe('solution 1', () => {
    testSolution1(isUnique);
    testSolution2(isUnique);
  });
  describe('solution 2', () => {
    testSolution1(isUnique2);
    testSolution2(isUnique2);
  });
  describe('solution 3', () => {
    testSolution1(isUnique3);
    testSolution2(isUnique3);
  });
});

function testSolution1(cb) {
  it('should return true if all characters are unique', () => {
    expect(cb('abcdefg')).to.equal(true);
    expect(cb('12345')).to.equal(true);
  });
}

function testSolution2(cb) {
  it('should return false if all characters are not unique', () => {
    expect(cb('aba')).to.equal(false);
    expect(cb('12334')).to.equal(false);
  });
}