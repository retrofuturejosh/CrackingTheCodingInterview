const expect = require('chai').expect;

import { urlify, urlify2, urlify3 } from '../../chapter1/1.3_URLify';

//Testing for 1.3 URLify
describe('1.3 URLify', () => {
  describe('solution 1', () => {
    testSolution(urlify);
  }) 
  describe('solution 2', () => {
    testSolution(urlify2);
  })
  describe('solution 3', () => {
    testSolution(urlify3);
  })
});

function testSolution(cb) {
  it('should return true correct string', () => {
    expect(cb('Mr John Smith    ', 13)).to.equal('Mr%20John%20Smith');
    expect(cb('Mr John  Smith         ', 14)).to.equal('Mr%20John%20%20Smith');
  });
}