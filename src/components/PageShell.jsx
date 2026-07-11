import { motion } from 'motion/react'
import { Moon, Sun } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { useDarkMode } from '../hooks/use-dark-mode'

export default function PageShell({ children }) {
  const { darkMode, toggleDarkMode } = useDarkMode()

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-16 text-black dark:text-white relative">
        <motion.div
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className="fixed top-4 right-4 rounded-full w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors z-50"
          >
            {darkMode ? (
              <Sun className="h-4 w-4 sm:h-5 sm:w-5" />
            ) : (
              <Moon className="h-4 w-4 sm:h-5 sm:w-5" />
            )}
          </Button>
        </motion.div>

        <motion.nav
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="mb-8 sm:mb-12 text-xs text-gray-500 dark:text-gray-400"
        >
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <span className="mx-1.5">·</span>
          <Link to="/playground" className="hover:underline">
            Playground
          </Link>
        </motion.nav>

        {children}
      </div>
    </div>
  )
}
