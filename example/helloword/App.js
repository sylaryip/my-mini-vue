import { h } from "../../lib/my-mini-vue.esm.js";

window.self = null;
export const App = {
    render() {
        window.self = this;
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