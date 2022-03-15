import { NumberFormatPipe } from './number-format.pipe';

describe('AbsPipe', () => {
  let pipe: NumberFormatPipe;

  beforeEach(() => {
    pipe = new NumberFormatPipe();
  });

  it(`should create an instance`, () => {
    expect(pipe).toBeTruthy();
  });

  it(`transform number less than 1000`, () => {
    expect(pipe.transform(665)).toEqual("665");
  });

  it(`transform less than million`, () => {
    expect(pipe.transform(1000)).toEqual("1K");
    expect(pipe.transform(66522)).toEqual("67K");
  });

  it(`transform less than billion`, () => {
    expect(pipe.transform(6652200)).toEqual("7M");
    expect(pipe.transform(66522000)).toEqual("67M");
    expect(pipe.transform(665220000)).toEqual("665M");
  });

  it(`transform billion`, () => {
    expect(pipe.transform(6652200000)).toEqual("7B");
  });

  it(`should be null safe`, () => {
    expect(pipe.transform(null)).toEqual("");
  });

});
