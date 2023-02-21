import { useState } from 'react';
import './App.css';
import { dataTodos, generateId } from './data';
import { RiDeleteBin2Fill, RiCheckDoubleFill } from "react-icons/ri";
import styles from './App.module.css'


function App() {
  const [todos, setTodos] = useState(dataTodos)
  const [value, setValue] = useState({id: '', title: '', isComplete: false})

  const result = todos.map((todo) => {
    return <p className={styles.todo}
    key={todo.id}>{todo.title}
    <RiDeleteBin2Fill 
    className={styles.deleteTodo} 
    onClick={() => remove(todo.id)}>
      </RiDeleteBin2Fill>
      <RiCheckDoubleFill
      className={`${todo.isComplete ? styles.todoCompleted : styles.todo}`}
      onClick={() => completeTodo(todo.id)}>
      </RiCheckDoubleFill>
      </p>
  })

  function inputChange(text, name) {
    setValue({id: generateId(), [name]: text, isComplete: false})
  }

  function addNewTodos() {
    setTodos([...todos, value])
    setValue({id: '', title: '', isComplete: false})
  }

  function remove(id) {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  function completeTodo(id) {
    setTodos(todos.map((todo) => {
      return todo.id === id 
      ? {...todo, isComplete: !todo.isComplete}
      : {...todo}
    }))
  }

  

  return (
    <div className="App">
      <input type="text"  value={value.title} onChange={(e) => inputChange(e.target.value, 'title')}  />
      <button onClick={addNewTodos} >add</button>
      <br />
      {result}
    </div>
  );
}

export default App;
