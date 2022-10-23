import { h, renderSlots, getCurrentInstance, inject } from "../../lib/my-mini-vue.esm.js";

export const Foo = {
    setup() {
        const instance = getCurrentInstance();
        console.log('Foo:', instance);
        console.log('inject:', inject('foo'));
    },
    render() {
        const foo = h('p', {}, 'foo');
        const age = 18;
        return h('div', {},
            [
                renderSlots(this.$slots, "header", { age }),
                foo,
                renderSlots(this.$slots, 'footer'),
            ]
        );
    }
}