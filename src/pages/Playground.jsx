import { motion } from 'motion/react'
import PageShell from '../components/PageShell'

export default function Playground() {
  return (
    <PageShell>
      <motion.header
        initial={{ opacity: 0, filter: 'blur(10px)' }}
        animate={{ opacity: 1, filter: 'blur(0px)' }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="mb-8 sm:mb-12"
      >
        <h1 className="text-xl sm:text-2xl mb-1">Playground</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mt-2">
          Experiments, prototypes, and demos I&apos;m tinkering with.
        </p>
      </motion.header>

      <motion.div
        initial={{ opacity: 0, filter: 'blur(10px)' }}
        animate={{ opacity: 1, filter: 'blur(0px)' }}
        transition={{ delay: 0.6, duration: 0.4 }}
        className="border border-gray-200 dark:border-gray-800 rounded px-4 py-12 sm:py-16 text-center"
      >
        <p className="text-sm text-gray-500 dark:text-gray-400">Coming soon</p>
      </motion.div>
    </PageShell>
  )
}
