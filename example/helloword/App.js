import { h } from "../../lib/my-mini-vue.esm.js";

window.self = null;
export const App = {
    render() {
        window.self = this;
        return h('div',
            {
                id: 'root',
                class: 'root',
                onClick: () => console.log('click'),
            },
            [
                h('span', { class: "red" }, 'hi'),
                h('span', null, ' '),
                h('span', { class: "blue" }, this.msg,),
            ],
        );
    },
    setup() {
        return {
            msg: 'mini-vue',
        }
    }
}