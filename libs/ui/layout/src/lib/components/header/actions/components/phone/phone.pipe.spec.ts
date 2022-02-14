import { PhonePipe } from './phone.pipe';

describe('PhonePipe', () => {
  let pipe: PhonePipe;

  beforeEach(() => {
    pipe = new PhonePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return phone', () => {
    expect(pipe.transform('88002004444')).toEqual('8 800 200 4444');
    expect(pipe.transform('+74952004444')).toEqual('+7 (495) 200 4444');
  });
});
