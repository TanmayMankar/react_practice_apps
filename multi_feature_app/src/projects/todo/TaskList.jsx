import React from 'react'

const TaskList = ({ tasks, deleteTask, toggleComplete }) => {
  return (
    <div className="max-h-64 overflow-y-auto p-4 space-y-3">

      {tasks.length === 0 && (
        <p className="text-center text-gray-400">
          No tasks yet
        </p>
      )}

      {tasks.map((task) => (
        <div
          key={task.id}
          className="flex items-center justify-between bg-gray-800 text-white px-3 py-2 rounded"
        >
          <p
            className={`truncate max-w-[160px] ${
              task.completed ? "line-through text-gray-400" : ""
            }`}
          >
            {task.text}
          </p>

          <div className="flex gap-2">
            <button
              onClick={() => toggleComplete(task.id)}
              className="bg-green-500 hover:bg-green-600 px-2 rounded text-sm"
            >
              ✓
            </button>

            <button
              onClick={() => deleteTask(task.id)}
              className="bg-red-500 hover:bg-red-600 px-2 rounded text-sm"
            >
              ✕
            </button>
          </div>
        </div>
      ))}

    </div>
  );
};

export default TaskList;
