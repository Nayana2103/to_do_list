{/*import React from 'react'
import { FaTrash, FaPen } from 'react-icons/fa';

const Todo = ({task}) => {
  return (
    <div className='flex justify-between items-center w-full px-4 py-2 bg-pink-700  text-white'>
      <p className='font-medium'>{task.task}</p>
      <div className='flex gap-2 '>
        <FaPen/>
        <FaTrash/>
       </div>
    </div>
  )
}

export default Todo*/}
import React from 'react';
import { FaTrash, FaPen } from 'react-icons/fa';

const Todo = ({ task, deleteTodo, editTodo }) => {
  return (
    <div className="flex justify-between items-center w-full px-4 py-2 bg-pink-700 text-white rounded-lg shadow">
      <p className="font-medium">{task.task}</p>
      <div className="flex gap-2">
        <FaPen
          className="cursor-pointer hover:text-yellow-300"
          onClick={() => editTodo(task.id)}
        />
        <FaTrash
          className="cursor-pointer hover:text-red-300"
          onClick={() => deleteTodo(task.id)}
        />
      </div>
    </div>
  );
};

export default Todo;

