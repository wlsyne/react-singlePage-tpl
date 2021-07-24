import { pipe } from '../pipe';

describe('pipe', () => {
  it('is a function', async () => {
    expect(typeof pipe).toBe('function');
    expect(pipe.length).toBe(0);
  });

  it('performs left-to-right function composition', () => {
    const addOne = (x) => x + 1;
    const square = (x) => x * x;
    const minusOne = (x) => x - 1;

    const fn_1 = pipe(addOne, square, minusOne);
    const fn_2 = pipe(minusOne, square, addOne);

    expect(fn_1(2)).toBe(8);
    expect(fn_2(2)).toBe(2);
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
    expect(context.a(5)).toBe(40);
  });

  it('can be applied to one argument', () => {
    expect(() => {
      pipe();
    }).toThrow('pipe requires at least one argument');
  });
});
