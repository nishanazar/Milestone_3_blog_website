"use client"

import { useState } from "react"
const CountBtn = () => {

const [count, setCount ]  = useState(0)

function handler (){
      setCount(count -1)
}
    
function handler2 (){
setCount(count +1)
}

return (
<div className="flex items-center">
<button className="px-3 py-1 bg-gray-300 text-gray-800 rounded-l hover:bg-gray-400" onClick={handler}>-</button>
<span className="px-4 py-1 border text-gray-800">{count}</span>
<button className="px-3 py-1 bg-gray-300 text-gray-800 rounded-r hover:bg-gray-400" onClick={handler2}>+</button>
</div> 
)
}

export default CountBtn