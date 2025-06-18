import React, { useState, useEffect } from 'react';
import Form from './Form';
import Todo from './Todo';
import EditTodo from './EditTodo';
const Card = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (task) => {
    setTodos([...todos, { task, completed: false, isEditing: false }]);
  };

  const deleteTodo = (indexToDelete) => {
    setTodos(todos.filter((_, index) => index !== indexToDelete));
  };

  const editTodo = (indexToEdit) => {
    setTodos(
      todos.map((todo, index) =>
        index === indexToEdit ? { ...todo, isEditing: true } : todo
      )
    );
  };

  const updateTask = (indexToUpdate, newTask) => {
    setTodos(
      todos.map((todo, index) =>
        index === indexToUpdate
          ? { ...todo, task: newTask, isEditing: false }
          : todo
      )
    );
  };

  useEffect(() => {
    console.log('Todos updated:', todos);
  }, [todos]);

  return (
    <div className="bg-white flex flex-col gap-y-2 justify-start items-center w-[360px] min-h-[400px] shadow-2xl rounded-3xl p-4">
      <h1 className="font-extrabold text-lg">To-Do List</h1>
      <div className="w-full px-2">
        <Form addTodo={addTodo} />
      </div>
      <div className="w-full px-2 flex flex-col gap-2">
        {todos.map((todo, index) =>
          todo.isEditing ? (
            <EditTodo key={index} task={todo} index={index} updateTask={updateTask} />
          ) : (
            <Todo key={index} task={todo} index={index} deleteTodo={deleteTodo} editTodo={editTodo} />
          )
        )}
      </div>
    </div>
  );
};

export default Card;


