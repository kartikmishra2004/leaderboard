"use client"

import type React from "react"

import { createContext, useContext, useTransition } from "react"
import { AnimatePresence, motion } from "framer-motion"

interface PageTransitionContextType {
    isPending: boolean
    startTransition: (callback: () => void) => void
}

const PageTransitionContext = createContext<PageTransitionContextType | null>(null)

export function PageTransitionProvider({ children }: { children: React.ReactNode }) {
    const [isPending, startTransition] = useTransition()

    const handleStartTransition = (callback: () => void) => {
        startTransition(callback)
    }

    return (
        <PageTransitionContext.Provider
            value={{
                isPending,
                startTransition: handleStartTransition,
            }}
        >
            {/* Content with slide-up transition only */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={isPending ? "loading" : "content"}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{
                        duration: 0.3,
                        ease: [0.22, 1, 0.36, 1], // Smooth cubic-bezier curve
                    }}
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </PageTransitionContext.Provider>
    )
}

export function usePageTransition() {
    const context = useContext(PageTransitionContext)
    if (!context) {
        throw new Error("usePageTransition must be used within PageTransitionProvider")
    }
    return context
}
