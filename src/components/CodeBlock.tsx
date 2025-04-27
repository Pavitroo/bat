
import { useState, useEffect, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CodeBlockProps {
  children: ReactNode;
  language?: string;
  animate?: boolean;
  className?: string;
  delay?: number;
}

const CodeBlock = ({ 
  children, 
  language = "cpp", 
  animate = true,
  className = "",
  delay = 0
}: CodeBlockProps) => {
  const [isVisible, setIsVisible] = useState(!animate);

  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [animate, delay]);

  return (
    <div 
      className={cn(
        "rounded-lg bg-bat2exe-dark p-4 font-code text-bat2exe-light overflow-auto transition-all duration-500",
        animate && isVisible ? "opacity-100" : "opacity-0 translate-y-4",
        className
      )}
    >
      <div className="flex gap-1.5 mb-3">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <pre className="text-sm md:text-base whitespace-pre-wrap">
        <code>
          {children}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;
