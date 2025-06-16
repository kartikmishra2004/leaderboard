"use client"

import { usePageTransition } from "./page-transition-provider"
import { motion, AnimatePresence } from "framer-motion"

export function PageLoadingOverlay() {
    const { isPending } = usePageTransition()

    return (
        <AnimatePresence>
            {isPending && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 bg-white/60 backdrop-blur-sm z-40 flex items-center justify-center"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 10 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: -10 }}
                        transition={{
                            duration: 0.3,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="flex items-center space-y-2 bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-lg"
                    >
                        <div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
