import { HighPrecDurationPipe } from './highprec-duration.pipe';
import { DurationPipe } from 'ngx-moment';

describe('HighPrecDurationPipe', () => {
  let pipe: HighPrecDurationPipe;

  beforeEach(() => {
    pipe = new HighPrecDurationPipe(new DurationPipe());
  });

  it(`should create an instance`, () => {
    expect(pipe).toBeTruthy();
  });

  it(`milliseconds should show as ms`, () => {
    expect(pipe.transform(4, 'milliseconds')).toEqual('4ms');
    expect(pipe.transform(45, 'milliseconds')).toEqual('45ms');
    expect(pipe.transform(623, 'milliseconds')).toEqual('623ms');
  });
  
  it(`milliseconds should show as seconds`, () => {
    expect(pipe.transform(1100, 'milliseconds')).toEqual('1.1s');
    expect(pipe.transform(59 * 1000, 'milliseconds')).toEqual('59s');
  });

  it(`milliseconds should show as minute`, () => {
    expect(pipe.transform(60 * 1000, 'milliseconds')).toEqual('a minute');
  });

  it(`seconds should show as seconds`, () => {
    expect(pipe.transform(55, 'seconds')).toEqual('55s');
  });

  it(`seconds should show as minutes`, () => {
    expect(pipe.transform(365, 'seconds')).toEqual('6 minutes');
  });

  it(`should be null safe`, () => {
    expect(pipe.transform(null, 'seconds')).toBeNull();
  });

});
