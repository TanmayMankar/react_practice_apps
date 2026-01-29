

import { useEffect, useState } from "react";

function Api() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const fetch_quote = () => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      });
  };
  useEffect(() => {
    fetch_quote();
  }, []);

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-gray-200">
      <div className="w-[500px] bg-white p-6 rounded-xl shadow-lg text-center space-y-4">
        <h1 className="text-2xl font-bold">Random Quote</h1>

        <p className="text-lg italic text-black">“{quote}”</p>

        <p className="text-gray-600 font-semibold">— {author}</p>

        <button
          onClick={() => fetch_quote()}
          className="text-xl w-32 font-semibold rounded-lg text-black bg-gray-200 hover:bg-gray-400 h-10"
        >
          New Quote
        </button>
      </div>
    </div>
  );
}

export default Api;
