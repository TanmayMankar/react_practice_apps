import React from 'react'

const Stats = ({time,charCount,wordCount}) => {
  return (
    <div className="flex justify-between text-lg font-semibold">
        <p>Time: {time}s</p>
        <p>Characters: {charCount}</p>
        <p>Words: {wordCount}</p>
    </div>
  )
}

export default Stats