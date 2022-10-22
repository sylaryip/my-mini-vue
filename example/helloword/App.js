import { h } from "../../lib/my-mini-vue.esm.js";
import { Foo } from "./Foo.js";

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
                h(Foo, { count: 1 })
            ],
        );
    },
    setup() {
        return {
            msg: 'mini-vue',
        }
    }
}