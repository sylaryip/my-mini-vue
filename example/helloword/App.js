import { h } from "../../lib/my-mini-vue.esm.js";
export const App = {
    render() {
        return h('div', { class: 'mini-vue' },
            [
                h('p', { class: "red" }, "hi"),
                h('p', { class: "blue" }, this.msg),
            ],
        );
    },
    setup() {
        return {
            msg: 'mini-vue',
        }
    }
}