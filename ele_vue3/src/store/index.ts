import state from "@/store/state";
import mutations from "@/store/mutations";
import actions from "@/store/actions";
import {createStore} from 'vuex'

export default createStore({
    state,
    mutations,
    actions
})


// import { InjectionKey } from 'vue'
// import { createStore, useStore as baseUseStore, Store } from 'vuex'
//
// export interface State {
//     count: number
// }
//
// export const key: InjectionKey<Store<State>> = Symbol()
//
// export const store = createStore<State>({
//     state: {
//         count: 0
//     }
// })
//
// // 定义自己的 `useStore` 组合式函数
// export function useStore () {
//     return baseUseStore(key)
// }