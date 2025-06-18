import React, { useState } from 'react';

const EditTodo = ({ task, index, updateTask }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTask(index, value);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 w-full p-2 border border-gray-300 rounded-xl shadow-md bg-white">
      <input
        type="text"
        className="flex-grow px-2 py-1 border rounded"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleSubmit} type="submit" className="bg-yellow-500 px-3 text-white rounded">
        Update
      </button>
    </form>
  );
};

export default EditTodo;

