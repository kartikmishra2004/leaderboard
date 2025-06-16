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
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 flex items-center justify-center"
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.8, opacity: 0, y: -20 }}
                        transition={{
                            duration: 0.6,
                            delay: 0.3,
                            ease: "easeOut",
                        }}
                        className="flex flex-col items-center space-y-4 bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-2xl"
                    >
                        <div className="relative">
                            <div className="w-12 h-12 border-4 border-gray-200 rounded-full" />
                            <div className="absolute top-0 left-0 w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
                        </div>
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-gray-700 font-medium text-lg"
                        >
                            Transitioning...
                        </motion.span>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
