import { createContext,useContext } from "react";
// export TodoContext - act as a global state that can be used by various components 
export const TodoContext = createContext({
    todos:[
        {
            id: 1,
            todo: "Todo msg",
            completed : false,
        }
    ],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
})

export const useTodo = ()=>{  // to avoid calling const value = useContext(TodoContext) -- we can simply just const {todos , addtodos} = useTodo()
    return useContext(TodoContext) 
}

export const Todoprovider = TodoContext.Provider  //just to avoid writing <TodoContext.provider>