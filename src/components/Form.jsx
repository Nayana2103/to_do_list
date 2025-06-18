import React, { useState } from 'react';

const Form = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 w-full p-2 border border-gray-300 rounded-xl shadow-md bg-white">
      <input
        type="text"
        placeholder="New task"
        className="flex-grow px-2 py-1 border rounded"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && e.preventDefault()}
      />
      <button onClick={handleSubmit} type="submit" className="bg-pink-700 px-3 text-white font-medium rounded">
        Add
      </button>
    </form>
  );
};

export default Form;
