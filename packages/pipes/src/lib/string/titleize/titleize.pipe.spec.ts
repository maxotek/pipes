import { TitleizePipe } from './titleize.pipe';

describe('TitleizePipe', () => {
  let pipe: TitleizePipe;

  beforeEach(() => {
    pipe = new TitleizePipe();
  });

  it(`should create an instance`, () => {
    expect(pipe).toBeTruthy();
  });

  it(`should convert a string with single character to title case`, () => {
    expect(pipe.transform('a')).toEqual('A');
  });

  it(`should convert a string with single word to title case`, () => {
    expect(pipe.transform('single')).toEqual('Single');
  });

  it(`should return same string for string with all words starting with special char`, () => {
    expect(pipe.transform('$$$ |s ^ot @onverted.')).toEqual('$$$ |s ^ot @onverted.');
  });

  it(`should return empty string on converting an empty string to title case`, () => {
    expect(pipe.transform('')).toEqual('');
  });

  it(`should return same string on converting a white space string to title case`, () => {
    expect(pipe.transform('\t\n ')).toEqual('\t\n ');
  });
  
  it(`C# enum should should have space`, () => {
    expect(pipe.transform('SomeEnumValue')).toEqual('Some Enum Value');
  });

  it(`should be null safe`, () => {
    expect(pipe.transform(null)).toBeNull();
  });

});
