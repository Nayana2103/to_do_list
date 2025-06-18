import React, { useState } from 'react';

const EditTodo = ({ task, updateTask }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === '') return;
    updateTask(task.id, value);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 p-2 bg-gray-100 rounded-lg w-full">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="flex-grow px-2 py-1 border border-gray-300 rounded"
      />
      <button type="submit" className="bg-green-600 text-white px-3 rounded">
        Save
      </button>
    </form>
  );
};

export default EditTodo;
