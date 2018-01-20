import { stringCompression } from '../../chapter1/1.6_stringCompression';

const expect = require('chai').expect;

describe('1.6 String Compression', () => {
  it('returns properly compressed string', () => {
    expect(stringCompression('aaaaabbbbbccccc')).to.equal('a5b5c5');
    expect(stringCompression('JJJJJJJoooooossssshhhhuuuaa!')).to.equal('J7o6s5h4u3a2!1');
  })
  it('returns original string if compressed string is longer', () => {
    expect(stringCompression('dog')).to.equal('dog');
  })
})