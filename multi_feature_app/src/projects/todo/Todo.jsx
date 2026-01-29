
import Header from "./Header"
import AddTask from './AddTask';
import TaskList from './TaskList';
import { useEffect, useState } from "react";

function Todo() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const MAX_TASKS = 5;

  // Load from localStorage
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) setTasks(savedTasks);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const clearCompleted = () => {
    setTasks(tasks.filter((task) => !task.completed));
  }


  const filteredTasks = tasks.filter(task => {
  if (filter === "completed") return task.completed;
  if (filter === "pending") return !task.completed;
  return true; // "all"
});

  const addTask = () => {
    if (!text.trim()) return;

    if (tasks.length === MAX_TASKS) return;

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text: text.toUpperCase(),
        completed: false,
      },
    ]);

    setText("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  return (
    <div className="min-h-screen w-screen bg-slate-300 flex items-center justify-center">
      <div className="w-[360px] bg-white rounded-xl shadow-lg overflow-hidden">

        {/* Header */}
        <Header title = "My Todo App"></Header>

        {/* Input */}
        <AddTask
          text = {text}
          setText = {setText}
          addTask = {addTask}
        ></AddTask>

        {/* Task Limit Info */}
        {tasks.length === MAX_TASKS && (
          <p className="text-red-500 text-center text-sm py-1">
            Task limit reached (5)
          </p>
        )}

        {tasks.some(task => task.completed) && (
          <button onClick={clearCompleted} className='border border-black w-32 rounded bg-green-400 text-black font-bold m-4 h-8'>
            ClearCompleted
          </button>
        
        )}
        <div className="flex justify-center gap-2 my-2">
          <button
            onClick={() => setFilter("all")}
            className="px-3 py-1 bg-gray-300 rounded"
          >
            All
          </button>

          <button
            onClick={() => setFilter("completed")}
            className="px-3 py-1 bg-gray-300 rounded"
          >
            Completed
          </button>

          <button
            onClick={() => setFilter("pending")}
            className="px-3 py-1 bg-gray-300 rounded"
          >
            Pending
          </button>
        </div>

        {/* Task List */}
        <TaskList
          tasks = {filteredTasks}
          deleteTask = {deleteTask}
          toggleComplete = {toggleComplete}
        ></TaskList>
      
      </div>
    </div>
  );
}

export default Todo;






