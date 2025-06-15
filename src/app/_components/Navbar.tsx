'use client';
import { SocialIcon } from 'react-social-icons/component';
import 'react-social-icons/discord';
import 'react-social-icons/twitch';
import 'react-social-icons/instagram';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const pathname = usePathname();

    // Set navbar background based on route
    let bgClass = 'bg-gradient-to-r from-card via-[#0b1730] to-card';
    if (pathname === '/raingg') {
        bgClass = 'bg-gradient-to-r from-card via-[#0b1730] to-card';
    } else if (pathname === '/clashgg' || pathname === "/clashgg-prev") {
        bgClass = 'bg-gradient-to-r from-card via-[#0a1c05] to-card clashGG';
    }

    const navref = useRef(null)

    useGSAP(() => {
        gsap.from(navref.current, {
            y: -100,
            duration: 1,
            ease: 'power4.out'
        });
    })

    return (
        <div ref={navref} className="w-full h-24 px-20 py-4 z-50">
            <div className={`w-full flex justify-between items-center h-full border-2 ${bgClass} backdrop-blur-sm rounded-lg py-4 px-12 transition-colors duration-500`}>
                <Link href={'/'}>
                    <h1 className="text-xl flex justify-center items-center gap-2 text-primary font-bold"><span><Image src={'/logo.webp'} className='rounded-full border-2 mt-0.5 border-border' alt='logo' width={40} height={40}></Image></span>SpyderWebs</h1>
                </Link>
                <div className="space-x-4">
                    <SocialIcon bgColor={pathname === '/raingg' || pathname === '/raingg-prev' ? "#2c3955" : '#2c5530'} style={{ height: '35px', width: '35px' }} url="https://www.discord.com" />
                    <SocialIcon bgColor={pathname === '/raingg' || pathname === '/raingg-prev' ? "#2c3955" : '#2c5530'} style={{ height: '35px', width: '35px' }} url="https://www.twitch.com" />
                    <SocialIcon bgColor={pathname === '/raingg' || pathname === '/raingg-prev' ? "#2c3955" : '#2c5530'} style={{ height: '35px', width: '35px' }} url="https://www.instagram.com" />
                </div>
            </div>
        </div>
    );
}
