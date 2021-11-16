enum TODO_STATUS{
    WILLDO = 'willdo',
    DOING = 'doing',
    FINISH = 'finish'
}

interface ITodo {
    id:number,
    content:string,
    status:TODO_STATUS
}

interface IState {
    list:ITodo[]
}

export  {
    TODO_STATUS,
    ITodo,
    IState
}
