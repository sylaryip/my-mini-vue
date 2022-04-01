import { describe, expect, it, vi } from 'vitest';
import { isReadonly, shallowReadonly } from '../reactive';

describe('shallowReadonly', () => {
  it('should not make non-reactive properties reactive', () => {
    const props = shallowReadonly({ n: { foo: 1 } });
    expect(isReadonly(props)).toBe(true);
    expect(isReadonly(props.n)).toBe(false);
  });

  it('warn where call set', () => {
    console.warn = vi.fn();
    const user = shallowReadonly({ age: 10 });

    user.age = 11;
    expect(console.warn).toBeCalled();
  });
});
