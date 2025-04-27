
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import CodeBlock from './CodeBlock';

interface StepProps {
  number: number;
  title: string;
  description: string;
  code?: string;
  isVisible: boolean;
  delay?: number;
}

const Step = ({ number, title, description, code, isVisible, delay = 0 }: StepProps) => {
  const [showStep, setShowStep] = useState(false);
  
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setShowStep(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, delay]);

  return (
    <div className={cn(
      "flex flex-col md:flex-row gap-6 transition-all duration-700",
      showStep ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    )}>
      <div className="flex-shrink-0">
        <div className="w-12 h-12 rounded-full bg-bat2exe-dark text-white flex items-center justify-center text-xl font-bold">
          {number}
        </div>
      </div>
      <div className="flex-grow">
        <h3 className="text-xl font-bold text-bat2exe-dark mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        {code && (
          <CodeBlock animate className="max-w-2xl" delay={delay + 200}>
            {code}
          </CodeBlock>
        )}
      </div>
    </div>
  );
};

const HowItWorks = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      number: 1,
      title: "Select Your Batch File",
      description: "Start by selecting the .bat file you want to convert into an executable.",
      code: "Enter the path to the .bat file: C:\\scripts\\myscript.bat"
    },
    {
      number: 2,
      title: "Configure Output Options",
      description: "Specify where to save the executable and choose an icon (optional).",
      code: "Enter the output .exe path [myscript.exe]: C:\\build\\myscript.exe\nEnter the path to an icon file (.ico): C:\\assets\\icon.ico"
    },
    {
      number: 3,
      title: "Add Metadata (Optional)",
      description: "Add professional version information to your executable.",
      code: "Company Name: Base2.0\nFile Description: Database Maintenance Tool\nFile Version: 1.0.0.0\nProduct Name: Admin Tools Suite"
    },
    {
      number: 4,
      title: "Convert & Build",
      description: "Bat2Exe processes your batch file, embeds it in a C++ wrapper and compiles it.",
      code: "Creating executable...\nConversion completed successfully!\nExecutable created at: C:\\build\\myscript.exe"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 bg-gradient-to-b from-white to-bat2exe-pink/10" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-bat2exe-dark mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Converting your batch files to executables is straightforward with Bat2Exe. Follow these simple steps:
          </p>
        </div>
        
        <div className="space-y-12 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <Step
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              code={step.code}
              isVisible={isVisible}
              delay={index * 300}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
