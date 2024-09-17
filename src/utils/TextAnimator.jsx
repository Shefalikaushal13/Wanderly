import React, { useState, useEffect } from 'react';

const TextAnimator = () => {
  const texts = [
    "Hello' Wanderers!",
    "Namaste' Wanderers!",
    "Bonjour' Wanderers!",
    "Hola' Wanderers!",
    "Guten Tag' Wanderers!",
    "Nǐn hǎo' Wanderers!",
    "Hej' Wanderers!",
    "Geia' Wanderers!"
  ];

  const [currentText, setCurrentText] = useState("");
  const [endValue, setEndValue] = useState(0);
  const [isForward, setIsForward] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isForward) {
        setEndValue(prev => prev + 1);
      } else {
        setEndValue(prev => prev - 1);
      }

      if (endValue > texts[index].length) {
        setIsForward(false);
      }
      if (endValue < 0) {
        setIsForward(true);
        setIndex(prev => (prev + 1) % texts.length);
      }
    }, 50);

    setCurrentText(texts[index].substring(0, endValue));

    return () => clearInterval(intervalId);
  }, [endValue, isForward, index, texts]);

  return (
    <div
      className="transition ease duration-200 overflow-hidden"
      style={{
        width: '500px',  // Set fixed width
        height: '40px',  // Set fixed height (adjust as needed)
        lineHeight: '40px' // Align text vertically (optional)
      }}
    >
      {currentText}
    </div>
  );
};

export default TextAnimator;
