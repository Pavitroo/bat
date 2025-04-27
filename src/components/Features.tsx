
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const FeatureCard = ({ title, description, icon, delay = 0 }: FeatureCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div 
      ref={cardRef} 
      className={cn(
        "card-gradient backdrop-blur-sm rounded-xl p-6 shadow-lg transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
    >
      <div className="h-12 w-12 bg-bat2exe-dark rounded-lg flex items-center justify-center text-white mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-bat2exe-dark mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features = () => {
  return (
    <section id="features" className="relative py-20 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-bat2exe-yellow/30 to-white -z-10"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-bat2exe-dark mb-4">Powerful Features</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Bat2Exe offers a comprehensive set of features to convert your batch files into professional executables.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            title="Custom Icons"
            description="Add your own .ico files to give your executables a professional look and brand identity."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"></path><path d="M7 7h.01"></path></svg>
            }
            delay={0}
          />
          
          <FeatureCard
            title="Version Information"
            description="Set product name, version, company details and other metadata for your executable files."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect><path d="M12 18h.01"></path><path d="M8 6h8"></path><path d="M8 10h8"></path><path d="M8 14h4"></path></svg>
            }
            delay={200}
          />
          
          <FeatureCard
            title="Secure Packaging"
            description="Protect your batch file contents by encapsulating them within a compiled C++ executable."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="16" x="3" y="4" rx="2"></rect><path d="M7 8h10"></path><path d="M7 12h10"></path><path d="M7 16h10"></path></svg>
            }
            delay={400}
          />
          
          <FeatureCard
            title="Hide Console Window"
            description="Option to hide the console window for a more polished user experience when running your executable."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 8 4-4 4 4"></path><path d="M7 4v16"></path><path d="m21 8-4-4-4 4"></path><path d="M17 4v16"></path></svg>
            }
            delay={200}
          />
          
          <FeatureCard
            title="Resource Management"
            description="Automatically manages resources like temporary files during the batch to executable conversion."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 9a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h.09A4 4 0 0 1 7 0h10a4 4 0 0 1 2.91 2H20a4 4 0 0 1 4 4v3Z"></path><path d="M10.7 12v10l4.8-5.6L10.7 22V12Z"></path></svg>
            }
            delay={400}
          />
          
          <FeatureCard
            title="User-friendly Interface"
            description="Simple command-line interface with helpful prompts makes the conversion process quick and easy."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><circle cx="10" cy="13" r="2"></circle><path d="m20 17-2-2-2 2"></path><path d="m14 17-1.9-1.9"></path></svg>
            }
            delay={600}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
