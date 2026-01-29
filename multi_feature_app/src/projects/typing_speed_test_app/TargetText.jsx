import React from 'react'

const TargetText = ({targetWords,typedWords}) => {
  return (
    <div className="bg-gray-100 rounded-lg p-4 leading-relaxed flex flex-wrap">
          {targetWords.map((word, index) => {
            let color = "text-gray-500";

            if (typedWords[index]) {
              if (typedWords[index] === word) {
                color = "text-green-600";
              } else {
                color = "text-red-600";
              }
            }

            return (
              <span key={index} className={`${color} mr-1 font-semibold`}>
                {word}
              </span>
            );
          })}
        </div>
  )
}

export default TargetText