import { effect } from './reactivity/effect';
import { reactive } from './reactivity/reactive';

let a = reactive({ value: 1 });
let b;

effect(() => {
  b = a.value + 10;
  console.log(b);
});

a.value = 30;

console.log('bbb', b);
