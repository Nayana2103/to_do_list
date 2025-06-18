{/*import React, { useState,useEffect} from 'react'
import Form from './Form'
import {v4 as uuidv4} from 'uuid'
uuidv4();
import Todo from './Todo'

const Card = () => {

 const[todos,setTodos]=useState([])
 const addTodo= todo=>{
    setTodos([...todos, {id:uuidv4(), task: todo, completed: false, isEditing:false}])
    
  }
  useEffect(() => {
    console.log('Todos updated:', todos);
  }, [todos]);

  return (
    <div className='bg-white  flex flex-col gap-y-2 justify-start items-center w-[360px] h-[360px]  shadow-2xl rounded-3xl p-4'>
      <h1 className='font-extrabold text-lg'>To-Do-List</h1>
      <Form addTodo={addTodo}/>
      {todos.map((todo,index)=>(
          <Todo task={todo} key={index}/>
      ))}
     
    </div>
  )
}

export default Card;*/}
import React, { useState, useEffect } from 'react';
import Form from './Form';
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo';
import EditTodo from './EditTodo';
const Card = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (task) => {
    if (task.trim() === '') return;
    setTodos([...todos, { id: uuidv4(), task, completed: false, isEditing: false }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const updateTask = (id, newTask) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task: newTask, isEditing: false } : todo
      )
    );
  };

  useEffect(() => {
    console.log('Todos updated:', todos);
  }, [todos]);

  return (
    <div className="bg-white flex flex-col gap-y-2 justify-start items-center w-[360px] min-h-[400px] shadow-2xl rounded-3xl p-4">
      <h1 className="font-extrabold text-lg">To-Do List</h1>
      <Form addTodo={addTodo} />
      <div className="w-full flex flex-col gap-2">
        {todos.map((todo) =>
          todo.isEditing ? (
            <EditTodo key={todo.id} task={todo} updateTask={updateTask} />
          ) : (
            <Todo
              key={todo.id}
              task={todo}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Card;

