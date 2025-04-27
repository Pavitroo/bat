
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Download = () => {
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

  return (
    <section id="download" className="py-20 px-4" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div className="card-gradient rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8 md:p-12">
            <div className={cn(
              "transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}>
              <div className="flex flex-col md:flex-row md:items-center gap-6 justify-between">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-bat2exe-dark mb-4">Ready to transform your batch files?</h2>
                  <p className="text-gray-600 mb-6 max-w-xl">
                    Download Bat2Exe now and start converting your batch scripts into professional executables with custom icons and versioning.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mb-8">
                    <a 
                      href="https://github.com/Pavitroo/Bat2Exe/releases/download/1.0/Bat2Exe.exe" 
                      className="flex items-center bg-bat2exe-dark hover:bg-gray-800 text-white font-medium px-6 py-3 rounded-lg transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download mr-2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                      Download for Windows
                    </a>
                    
                    <a 
                      href="https://www.virustotal.com/gui/file/01ed2fb874e14287cf88f460a49822cf5b571339466149ad29ea33354c7b55dc/detection"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center border border-bat2exe-dark text-bat2exe-dark hover:bg-bat2exe-dark/5 font-medium px-6 py-3 rounded-lg transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check mr-2"><path d="M20 13c0 5-3.5 7.5-8 9.5-4.5-2-8-4.5-8-9.5V6.75c0-1.2.5-2 1.5-2.5l6.5-3.25 6.5 3.25c1 .5 1.5 1.3 1.5 2.5z"/><path d="m9 12 2 2 4-4"/></svg>
                      VirusTotal Scan
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-info"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                    <span>Windows 7 or later - 64-bit recommended</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-center">
                  <img 
                    src="public/lovable-uploads/1f679795-9905-4bfe-a5b4-97273d30a3c8.png" 
                    alt="Bat2Exe" 
                    className="w-32 h-32 object-contain animate-float"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className={cn(
          "mt-16 text-center max-w-2xl mx-auto transition-all duration-700 delay-300",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <h3 className="text-2xl font-bold text-bat2exe-dark mb-4">System Requirements</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <li className="flex items-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-green-600 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
              <span>Windows 7, 8, 10, or 11</span>
            </li>
            <li className="flex items-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-green-600 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
              <span>g++ compiler (MinGW) or similar</span>
            </li>
            <li className="flex items-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-green-600 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
              <span>Minimum 1GHz CPU</span>
            </li>
            <li className="flex items-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-green-600 mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
              <span>At least 512MB RAM</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Download;
