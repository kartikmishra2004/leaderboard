import { SOCIAL_URLS } from "@/utils/social";
import { MessageCircle, Twitch, Play, Youtube, AlertTriangle } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { SiDiscord, SiKick, SiTwitch, SiYoutube } from "react-icons/si";
import { TransitionLink } from "./transition/transition-link";

export default function Footer() {
    const pathname = usePathname();
    return (
        <footer className={`bg-gradient-to-br from-card  to-card border-t border-secondary/80 ${pathname === '/clashgg' || pathname === '/clashgg-prev' ? "clashGG via-[#0a1c05]" : 'via-[#0b1730]'}`}>
            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    {/* Left Section - Social Links */}
                    <div className="space-y-4">
                        <TransitionLink className="flex items-center gap-3 text-white hover:text-secondary transition-colors" href={SOCIAL_URLS.discord}>
                            <div className="flex items-center gap-3 text-white hover:text-secondary transition-colors">
                                <SiDiscord />
                                <span className="font-medium">Discord</span>
                            </div>
                        </TransitionLink>
                        <TransitionLink className="flex items-center gap-3 text-white hover:text-secondary transition-colors" href={SOCIAL_URLS.twitch}>
                            <div className="flex items-center gap-3 text-white hover:text-secondary transition-colors">
                                <SiTwitch />
                                <span className="font-medium">Twitch</span>
                            </div>
                        </TransitionLink>
                        <TransitionLink className="flex items-center gap-3 text-white hover:text-secondary transition-colors" href={SOCIAL_URLS.kick}>
                            <div className="flex items-center gap-3 text-white hover:text-secondary transition-colors">
                                <SiKick />
                                <span className="font-medium">Kick</span>
                            </div>
                        </TransitionLink>
                        <TransitionLink className="flex items-center gap-3 text-white hover:text-secondary transition-colors" href={SOCIAL_URLS.youtube}>
                            <div className="flex items-center gap-3 text-white hover:text-secondary transition-colors">
                                <SiYoutube />
                                <span className="font-medium">YouTube</span>
                            </div>
                        </TransitionLink>
                    </div>

                    {/* Center Section - Made by */}
                    <div className="flex justify-center opacity-0 items-center">
                        <div className="text-center">
                            <p className="text-white text-sm">
                                Made by <span className="text-red-500 font-semibold">SpyderWebs</span>
                            </p>
                        </div>
                    </div>

                    {/* Right Section - Gambling Helpline */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-secondary">
                            <AlertTriangle className="w-5 h-5" />
                            <span className="font-semibold">24/7 National Gambling Helpline:</span>
                        </div>

                        <div className="text-secondary font-bold text-lg">1-800-662-HELP (4357)</div>

                        <div className="text-gray-300 text-sm leading-relaxed max-w-md">
                            <strong>Responsible Gambling Advisory:</strong> While gambling can be entertaining, it's crucial to be
                            aware of the associated risks. Exercise self-control, set limits, and seek support if needed. Enjoy the
                            excitement responsibly and prioritize your well-being.
                        </div>

                        <div className="text-white font-bold text-sm">GAMBLE AWARE</div>
                    </div>
                </div>
            </div>

            {/* Bottom section with backage */}
            <div className="border-t border-secondary/30 px-6 py-4">
                <div className="flex justify-center items-center">
                    <div className="text-center">
                        <TransitionLink href={'/https://www.discord.com'}>
                            <p className="text-white text-sm">
                                Made by <span className="text-red-500 font-semibold">SpyderWebs</span>
                            </p>
                        </TransitionLink>
                    </div>
                </div>
            </div>

        </footer>
    )
}
