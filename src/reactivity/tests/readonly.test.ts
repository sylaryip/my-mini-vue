import { describe, it, expect, vi } from 'vitest';
import { readonly } from '../reactive';

describe('readonly', () => {
  it('happy path', () => {
    // not set
    const original = { foo: 1, bar: { baz: 2 } };
    const wrapper = readonly(original);
    expect(wrapper).not.toBe(original);
    expect(wrapper.foo).toBe(1);
  });

  it('warn where call set', () => {
    console.warn = vi.fn();
    const user = readonly({ age: 10 });

    user.age = 11;
    expect(console.warn).toBeCalled();
  });
});
