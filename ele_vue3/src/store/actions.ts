import {SET_TODO} from "@/store/actionType";
import {Commit} from "vuex";
import {IState, ITodo} from "@/types";

interface  ICtx {
    commit:Commit,
    state:IState
}

export default {
    [SET_TODO]({commit}:ICtx,todo:ITodo):void{
        commit(SET_TODO,todo)
    }
}