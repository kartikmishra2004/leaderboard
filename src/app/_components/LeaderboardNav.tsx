'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LeaderboardNav() {
    const pathname = usePathname();

    return (
        <div className="w-full h-24 px-20 py-4">
            <div className="w-max mx-auto flex justify-between items-center h-full border-2 bg-gradient-to-r from-card via-[#0b1730] to-card backdrop-blur-sm rounded-lg py-4 px-2">
                <Link
                    href="/raingg"
                    className={`w-[200px] cursor-pointer flex justify-center tracking-wider font-bold py-3 rounded-lg text-primary ${pathname === "/raingg" ? "bg-primary/20" : ""
                        }`}
                >
                    <h1>RAINGG</h1>
                </Link>
                <Link
                    href="/clashgg"
                    className={`w-[200px] cursor-pointer flex justify-center tracking-wider font-bold py-3 rounded-lg text-primary ${pathname === "/clashgg" ? "bg-primary/20" : ""
                        }`}
                >
                    <h1>CLASHGG</h1>
                </Link>
            </div>
        </div>
    );
}
