import { useEffect, useState } from "react";

const API_KEY = "40ec21b04e8fdc55cd7a2bf3ce756fd4";

function App() {
  const [city, setCity] = useState(() => {
    return localStorage.getItem("city") || "";
  });
  const [temp, setTemp] = useState(null);
  const [condition, setCondition] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!res.ok) throw new Error();

      const data = await res.json();
      setTemp(data.main.temp);
      setCondition(data.weather[0].main);
      localStorage.setItem("city", city);
    } catch {
      setError("City not found. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (city.trim() !== "") {
      fetchWeather();
    }
  }, []);

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-gradient-to-br from-blue-200 to-purple-300">
      <div className="w-[380px] bg-white rounded-2xl shadow-2xl p-6 space-y-5 transition-all">
        {/* Header */}
        <h1 className="text-2xl font-bold text-center text-gray-800">
          🌤 Weather App
        </h1>
        <p className="text-center text-gray-500 text-sm">
          Check real-time weather instantly
        </p>

        {/* Input */}
        <input
          className="w-full text-black px-4 py-2 rounded-lg border border-gray-300
                     focus:outline-none focus:ring-2 focus:ring-blue-400
                     transition"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && city.trim() && !loading) {
              fetchWeather();
            }
          }}
          placeholder="Enter city name"
        />

        {/* Button */}
        <button
          disabled={city.trim() === "" || loading}
          onClick={fetchWeather}
          className={`w-full py-2 rounded-lg font-semibold text-white transition
            ${
              loading || city.trim() === ""
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
        >
          {loading ? "Fetching weather..." : "Get Weather"}
        </button>

        {/* Error */}
        {error && (
          <p className="text-center text-red-500 font-medium">{error}</p>
        )}

        {/* Weather Result */}
        {!loading && temp !== null && !error && (
          <div className="text-center bg-gray-100 rounded-xl p-4 space-y-1">
            <p className="text-xl font-bold text-gray-800">{city}</p>
            <p className="text-3xl font-extrabold text-blue-600">{temp}°C</p>
            <p className="text-gray-600 font-medium">{condition}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
