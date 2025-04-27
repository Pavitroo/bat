
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-bat2exe-dark text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 bg-gradient-to-r from-bat2exe-yellow to-bat2exe-pink rounded-md flex items-center justify-center">
                <span className="font-bold text-bat2exe-dark text-sm">EXE</span>
              </div>
              <span className="font-bold text-lg text-white">Bat2Exe</span>
            </div>
            <p className="text-gray-300 mb-4">
              Convert batch scripts to professional executables with custom icons and versioning information.
            </p>
            <p className="text-gray-400 text-sm">
              Copyright © {currentYear} Base2.0. All rights reserved.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#download" className="text-gray-300 hover:text-white transition-colors">Download</a>
              </li>
              <li>
                <a 
                  href="https://www.virustotal.com/gui/file/01ed2fb874e14287cf88f460a49822cf5b571339466149ad29ea33354c7b55dc/detection"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  VirusTotal
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Security</h3>
            <p className="text-gray-300 mb-4">
              Bat2Exe has been scanned with VirusTotal to ensure it's safe to use.
            </p>
            <a 
              href="https://www.virustotal.com/gui/file/01ed2fb874e14287cf88f460a49822cf5b571339466149ad29ea33354c7b55dc/detection"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-bat2exe-yellow hover:underline"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link mr-1"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
              View Scan Results
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>Bat2Exe is a utility for converting batch files to executables. Use responsibly.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
