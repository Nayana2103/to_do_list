import React,{useState} from 'react'
const Form = ({addTodo}) => {

  const[value,setValue]=useState("");
  const handleSubmit = e =>{
    e.preventDefault();
    addTodo(value);
    setValue("");
  }
  return (
    <form  className='flex gap-2 w-full p-2 border border-gray-300 rounded-xl shadow-md bg-white' onSubmit={handleSubmit}>
        <input type='text' className="flex-grow px-2 py-1 border rounded" placeholder='new task' value={value} onChange={(e)=> setValue(e.target.value)}></input>
        <button type='submit' className='bg-pink-700 w-[48px] text-white font-medium rounded'>Add</button>
    </form>
      
      
    
  )
}

export default Form
