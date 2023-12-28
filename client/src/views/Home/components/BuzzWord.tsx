import { useState } from "react";
import "./BuzzWord.css";

const buzzWords = ["change order", "add channel to", "add group to"];

function BuzzWord() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  setTimeout(() => {
    setCurrentWordIndex(
      currentWordIndex === buzzWords.length - 1 ? 0 : currentWordIndex + 1
    );
  }, 2000);

  return (
    <b className="text-primary animate-character">
      {buzzWords[currentWordIndex]}
    </b>
  );
}

export default BuzzWord;
