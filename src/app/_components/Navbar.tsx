'use client';
import { SocialIcon } from 'react-social-icons/component';
import 'react-social-icons/discord';
import 'react-social-icons/twitch';
import 'react-social-icons/instagram';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();

    // Set navbar background based on route
    let bgClass = 'bg-gradient-to-r from-card via-[#0b1730] to-card';
    if (pathname === '/raingg') {
        bgClass = 'bg-gradient-to-r from-card via-[#0b1730] to-card';
    } else if (pathname === '/clashgg') {
        bgClass = 'bg-gradient-to-r from-card via-[#13300b] to-card clashGG';
    }

    return (
        <div className="w-full h-24 px-20 py-4 z-50">
            <div className={`w-full flex justify-between items-center h-full border-2 ${bgClass} backdrop-blur-sm rounded-lg py-4 px-12 transition-colors duration-500`}>
                <h1 className="text-xl text-primary font-bold">SpyderWebs</h1>
                <div className="space-x-4">
                    <SocialIcon bgColor={pathname === '/raingg' ? "#2c3955" : '#2c5530'} style={{ height: '35px', width: '35px' }} url="https://www.discord.com" />
                    <SocialIcon bgColor={pathname === '/raingg' ? "#2c3955" : '#2c5530'} style={{ height: '35px', width: '35px' }} url="https://www.twitch.com" />
                    <SocialIcon bgColor={pathname === '/raingg' ? "#2c3955" : '#2c5530'} style={{ height: '35px', width: '35px' }} url="https://www.instagram.com" />
                </div>
            </div>
        </div>
    );
}
