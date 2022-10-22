import { h } from "../../lib/my-mini-vue.esm.js";

export const App = {
    render() {
        return h('div', { class: 'root' },
            [
                h('span', { class: "red" }, 'hi'),
                h('span', null, ' '),
                h('span', { class: "blue" }, this.msg),
            ],
        );
    },
    setup() {
        return {
            msg: 'mini-vue',
        }
    }
}