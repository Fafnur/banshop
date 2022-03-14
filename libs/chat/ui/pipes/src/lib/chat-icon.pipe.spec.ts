import { ChatIconPipe } from './chat-icon.pipe';

describe('ChatIconPipe', () => {
  let pipe: ChatIconPipe;

  beforeEach(() => {
    pipe = new ChatIconPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('create return result', () => {
    expect(pipe.transform(true)).toBe(`/assets/images/user.svg`);
    expect(pipe.transform(false)).toBe(`/assets/images/logo.svg`);
  });
});
