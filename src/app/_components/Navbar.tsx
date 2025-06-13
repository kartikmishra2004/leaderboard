import { SocialIcon } from 'react-social-icons/component';
import 'react-social-icons/discord'
import 'react-social-icons/twitch'
import 'react-social-icons/instagram'

export default function Navbar() {
    return (
        <div className="w-full h-24 px-20 py-4 z-50">
            <div className="w-full flex justify-between items-center h-full border-2 bg-gradient-to-r from-card via-[#0b1730] to-card backdrop-blur-sm rounded-lg py-4 px-12">
                <h1 className="text-xl text-primary font-bold">SpyderWebs</h1>
                <div className="space-x-4">
                    <SocialIcon bgColor='#2c3955' style={{ height: '35px', width: '35px' }} url='https://www.discord.com' />
                    <SocialIcon bgColor='#2c3955' style={{ height: '35px', width: '35px' }} url='https://www.twitch.com' />
                    <SocialIcon bgColor='#2c3955' style={{ height: '35px', width: '35px' }} url='https://www.instagram.com' />
                </div>
            </div>
        </div>
    )
}