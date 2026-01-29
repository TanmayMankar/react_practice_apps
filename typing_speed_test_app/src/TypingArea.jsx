import React from 'react'

const TypingArea = ({text,handleChange,disabled}) => {
  return (
    <textarea
        className="w-full h-32 p-3 border rounded resize-none
                    focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Start typing to begin the test..."
        value={text}
        onChange={handleChange}
        disabled={disabled}
    />
  )
}

export default TypingArea