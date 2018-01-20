import { oneAway } from '../../chapter1/1.5_oneAway';

const expect = require('chai').expect;

describe('1.5 One Away', () => {
  let cat = 'cat';
  let josh = 'joshrulez';

  it('returns true if two strings are the same', () => {
    testStrings(cat, cat, true);
    testStrings(josh, josh, true);
  })
  it('returns true if one character is removed', () => {
    testStrings(cat, 'ct', true);
    testStrings(cat, 'at', true);
    testStrings(cat, 'ca', true);
    testStrings(josh, 'joshrule', true);
  })
  it('returns true if one character is added', () => {
    testStrings(cat, 'cats', true);
    testStrings(cat, 'scat', true);
    testStrings(cat, 'cast', true);
    testStrings(josh, 'josh rulez', true);
    testStrings(josh, 'joshrulez!', true);
  })
  it('returns true if only one character is replaced', () => {
    testStrings(cat, 'kat', true);
    testStrings(cat, 'cad', true);
    testStrings(cat, 'cot', true);
  })
  it('returns false if more than one character is removed', () => {
    testStrings(cat, 't', false);
    testStrings(josh, 'jrulez', false);
  })
  it('returns false if more than one character is added', () => {
    testStrings(cat, 'cadd', false);
    testStrings(cat, 'ccatt', false);
    testStrings(cat, 'cat!!', false);
    testStrings(josh, 'josh rulez!', false);
  })
  it('returns false if more than one character is replaced', () => {
    testStrings(cat, 'dot', false);
    testStrings(cat, 'cod', false);
    testStrings(josh, 'joshroles', false);
  })
})

function testStrings(str1, str2, bool) {
  return expect(oneAway(str1, str2)).to.equal(bool);
}
