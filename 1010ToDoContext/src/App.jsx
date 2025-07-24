import { useState } from 'react'
import './App.css'
import { Todoprovider } from './context'
import { useEffect } from 'react'
import {TodoItem , TodoForm} from './components'


function App() {
  const [todos, setTodos] = useState([])
  const addTodo = (todo) => {
    // create todo element (as it is an object it self )  --{id:Date.now() , ...todo}
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]) // use de-structuring (access the previous array of todo and add another)
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))) // map->loop to access all the todos in the list/array if(id of prevtodo-in list === id) then we will replace it and if not we will simply keep the prevtodo in the list
    // prev.map((eachval)=>{
    //   if(eachval.id === id){
    //     todo
    //   }else{
    //     eachval
    //   }
    // })

  }
  // map is not prefferes as we have to create a new array (better approach)
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id != id))// if id matches it will be removed
  }


  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo)) // if id matches-- toggle the completed var and if not let it be same prevTodo
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))  // localstorage could be accessed on react nut not on server

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    const strTodos = JSON.stringify(todos)
    localStorage.setItem("todos", strTodos)
  }, [todos])



  return (
    <Todoprovider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* ToDoForm */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className='w-full'>
                <TodoItem todo={todo}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Todoprovider>
  )
}

export default App
