import {SET_TODO} from "@/store/actionType";
import {IState, ITodo} from "@/types";

export default {
    [SET_TODO](state:IState,todo:ITodo):void{
        state.list.unshift(todo)
        console.log(state.list)
    }
}