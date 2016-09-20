import { expect } from 'chai';

describe('Example tests...', () => {
  it('true should equal true', () => {
    expect(true).to.equal(true);
  });

  it('null should be null', () => {
    expect(null).to.be.null;
  });

  it('"react starter" should contain "start"', () => {
    expect('react starter').to.contain('start');
  });
});
