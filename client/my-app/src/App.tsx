import React, {useState, useEffect} from 'react';
import AddTodo from './components/AddTodo';
import TodoItem from './components/TodoItem';
import {getTodos, addTodo, updateTodo, deleteTodo} from './Api';

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])
  useEffect(() => {
    fetchTodo()
  }, [])

  const fetchTodo = ():void => {
    getTodos()
    .then(({data: {todos}} : ITodo[] | any) => setTodos(todos))
    .catch((e) => {
      console.log(e)
    })
  }

  const handleSaveTodo = (formData: ITodo):any => {
    // e.preventDefault();
    addTodo(formData)
    .then(({status, data}) => {
      if(status !== 201){
        console.log('Error of saving todo')
        throw new Error("Error! Todo not saved")
      }
      setTodos(data.todos)
    })
    .catch((e) => {
      console.log(e)
    })
  }

  const handleUpdateTodo = (todo: ITodo): void => {
    console.log('updatedTodo');
    updateTodo(todo)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error("Error! Todo not updated")
        }
        setTodos(data.todos)
      })
      .catch(err => console.log(err))
  }
  
  const handleDeleteTodo = (_id: string): void => {
    deleteTodo(_id)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error("Error! Todo not deleted")
        }
        setTodos(data.todos)
      })
      .catch(err => console.log(err))
  }

  return(
    <main className = "App">
    <h1>
      My Todos
    </h1>
    <AddTodo saveTodo={handleSaveTodo}/>
    {
      todos.map((todo) =>
      <TodoItem 
      key = {todo._id}
      updatedTodo={handleUpdateTodo}
      deleteTodo={handleDeleteTodo}
      todo={todo}
      />)}
    </main>
)} 

export default App;
