"use client"
import React from 'react';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Trash2 } from 'lucide-react';
import { nanoid } from 'nanoid'
import { useRef, useState } from "react"

interface ITask {
  title: string;
  id: string;
}

const Home = () => {
const [comments, setComments] = useState<{title: string, id:string}[]>([]);
const inputReference = useRef<HTMLInputElement>(null);

const handleAddTask =()=> {
const inputValue = inputReference?.current?.value as string;
if(!inputValue){
      toast.warn('please enter your task', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
      return;
}
    setComments([{title: inputValue, id: nanoid()}, ...comments]);
    toast.success('Comments Added successfully', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
});

    if(inputReference.current){
      inputReference.current.value = "";
    }

    
  };

  function deleteTask(e:string){
    setComments(comments.filter((elem)=>elem.id !== e))
    toast.error('Comments Deleted!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
      });  

  }

  const handleKeyDown = (my_key: {key: string})=> {
     if(my_key.key === "Enter"){
      handleAddTask()
     }

  }
 
return (
<>
<div className="max-w-2xl mx-auto mt-10 p-4">
<h1 className="text-2xl font-bold mb-6 text-center">Comment Section</h1>
{/* Comment Input Form */}
<div className='flex flex-col space-y-4'>
<input 
ref={inputReference} 
onKeyDown={handleKeyDown}
placeholder="Write your comment..."  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/> 
<button onClick={handleAddTask}    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600" >Submit </button>
</div>
</div>
{/* Comments List */}
<div className='mt-6 space-y-4'>
{comments.length === 0 ? (
<h1 className='p-4'></h1>
 ) : (
comments.map((elem, index) => {
return (
<ul key={index} className="py-3 px-4 bg-gray-100 rounded-md shadow-md border max-w-2xl mx-auto mt-4 flex justify-between items-center mb-8">
<span className="text-gray-700 font-medium">{elem.title}</span>
<button  onClick={() => {
deleteTask(elem.id);
  }} className="flex items-center justify-center bg-red-100 hover:bg-red-200 text-red-600 p-2 sm:p-3 lg:p-4 rounded-full text-sm sm:text-base md:text-lg">
<Trash2 color="#e20808" strokeWidth={2.75} />
</button>
</ul>
 );
})
)}
</div>
<ToastContainer />
</>
)
}
export default Home


