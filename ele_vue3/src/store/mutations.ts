import {REMOVE_TODO, SET_DOING, SET_STATUS, SET_TODO, SET_TODO_LIST} from "@/store/actionType";
import {IState, ITodo, TODO_STATUS} from "@/types";

export default {
    [SET_TODO](state:IState,todo:ITodo):void{
        state.list = [todo,...state.list]
    },
    [SET_TODO_LIST](state:IState,todoList:ITodo[]):void{
        state.list = todoList
    },
    [REMOVE_TODO](state:IState,id:number):void{
        console.log(state.list)
        state.list= state.list.filter(((item:ITodo)=>{
            return  item.id !== id
        }))
    },
    [SET_STATUS](state:IState,id:number):void{
        state.list = state.list.map((item:ITodo)=>{
            if (item.id === id ){
                switch (item.status){
                    case TODO_STATUS.FINISH:
                        item.status = TODO_STATUS.WILLDO
                        break;
                    case TODO_STATUS.WILLDO:
                    case TODO_STATUS.DOING:
                        item.status = TODO_STATUS.FINISH
                        break
                    default:
                        break
                }
            }
            return item
        })
    },
    [SET_DOING](state:IState,id:number):void{
        let indexs:number = 0
         state.list.find((item:ITodo,index)=>{
            if (item.id === id){
                indexs = index
            }
        })
        console.log(state.list[indexs].status)
        state.list[indexs].status === TODO_STATUS.WILLDO?(state.list[indexs].status = TODO_STATUS.DOING):(state.list[indexs].status = TODO_STATUS.WILLDO)
        console.log(state.list[indexs].status)
    }

}