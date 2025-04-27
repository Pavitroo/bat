
import { useState, useEffect, useRef } from 'react';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  className?: string;
  onComplete?: () => void;
}

const TypewriterText = ({ 
  text, 
  speed = 50, 
  className = "",
  onComplete 
}: TypewriterTextProps) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (currentIndex < text.length && isTyping) {
      timeoutRef.current = window.setTimeout(() => {
        setDisplayText((prev) => prev + text.charAt(currentIndex));
        setCurrentIndex((prev) => prev + 1);
      }, speed);
    } else if (currentIndex >= text.length && isTyping) {
      setIsTyping(false);
      if (onComplete) onComplete();
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentIndex, text, speed, isTyping, onComplete]);

  return (
    <span className={`${className} ${isTyping ? "after:content-['|'] after:ml-0.5 after:animate-blink" : ""}`}>
      {displayText}
    </span>
  );
};

export default TypewriterText;
