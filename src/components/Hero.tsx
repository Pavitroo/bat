
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import CodeBlock from '@/components/CodeBlock';
import TypewriterText from '@/components/TypewriterText';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showCodeBlock, setShowCodeBlock] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setShowCodeBlock(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const codeSnippet = `// Convert BAT to EXE easily
#include <iostream>
#include <windows.h>

int main() {
    // Extract embedded batch script
    std::string batScript = 
        "echo Converting your batch files...\\n"
        "echo to professional executables!";
        
    // Execute with system resources
    system(batScript.c_str());
    
    return 0;
}`;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-bg -z-10"></div>
      
      {/* Floating shapes */}
      <div className="absolute top-1/4 left-1/5 w-24 h-24 rounded-full bg-white/10 animate-float"></div>
      <div className="absolute bottom-1/4 right-1/5 w-16 h-16 rounded-full bg-white/10 animate-float" style={{ animationDelay: "2s" }}></div>
      <div className="absolute top-2/3 left-1/3 w-12 h-12 rounded-full bg-white/10 animate-float" style={{ animationDelay: "3s" }}></div>
      
      <div className="max-w-6xl mx-auto w-full pt-20">
        <div className="grid md:grid-cols-2 gap-8">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center mb-4 space-x-2">
              <div className="px-3 py-1 rounded-full bg-bat2exe-dark text-white text-xs font-semibold">
                By Base2.0
              </div>
              <div className="px-3 py-1 rounded-full bg-white text-bat2exe-dark text-xs font-semibold">
                v1.0
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-bat2exe-dark mb-4">
              <TypewriterText 
                text="Transform BAT into" 
                className="block" 
                speed={40}
              />
              <TypewriterText 
                text="Professional EXE" 
                className="block" 
                speed={40} 
                onComplete={() => {}}
              />
            </h1>
            
            <p className="text-lg text-gray-700 mb-8 max-w-lg">
              Bat2Exe converts your batch scripts into standalone executables with custom icons and versioning information - simple, efficient, and professional.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#download">
                <Button className="bg-bat2exe-dark hover:bg-gray-800 text-white font-medium px-6 py-6 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download mr-2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                  Download Now
                </Button>
              </a>
              <a href="#features">
                <Button variant="outline" className="border-bat2exe-dark text-bat2exe-dark hover:bg-bat2exe-dark/5 font-medium px-6 py-6 rounded-lg">
                  Learn More
                </Button>
              </a>
            </div>
          </div>
          
          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {showCodeBlock && (
              <CodeBlock animate={false} className="shadow-xl">
                {codeSnippet}
              </CodeBlock>
            )}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#features" className="text-bat2exe-dark">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-down"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
