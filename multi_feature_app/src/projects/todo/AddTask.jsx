import React from 'react'

const AddTask = ({text,setText,addTask}) => {
  return (
    <div className="h-20 w-full bg-orange-50 flex items-center justify-center">
      <input
        className="border-black h-8 bg-gray-300 text-black px-2"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if(e.key === 'Enter')addTask();
        }}
        placeholder="Enter Task"
      />

      <button
  onClick={addTask}
  disabled={!text.trim()}
  className={`w-20 mx-8 h-8 font-bold border-black rounded transition duration-150
    ${text.trim()
      ? "bg-yellow-600 hover:bg-yellow-800 hover:text-white"
      : "bg-gray-400 cursor-not-allowed"}
  `}
    >
      Add Task
    </button>

    </div>
  )
}

export default AddTask