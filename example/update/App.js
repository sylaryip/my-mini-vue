import { h, ref } from "../../lib/my-mini-vue.esm.js";

export const App = {
    render() {
        return h('div',
            {
                id: 'root',
                class: 'root',

            },
            [
                h('div', {}, 'count:' + this.count),
                h('button', { onClick: this.onClick }, 'Click'),
            ],
        );
    },
    setup() {
        const count = ref(0);
        const onClick = () => {
            count.value++;
        }

        return {
            count,
            onClick,
        }
    }
}