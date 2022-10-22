import { h } from "../../lib/my-mini-vue.esm.js";

export const Foo = {
    setup(props, { emit }) {
        const emitAdd = () => {
            emit('add', props.count + 1);
        };

        return {
            emitAdd,
        }
    },
    render() {
        const btn = h('button', {
            onClick: this.emitAdd,
        }, 'emitAdd');
        const foo = h('p', {}, 'foo: ' + this.count);

        return h('div', {}, [foo, btn]);
    }
}