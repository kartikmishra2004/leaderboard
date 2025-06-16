"use client"

import type React from "react"

import NextLink from "next/link"
import { useRouter } from "next/navigation"
import { usePageTransition } from "./page-transition-provider"
import type { ComponentProps, MouseEvent } from "react"

interface TransitionLinkProps extends Omit<ComponentProps<typeof NextLink>, "onClick"> {
    children: React.ReactNode
    className?: string
    replace?: boolean
    onClick?: (e: MouseEvent<HTMLAnchorElement>) => void
}

export function TransitionLink({ href, children, replace = false, className, onClick, ...props }: TransitionLinkProps) {
    const router = useRouter()
    const { startTransition, isPending } = usePageTransition()

    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
        // Call custom onClick if provided
        onClick?.(e)

        // Don't handle if default was prevented or it's a modified click
        if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey) {
            return
        }

        // Don't handle external links
        const url = href.toString()
        if (url.startsWith("http") || url.startsWith("mailto:") || url.startsWith("tel:")) {
            return
        }

        e.preventDefault()

        startTransition(() => {
            if (replace) {
                router.replace(url)
            } else {
                router.push(url)
            }
        })
    }

    return (
        <NextLink href={href} onClick={handleClick} className={className} {...props}>
            {children}
        </NextLink>
    )
}
