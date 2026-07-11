import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import GitHubContributionsSection from './Github';
import PageShell from './PageShell';

export default function Portfolio() {
  const toolCategories = {
    Languages: [
       'Typescript', 'Python', 
    ],
    Design: [
      'Figma', 'Framer'
    ],
  };

  return (
    <PageShell>
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
        
        </motion.div>
        
        <motion.section 
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="mb-8 sm:mb-12"
        >
          <h2 className="text-sm font-semibold mb-3 sm:mb-4">Playground</h2>
          <div className="space-y-2 sm:space-y-3 text-gray-500 dark:text-gray-400 text-sm">
            <p>Experiments, prototypes, and demos I&apos;m tinkering with.</p>
            <Link to="/playground" className="hover:underline">Coming soon</Link>
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
          <p className="flex flex-wrap justify-center sm:justify-start gap-1 sm:gap-1.5">
            <a href="https://github.com/thehaiderali" className="hover:underline"> GitHub </a>
            <span className="hidden sm:inline"> · </span>
            <span className="sm:hidden"> .  </span>
            <a href="https://twitter.com/thehaderali" className="hover:underline">Twitter</a>
            <span className="hidden sm:inline"> · </span>
            <span className="sm:hidden">  .  </span>
            <a href="mailto:hyder6291@email.com" className="hover:underline">Email</a>
          </p>
        </motion.footer>
       <motion.div 
       initial={{
        opacity:0
       }}
       animate={{
        opacity:1
       }}
       transition={{
        duration:1.5
       }}
       className='pt-10 -ml-27 w-auto'>
             <GitHubContributionsSection/>
       </motion.div>
    </PageShell>
  );
}
