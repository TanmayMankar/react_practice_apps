import { useEffect, useState } from "react";
import Header from "./Header";
import TargetText from "./TargetText";
import Stats from "./Stats";
import Result from "./Result";
import TypingArea from "./TypingArea";
const TEST_DURATION = 60; // seconds

const PARAGRAPHS = [
  "Learning to type faster is not about rushing your fingers across the keyboard. It is about building muscle memory, maintaining focus, and practicing consistently over time. When you type slowly and accurately, your speed naturally improves. Many people make the mistake of prioritizing speed over correctness, which leads to bad habits. A good typing practice session focuses on accuracy first and speed later. Sitting in a comfortable position and keeping your hands relaxed also plays an important role in improving typing performance.",

  "Programming is a skill that improves with deliberate practice and patience. Writing code every day, even for a short amount of time, helps reinforce concepts and builds confidence. Beginners often feel overwhelmed by the number of technologies available, but focusing on fundamentals leads to long-term success. Clean code, clear logic, and proper naming conventions are more important than knowing many tools. As you gain experience, solving problems becomes more intuitive and enjoyable.",

  "Consistency is more powerful than intensity when learning any new skill. Studying for a few hours once a week is less effective than studying for a short time every day. Regular practice keeps your mind engaged and prevents forgetting what you learned earlier. This principle applies to typing, programming, fitness, and many other areas. Small daily improvements compound over time and lead to meaningful progress without causing burnout or frustration.",

  "React is a popular JavaScript library used to build interactive user interfaces. It allows developers to create reusable components that manage their own state. Instead of manipulating the user interface directly, React updates the view automatically when data changes. This declarative approach makes applications easier to understand and maintain. Learning React requires a shift in thinking, but once the core concepts are clear, building complex applications becomes much more manageable.",

  "Clean code is written with the reader in mind, not just the computer. A program may work correctly, but if it is difficult to read or understand, it becomes hard to maintain. Good variable names, clear function boundaries, and simple logic make a huge difference. Developers often revisit their own code after months, and readable code saves time and effort. Writing clean code is a habit that develops with experience and conscious practice."
];

const getRandomParagraph = () => {
    const index = Math.floor(Math.random() * PARAGRAPHS.length);
    return PARAGRAPHS[index]
  };
function Typing() {
  /* ------------------ STATE ------------------ */
  const [text, setText] = useState("");
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [targetText,setTargetText] = useState(() => {return getRandomParagraph()});

  /* ------------------ TIMER ------------------ */
  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  /* Stop test after 60 seconds */
  useEffect(() => {
    if (time >= TEST_DURATION) {
      setIsRunning(false);
    }
  }, [time]);

  /* ------------------ DERIVED VALUES ------------------ */

  const charCount = text.replace(/\s/g, "").length;
  const wordCount = text.trim() === "" ? 0 : text.split(/\s+/).length;
  const targetWords = targetText.split(/\s+/);
  const typedWords = text.split(/\s+/);

  /* ------------------ HANDLERS ------------------ */
  const handleChange = (e) => {
    if (!isRunning) setIsRunning(true);
    setText(e.target.value);
  };

  const handleReset = () => {
    setText("");
    setTime(0);
    setIsRunning(false);
    setTargetText(getRandomParagraph());
  };

  let correctWords = 0;
for (
  let i = 0;
  i < typedWords.length && i < targetWords.length;
  i++
) {
  if (typedWords[i] === targetWords[i]) {
    correctWords++;
  }
}

const accuracy =
  typedWords.length === 0
    ? 0
    : Math.round((correctWords / typedWords.length) * 100);

const wpm = time >= TEST_DURATION ? correctWords : 0;


  /* ------------------ UI ------------------ */
  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-gray-300">
      <div className="w-[600px] bg-white rounded-xl shadow-lg p-6 space-y-6">

        <Header />

        <TargetText 
          targetWords={targetWords}
          typedWords={typedWords}
        ></TargetText>

        <TypingArea
          text={text}
          handleChange={handleChange}
          disabled={time >= TEST_DURATION}
        ></TypingArea>

        <Stats
          charCount={charCount}
          wordCount={wordCount}
          time={time}
        ></Stats>

        {time >= TEST_DURATION && (
          <Result
            wpm={wpm}
            accuracy={accuracy}
          ></Result>
        )}

        <button
          onClick={handleReset}
          className="w-full py-2 rounded-lg font-semibold
                     bg-orange-400 hover:bg-orange-500 transition"
        >
          Reset Test
        </button>

      </div>
    </div>
  );
}

export default Typing;
