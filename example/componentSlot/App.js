import { h, createTextVNode } from "../../lib/my-mini-vue.esm.js";
import { Foo } from "./Foo.js";

export const App = {
    render() {
        const app = h('div', {}, 'app');
        const foo = h(Foo, {},
            {
                header: ({ age }) => [
                    h('p', {}, 'header' + age),
                    createTextVNode('你好啊'),
                ],
                footer: () => h('p', {}, 'footer')
            });

        return h('div', {},
            [
                app, foo
            ],
        );
    },
    setup() {
        return {
        }
    }
}