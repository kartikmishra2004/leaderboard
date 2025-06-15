'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LeaderboardNav() {
    const pathname = usePathname();

    return (
        <div className="w-full h-20 px-20 py-4">
            <div className="w-max mx-auto flex justify-between items-center h-full border-2 bg-card backdrop-blur-sm rounded-lg py-4 px-2">
                <Link
                    href="/raingg"
                    className={`w-[180px] gap-3 cursor-pointer flex justify-center tracking-wider font-bold py-1 rounded-lg text-primary ${pathname === "/raingg" ? "bg-primary/20" : ""
                        }`}
                >
                    <span className=""><Image src={'/logo.webp'} alt="logo" height={30} width={30}></Image></span><h1>RAINGG</h1>
                </Link>
                <Link
                    href="/clashgg"
                    className={`w-[180px] gap-3 cursor-pointer flex justify-center tracking-wider font-bold py-1 rounded-lg text-primary ${pathname === "/clashgg" ? "bg-primary/20" : ""
                        }`}
                >
                    <span className=""><Image src={'/logo.webp'} alt="logo" height={30} width={30}></Image></span><h1>CLASHGG</h1>
                </Link>
            </div>
        </div>
    );
}
