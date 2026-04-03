import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react'; 
import { Button } from '@/components/ui/button'; 

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem('theme') === 'dark' ||
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    setDarkMode(isDark);
    
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const toolCategories = {
    Languages: [
      'Javascript', 'Typescript', 'Python', 
    ],
    Frameworks: [
      'MERN', 'Next', 'FastAPI'
    ],
    ORM: [
      'Drizzle', 'Prisma'
    ],
    Design: [
      'Figma', 'Framer'
    ],
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-16 text-black dark:text-white relative">
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className="fixed top-4 right-4 rounded-full w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors z-50"
          >
            {darkMode ? <Sun className="h-4 w-4 sm:h-5 sm:w-5" /> : <Moon className="h-4 w-4 sm:h-5 sm:w-5" />}
          </Button>
        </motion.div>

        <motion.header 
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="mb-8 sm:mb-12"
        >
          <motion.h1 
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="text-xl sm:text-2xl mb-1"
          >
            Haider Ali
          </motion.h1>
        </motion.header>
        
        <motion.div 
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="mb-8 sm:mb-12 text-sm leading-relaxed space-y-3 sm:space-y-4 text-gray-700 dark:text-gray-300"
        >
          <p>
            I build across software, design, systems, and interfaces. I develop full-stack applications and focus on refining my craft through real projects.
          </p>
          <p>
            Currently exploring llms integrations.
          </p>
        </motion.div>
        
        <motion.section 
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="mb-8 sm:mb-12"
        >
          <h2 className="text-sm font-semibold mb-3 sm:mb-4">Projects</h2>
          <div className="space-y-2 sm:space-y-3 text-gray-500 dark:text-gray-400 text-sm">
            Check out Github
          </div>
        </motion.section>
        
        <motion.section 
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ delay: 0.8, duration: 0.4 }}
          className="mb-8 sm:mb-12"
        >
          <h2 className="text-sm font-semibold mb-3 sm:mb-4">Tools</h2>
          <div className="space-y-4 sm:space-y-3">
            {Object.entries(toolCategories).map(([category, items], idx) => (
              <motion.div 
                key={category} 
                className='flex flex-col sm:grid sm:grid-cols-[100px_1fr] gap-1 sm:gap-2 items-start'
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ delay: 0.8 + (idx * 0.05), duration: 0.4 }}
              >
                <h3 className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1 sm:mb-0 sm:pt-1">{category}</h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {items.map((tool, toolIdx) => (
                    <motion.span 
                      key={tool} 
                      className="text-[11px] sm:text-xs px-1.5 py-0.5 sm:px-2 sm:py-1 border border-gray-300 dark:border-gray-700 rounded text-gray-700 dark:text-gray-300"
                      initial={{ opacity: 0, filter: "blur(10px)" }}
                      animate={{ opacity: 1, filter: "blur(0px)" }}
                      transition={{ delay: 0.8 + (idx * 0.05) + (toolIdx * 0.02), duration: 0.3 }}
                    >
                      {tool}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
        
        <motion.footer 
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ delay: 0.9, duration: 0.4 }}
          className="text-xs text-gray-500 dark:text-gray-400 space-y-1"
        >
          <p className="flex flex-wrap justify-center sm:justify-start sm:gap-1.5">
            <a href="https://github.com/thehaiderali" className="hover:underline"> GitHub </a>
            <span className="hidden sm:inline"> · </span>
            <span className="sm:hidden">, </span>
            <a href="https://twitter.com/thehaderali" className="hover:underline">Twitter</a>
            <span className="hidden sm:inline"> · </span>
            <span className="sm:hidden">, </span>
            <a href="mailto:hyder6291@email.com" className="hover:underline">Email</a>
          </p>
        </motion.footer>
      </div>
    </div>
  );
}