import React from 'react';
import { FaTrash, FaPen } from 'react-icons/fa';

const Todo = ({ task, deleteTodo, editTodo, index }) => {
  return (
    <div className="flex justify-between items-center w-full px-4 py-2 border rounded-lg shadow">
      <p className="font-medium">{task.task}</p>
      <div className="flex gap-2 text-white">
        <FaPen className="cursor-pointer bg-pink-700 w-full h-full p-1 hover:text-yellow-300" onClick={() => editTodo(index)} />
        <FaTrash className="cursor-pointer  bg-pink-700 w-full h-full p-1 hover:text-red-300" onClick={() => deleteTodo(index)} />
      </div>
    </div>
  );
};

export default Todo;
