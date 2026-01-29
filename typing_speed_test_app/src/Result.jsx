import React from 'react'

const Result = ({wpm,accuracy}) => {
  return (
    <div className="text-center text-2xl font-bold text-green-600 flex items-center justify-evenly">
        <h1>WPM: {wpm}</h1>
        <h1>ACCURACY : {accuracy}%</h1>
    </div>
  )
}

export default Result