'use client'
import React, { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const CountdownTimer: React.FC<{ resetTime: string }> = ({ resetTime }) => {
    const pathname = usePathname();
    const parseTimeString = (timeString: string): number => {
        // Handle different possible formats
        if (!timeString) return 0;

        // Check if it's a timestamp (Unix timestamp or ISO date)
        const timestamp = Date.parse(timeString);
        if (!isNaN(timestamp)) {
            const now = new Date().getTime();
            const diff = Math.max(0, Math.floor((timestamp - now) / 1000));
            return diff;
        }

        // Check if it's already in seconds
        const numValue = Number(timeString);
        if (!isNaN(numValue)) {
            return Math.max(0, numValue);
        }

        // Parse "days:hours:minutes:seconds" format
        const parts = timeString.split(":").map(Number);
        if (parts.length === 4 && parts.every(part => !isNaN(part))) {
            const [days, hours, minutes, seconds] = parts;
            return Math.max(0, days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60 + seconds);
        }

        // Parse "hours:minutes:seconds" format
        if (parts.length === 3 && parts.every(part => !isNaN(part))) {
            const [hours, minutes, seconds] = parts;
            return Math.max(0, hours * 60 * 60 + minutes * 60 + seconds);
        }

        console.error("Unable to parse time string:", timeString);
        return 0;
    };

    const formatTime = (time: number): string => {
        return String(time).padStart(2, "0");
    };

    const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => {
        const totalSeconds = parseTimeString(resetTime);
        return {
            days: Math.floor(totalSeconds / (60 * 60 * 24)),
            hours: Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60)),
            minutes: Math.floor((totalSeconds % (60 * 60)) / 60),
            seconds: totalSeconds % 60,
        };
    });

    useEffect(() => {
        // Reset timer when resetTime prop changes
        const totalSeconds = parseTimeString(resetTime);
        setTimeLeft({
            days: Math.floor(totalSeconds / (60 * 60 * 24)),
            hours: Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60)),
            minutes: Math.floor((totalSeconds % (60 * 60)) / 60),
            seconds: totalSeconds % 60,
        });
    }, [resetTime]);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft((prev) => {
                let total =
                    prev.days * 86400 +
                    prev.hours * 3600 +
                    prev.minutes * 60 +
                    prev.seconds;

                if (total <= 0) {
                    clearInterval(interval);
                    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
                }

                total--;

                return {
                    days: Math.floor(total / 86400),
                    hours: Math.floor((total % 86400) / 3600),
                    minutes: Math.floor((total % 3600) / 60),
                    seconds: total % 60,
                };
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [resetTime]);

    // Debug: Add this temporarily to see what format you're receiving
    console.log("Received resetTime:", resetTime, typeof resetTime);

    return (
        <div className={`flex relative bg-gradient-to-br from-card ${pathname === '/raingg' || '/raingg-prev' ? '#0b1730' : 'via-[#0a1c05]'} border-2 border-border to-card text-white p-8 rounded-xl space-x-6 text-center font-mono text-4xl`}>
            <div className="absolute w-full h-full bg-secondary/10 -z-10 rounded-xl blur-3xl" />
            <div>
                <div>{formatTime(timeLeft.days)}</div>
                <div className="text-sm text-gray-400 mt-1">DAYS</div>
            </div>
            <div>:</div>
            <div>
                <div>{formatTime(timeLeft.hours)}</div>
                <div className="text-sm text-gray-400 mt-1">HOURS</div>
            </div>
            <div>:</div>
            <div>
                <div>{formatTime(timeLeft.minutes)}</div>
                <div className="text-sm text-gray-400 mt-1">MINUTES</div>
            </div>
            <div>:</div>
            <div>
                <div>{formatTime(timeLeft.seconds)}</div>
                <div className="text-sm text-gray-400 mt-1">SECONDS</div>
            </div>
        </div>
    );
};

export default CountdownTimer;