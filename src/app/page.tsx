import { Button } from "@/components/ui/button"
import { Crown, Play } from "lucide-react"
import Link from "next/link"
import { TransitionLink } from "./_components/transition/transition-link"
import { GiKing } from "react-icons/gi"
import Videos from "./_components/Videos"
import FreeRewards from "./_components/FreeRewards"

export default function Home() {
  return (
    <section className="relative min-h-screen overflow-hidden">



      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        {/* Logo and title */}
        <div className="mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="text-6xl md:text-8xl font-black">
              <span className="text-secondary">SPYDER</span>
              <span className="text-white relative">
                WEBS
                <GiKing className="absolute -top-4 -right-2 w-8 h-8 text-secondary" />
              </span>
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-gray-300 text-sm md:text-base max-w-md mx-auto mb-8">
            ENJOY GREAT REWARDS & PERKS EVERYDAY
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <TransitionLink href={'/raingg'}>
            <Button variant="outline" className="border-gray-500 text-primary cursor-pointer hover:text-primary px-8 py-3 text-lg">
              🏆 LEADERBOARDS
            </Button>
          </TransitionLink>
        </div>

        {/* Start earning section */}
        <div className="flex flex-col items-center">
          <p className="text-gray-400 text-sm mb-4">
            START EARNING <span className="text-secondary font-bold">REWARDS</span>
          </p>
          <Button
            variant="ghost"
            className="w-12 h-12 rounded-full border-2 border-gray-600 hover:border-secondary transition-colors"
          >
            <Play className="w-6 h-6 text-gray-400 hover:text-secondary ml-1" />
          </Button>
        </div>
      </div>

      {/* Bottom decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent"></div>
      <Videos />
      <FreeRewards />
    </section>
  )
}
