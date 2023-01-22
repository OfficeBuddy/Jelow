import { sayHello } from './greetings';

describe('blb', () => {
  it('Case 1', () => {
    expect(sayHello('Jelow')).toBe('Hello from Jelow');
  });
});
