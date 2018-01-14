const expect = require('chai').expect;

import { isUnique, isUnique2, isUnique3 } from '../../chapter1/1.1_isUnique';

//Testing for 1.1 isUnique
describe('1.1 isUnique', function() {
  describe('solution 1', function() {
    it('should return true if all characters are unique', function() {
      expect(isUnique('abcdefg')).to.equal(true);
      expect(isUnique('12345')).to.equal(true);
      });
    it('should return false if all characters are not unique', function() {
      expect(isUnique('aba')).to.equal(false);
      expect(isUnique('12334')).to.equal(false);
    });
  });

  describe('solution 2', function() {
    it('should return true if all characters are unique', function() {
      expect(isUnique2('abcdefg')).to.equal(true)
      expect(isUnique2('12345')).to.equal(true)
    });
    it('should return false if all characters are not unique', function() {
      expect(isUnique2('aba')).to.equal(false)
      expect(isUnique2('12334')).to.equal(false);
    });
  });

  describe('solution 3', function() {
    it('should return true if all characters are unique', function() {
      expect(isUnique3('abcdefg')).to.equal(true)
      expect(isUnique3('12345')).to.equal(true)
    });
    it('should return false if all characters are not unique', function() {
      expect(isUnique3('aba')).to.equal(false)
      expect(isUnique3('12334')).to.equal(false);
    });
  });
});