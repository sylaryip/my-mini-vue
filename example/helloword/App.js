import { h } from "../../lib/my-mini-vue.esm.js";
import { Foo } from "./Foo.js";

export const App = {
    render() {
        return h('div',
            {
                id: 'root',
                class: 'root',

            },
            'hello ' + this.msg,
        );
    },
    setup() {
        return {
            msg: 'mini-vue',
        }
    }
}