import SpotlightCard from "@/components/SpotlightCard";
import LeaderboardNav from "../_components/LeaderboardNav";

export default function ClashGG() {
    return (
        <section className="w-full pb-20 text-white">
            <div className="w-full flex flex-col py-10 items-center">
                <LeaderboardNav />
                <div className="space-y-1 flex flex-col items-center mt-10 relative">
                    <div className="absolute w-full h-full bg-blue-200 -z-10 rounded-full blur-2xl opacity-30"></div>
                    <h1 className="text-4xl text-primary font-extrabold">CLASHGG</h1>
                    <h1 className="text-sm text-background px-6 py-0.5 rounded-sm bg-gradient-to-r from-secondary to-secondary/70 font-semibold tracking-wider">LEADERBOARD</h1>
                </div>
                <div className="p-10 w-full flex justify-center items-center h-[400px] mt-20">
                    <div className="w-full flex justify-center gap-20 perspective">
                        <SpotlightCard className="translate-y-12 relative glow rotate-3d-left hover:scale-105 group transition-all duration-500 ease-initial" spotlightColor="rgba(22, 36, 86, 0.4)">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-card border-2 transition-all duration-500 ease-initial group-hover:border-secondary via-border to-card text-primary font-semibold w-16 h-16 flex items-center text-lg justify-center rounded-full shadow-md z-10">
                                #2
                            </div>
                            <div className="w-[240px] h-[380px]">
                                <div className="w-full h-[85%] group-hover:h-[83%] transition-all duration-500 ease-initial">

                                </div>
                                <div className="w-full rounded-b-lg flex justify-center items-center h-[15%] group-hover:h-[17%] bg-border group-hover:bg-secondary/80 transition-all duration-500 ease-initial">
                                    <h1 className="font-bold text-lg tracking-wide text-primary transition-all duration-500 ease-initial group-hover:text-white">$800</h1>
                                </div>
                            </div>
                        </SpotlightCard>
                        <SpotlightCard className="glow relative hover:scale-105 transition-all duration-500 group ease-initial" spotlightColor="rgba(22, 36, 86, 0.4)">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-card border-2 transition-all duration-500 ease-initial group-hover:border-secondary via-border to-card text-primary font-semibold w-16 h-16 flex items-center text-lg justify-center rounded-full shadow-md z-10">
                                #1
                            </div>
                            <div className="w-[280px] h-[380px]">
                                <div className="w-full h-[85%] group-hover:h-[83%] transition-all duration-500 ease-initial">

                                </div>
                                <div className="w-full rounded-b-lg flex justify-center items-center h-[15%] group-hover:h-[17%] bg-border group-hover:bg-secondary/80 transition-all duration-500 ease-initial">
                                    <h1 className="font-bold text-lg tracking-wide text-primary transition-all duration-500 ease-initial group-hover:text-white">$1000</h1>
                                </div>
                            </div>
                        </SpotlightCard>
                        <SpotlightCard className="translate-y-12 relative glow rotate-3d-right hover:scale-105 group transition-all duration-500 ease-initial" spotlightColor="rgba(22, 36, 86, 0.4)">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-card border-2 transition-all duration-500 ease-initial group-hover:border-secondary via-border to-card text-primary font-semibold w-16 h-16 flex items-center text-lg justify-center rounded-full shadow-md z-10">
                                #3
                            </div>
                            <div className="w-[240px] h-[380px]">
                                <div className="w-full h-[85%] group-hover:h-[83%] transition-all duration-500 ease-initial">

                                </div>
                                <div className="w-full rounded-b-lg flex justify-center items-center h-[15%] group-hover:h-[17%] bg-border group-hover:bg-secondary/80 transition-all duration-500 ease-initial">
                                    <h1 className="font-bold text-lg tracking-wide text-primary transition-all duration-500 ease-initial group-hover:text-white">$500</h1>
                                </div>
                            </div>
                        </SpotlightCard>
                    </div>
                </div>
            </div>
        </section>
    )
}