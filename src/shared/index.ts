export const extend = Object.assign;

export const EMPTY_OBJ = {};

export const isObject = (val) => {
  return val !== null && typeof val === 'object';
};

export const hasChange = (val, newValue) => {
  return !Object.is(val, newValue);
};

export const hasOwn = (val, key) => Object.hasOwnProperty.call(val, key);
export const camelize = (str: string) => {
  return str.replace(/-(\w)/g, (_, c: string) => {
    return c ? c.toUpperCase() : '';
  });
};
export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
export const toHandlerKey = (str: string) => {
  return str ? 'on' + capitalize(str) : '';
};
