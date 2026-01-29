import { Routes, Route, Link } from "react-router-dom";
import Weather from "./projects/Weather";
import Todo from "./projects/todo/Todo";
import Api from "./projects/Api"
import Typing from "./projects/typing_speed_test_app/Typing"
function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <div className="flex flex-col items-center gap-6">
              <h1 className="text-4xl font-bold">🚀 My React Projects</h1>
              <p className="text-gray-300">Choose a project to open</p>

              <div className="grid grid-cols-2 gap-4">
                <Link
                  to="/weather"
                  className="bg-gray-700 hover:bg-gray-600 p-4 rounded-lg w-48 text-center"
                >
                  Weather App
                </Link>
                <Link
                  to="/todo"
                  className="bg-gray-700 hover:bg-gray-600 p-4 rounded-lg w-48 text-center"
                >
                  Todo App
                </Link>
                <Link
                  to="/api"
                  className="bg-gray-700 hover:bg-gray-600 p-4 rounded-lg w-48 text-center"
                >
                  API App
                </Link>
                <Link
                  to="/typing"
                  className="bg-gray-700 hover:bg-gray-600 p-4 rounded-lg w-48 text-center"
                >
                  Typing speed test
                </Link>
              </div>
            </div>
          }
        />

        {/* WEATHER PAGE */}
        <Route path="/weather" element={<Weather />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/api" element={<Api />} />
        <Route path="/typing" element={<Typing />} />
      </Routes>
    </div>
  );
}

export default App;
