import { pipe } from '../pipe';

const { expect } = require('chai');

describe('pipe', () => {
  it('is a function', async () => {
    expect(typeof pipe).to.equal('function');
    expect(pipe.length).to.equal(0);
  });

  it('performs left-to-right function composition', () => {
    const addOne = (x) => x + 1;
    const square = (x) => x * x;
    const minusOne = (x) => x - 1;

    const fn_1 = pipe(addOne, square, minusOne);
    const fn_2 = pipe(minusOne, square, addOne);

    expect(fn_1(2)).to.equal(8);
    expect(fn_2(2)).to.equal(2);
  });

  it('passes context to functions', () => {
    function x(val) {
      return this.x * val;
    }
    function y(val) {
      return this.y * val;
    }
    function z(val) {
      return this.z * val;
    }
    var context = {
      a: pipe(x, y, z),
      x: 4,
      y: 2,
      z: 1,
    };
    expect(context.a(5)).to.equal(40);
  });

  it('can be applied to one argument', () => {
    const fn = () => pipe();
    expect(pipe).to.throw(Error, 'pipe requires at least one argument');
  });
});
