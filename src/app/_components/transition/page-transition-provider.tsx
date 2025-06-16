"use client"

import type React from "react"

import { createContext, useContext, useState, useTransition } from "react"
import { AnimatePresence, motion } from "framer-motion"

interface PageTransitionContextType {
    isPending: boolean
    startTransition: (callback: () => void) => void
}

const PageTransitionContext = createContext<PageTransitionContextType | null>(null)

export function PageTransitionProvider({ children }: { children: React.ReactNode }) {
    const [isPending, startTransition] = useTransition()
    const [isNavigating, setIsNavigating] = useState(false)
    const [showBlackout, setShowBlackout] = useState(false)

    const handleStartTransition = (callback: () => void) => {
        setIsNavigating(true)
        setShowBlackout(true)

        // Start blackout immediately
        setTimeout(() => {
            startTransition(() => {
                callback()
                // Keep blackout for longer, then fade out
                setTimeout(() => {
                    setShowBlackout(false)
                    setTimeout(() => setIsNavigating(false), 400) // Extended delay
                }, 200)
            })
        }, 150) // Delay before navigation starts
    }

    return (
        <PageTransitionContext.Provider
            value={{
                isPending: isPending || isNavigating,
                startTransition: handleStartTransition,
            }}
        >
            {/* Blackout overlay */}
            <AnimatePresence>
                {showBlackout && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: 0.5,
                            ease: "easeInOut",
                        }}
                        className="fixed inset-0 bg-black z-50"
                    />
                )}
            </AnimatePresence>

            {/* Content with fade transition */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={isPending || isNavigating ? "loading" : "content"}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: showBlackout ? 0 : 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        duration: 0.5,
                        ease: "easeInOut",
                        delay: showBlackout ? 0 : 0.2,
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