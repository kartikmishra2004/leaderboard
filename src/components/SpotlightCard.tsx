'use client'
import React, { RefObject, useRef, useState } from "react";

interface Position {
    x: number;
    y: number;
}

interface SpotlightCardProps extends React.PropsWithChildren {
    className?: string;
    spotlightColor?: `rgba(${number}, ${number}, ${number}, ${number})`;
    ref: RefObject<HTMLDivElement | null>;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({
    children,
    className = "",
    spotlightColor = "rgba(255, 255, 255, 0.25)",
    ref
}) => {

    return (
        <div
            ref={ref}
            className={`relative rounded-xl border-2 ${className}`}
        >
            <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out"
            />
            {children}
        </div>
    );
};

export default SpotlightCard;