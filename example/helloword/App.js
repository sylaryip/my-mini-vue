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

            },
            [
                h(Foo, {
                    count: 1,
                    onAdd(result) {
                        console.log("onAdd", result);
                    },
                })
            ],
        );
    },
    setup() {
        return {
            msg: 'mini-vue',
        }
    }
}