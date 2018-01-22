import { oneAway } from '../../chapter1/1.5_oneAway';

const expect = require('chai').expect;

describe('1.5 One Away', () => {

//ADD SOLUTIONS FOR TESTING BELOW
  test('Solution 1', oneAway)
})

function test(description, cb) {
  describe(description, () => {
    let cat = 'cat';
    let josh = 'joshrulez';

    it('returns true if two strings are the same', () => {
      testStrings(cb, cat, cat, true);
      testStrings(cb, josh, josh, true);
    })
    it('returns true if one character is removed', () => {
      testStrings(cb, cat, 'ct', true);
      testStrings(cb, cat, 'at', true);
      testStrings(cb, cat, 'ca', true);
      testStrings(cb, josh, 'joshrule', true);
    })
    it('returns true if one character is added', () => {
      testStrings(cb, cat, 'cats', true);
      testStrings(cb, cat, 'scat', true);
      testStrings(cb, cat, 'cast', true);
      testStrings(cb, josh, 'josh rulez', true);
      testStrings(cb, josh, 'joshrulez!', true);
    })
    it('returns true if only one character is replaced', () => {
      testStrings(cb, cat, 'kat', true);
      testStrings(cb, cat, 'cad', true);
      testStrings(cb, cat, 'cot', true);
    })
    it('returns false if more than one character is removed', () => {
      testStrings(cb, cat, 't', false);
      testStrings(cb, josh, 'jrulez', false);
    })
    it('returns false if more than one character is added', () => {
      testStrings(cb, cat, 'cadd', false);
      testStrings(cb, cat, 'ccatt', false);
      testStrings(cb, cat, 'cat!!', false);
      testStrings(cb, josh, 'josh rulez!', false);
    })
    it('returns false if more than one character is replaced', () => {
      testStrings(cb, cat, 'dot', false);
      testStrings(cb, cat, 'cod', false);
      testStrings(cb, josh, 'joshroles', false);
    })
  })
}

function testStrings(cb, str1, str2, bool) {
  return expect(cb(str1, str2)).to.equal(bool);
}
