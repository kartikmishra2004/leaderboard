'use client'
import SpotlightCard from "@/components/SpotlightCard";
import LeaderboardNav from "../_components/LeaderboardNav";
import { useEffect, useState } from "react";
import LeaderboardRow from "../_components/LeaderboardRow";
import CountdownTimer from "../_components/CountdownTimer";

type LeaderboardEntry = {
    username: string;
    wagered: number;
};

export default function RainGG() {

    const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
    const [timer, setTimer] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [timerLoading, setTimerLoading] = useState<boolean>(false);

    const fetchLeaderboard = async () => {
        setLoading(true);
        const result = await fetch('https://spyder-webs.com:4012/leaderboard');
        const jsonResult = await result.json();
        setLeaderboard(jsonResult);
        setLoading(false);
    }

    const fetchTimer = async () => {
        setTimerLoading(true);
        const result = await fetch('https://spyder-webs.com:4012/resetTime');
        const jsonResult = await result.json();
        setTimer(jsonResult.resetTime);
        setTimerLoading(false);
    }

    useEffect(() => {
        fetchLeaderboard();
    }, []);

    useEffect(() => {
        fetchTimer();
    }, [])


    return (
        <section className="w-full pb-20 text-white">
            <div className="w-full flex flex-col py-10 items-center">
                <LeaderboardNav />
                <div className="flex justify-center mt-12 items-center w-full">
                    <div className="w-[400px] h-[1px] bg-primary/10"></div>
                    <div className="space-y-1 flex flex-col items-center relative px-7">
                        <div className="absolute w-full h-full bg-blue-200 -z-10 rounded-full blur-2xl opacity-15"></div>
                        <h1 className="text-4xl text-primary font-extrabold">RAINGG</h1>
                        <h1 className="text-sm text-background px-6 py-0.5 rounded-sm bg-gradient-to-r from-secondary mt-1 to-secondary/70 font-semibold tracking-wider">LEADERBOARD</h1>
                    </div>
                    <div className="w-[400px] h-[1px] bg-primary/10"></div>
                </div>
                <div className="p-10 w-full flex justify-center items-center h-[400px] mt-20">
                    {loading ? <div className="w-full h-screen flex justify-center items-center">
                        <span className="rounded-full w-10 h-10 border-t-2 border-primary animate-spin"></span>
                    </div> :
                        <div className="w-full flex justify-center gap-20 perspective">
                            <SpotlightCard className="translate-y-12 relative rotate-3d-left hover:scale-105 group transition-all duration-500 ease-initial" spotlightColor="rgba(22, 36, 86, 0.4)">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-card border-2 transition-all duration-500 ease-initial group-hover:border-secondary via-border to-card text-primary font-semibold w-12 h-12 flex items-center text-sm justify-center rounded-full shadow-md z-10">
                                    #2
                                </div>
                                <div className="w-[260px] h-[400px]">
                                    <div className="w-full h-[85%] p-10 flex gap-4 flex-col justify-center items-center group-hover:h-[83%] transition-all duration-500 ease-initial">
                                        <span className="w-25 flex text-2xl justify-center items-center h-25 bg-border border-2 border-secondary/20 group-hover:border-secondary transition-all duration-500 ease-initial rounded-full">
                                            {leaderboard[1]?.username.slice(0, 2)}
                                        </span>
                                        <h1 className="text-2xl font-bold text-primary">{leaderboard[1]?.username}</h1>
                                        <div className="flex flex-col items-center gap-1">
                                            <h1 className="text-2xl font-bold text-secondary">
                                                ${Number(leaderboard[1]?.wagered).toLocaleString("en-US", {
                                                    minimumFractionDigits: 2,
                                                    maximumFractionDigits: 2,
                                                }).split('.')[0]}
                                                <span className="text-sm">.{leaderboard[1]?.wagered.toFixed(2).split('.')[1]}</span>
                                            </h1>
                                            <h1 className="text-xs text-zinc-400 tracking-wide italic">WAGERED</h1>
                                        </div>
                                    </div>
                                    <div className="w-full rounded-b-lg flex justify-center items-center h-[15%] group-hover:h-[17%] bg-border group-hover:bg-secondary/80 transition-all duration-500 ease-initial">
                                        <h1 className="font-bold text-xl tracking-wide text-primary transition-all duration-500 ease-initial group-hover:text-white">$600</h1>
                                    </div>
                                </div>
                            </SpotlightCard>
                            <SpotlightCard className="relative hover:scale-105 transition-all duration-500 group ease-initial" spotlightColor="rgba(22, 36, 86, 0.4)">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-card border-2 transition-all duration-500 ease-initial group-hover:border-secondary via-border to-card text-primary font-semibold w-12 h-12 flex items-center text-sm justify-center rounded-full shadow-md z-10">
                                    #1
                                </div>
                                <div className="w-[300px] h-[400px]">
                                    <div className="w-full h-[85%] p-10 flex gap-4 flex-col justify-center items-center group-hover:h-[83%] transition-all duration-500 ease-initial">
                                        <span className="w-25 flex text-2xl justify-center items-center h-25 bg-border border-2 border-secondary/20 group-hover:border-secondary transition-all duration-500 ease-initial rounded-full">
                                            {leaderboard[0]?.username.slice(0, 2)}
                                        </span>
                                        <h1 className="text-2xl font-bold text-primary">{leaderboard[0]?.username}</h1>
                                        <div className="flex flex-col items-center gap-1">
                                            <h1 className="text-2xl font-bold text-secondary">
                                                ${Number(leaderboard[0]?.wagered).toLocaleString("en-US", {
                                                    minimumFractionDigits: 2,
                                                    maximumFractionDigits: 2,
                                                }).split('.')[0]}
                                                <span className="text-sm">.{leaderboard[0]?.wagered.toFixed(2).split('.')[1]}</span>
                                            </h1>
                                            <h1 className="text-xs text-zinc-400 tracking-wide italic">WAGERED</h1>
                                        </div>
                                    </div>
                                    <div className="w-full rounded-b-lg flex justify-center items-center h-[15%] group-hover:h-[17%] bg-border group-hover:bg-secondary/80 transition-all duration-500 ease-initial">
                                        <h1 className="font-bold text-xl tracking-wide text-primary transition-all duration-500 ease-initial group-hover:text-white">$1000</h1>
                                    </div>
                                </div>
                            </SpotlightCard>
                            <SpotlightCard className="translate-y-12 relative rotate-3d-right hover:scale-105 group transition-all duration-500 ease-initial" spotlightColor="rgba(22, 36, 86, 0.4)">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-card border-2 transition-all duration-500 ease-initial group-hover:border-secondary via-border to-card text-primary font-semibold w-12 h-12 flex items-center text-sm justify-center rounded-full shadow-md z-10">
                                    #3
                                </div>
                                <div className="w-[260px] h-[400px]">
                                    <div className="w-full h-[85%] p-10 flex gap-4 flex-col justify-center items-center group-hover:h-[83%] transition-all duration-500 ease-initial">
                                        <span className="w-25 flex text-2xl justify-center items-center h-25 bg-border border-2 border-secondary/20 group-hover:border-secondary transition-all duration-500 ease-initial rounded-full">
                                            {leaderboard[2]?.username.slice(0, 2)}
                                        </span>
                                        <h1 className="text-2xl font-bold text-primary">{leaderboard[2]?.username}</h1>
                                        <div className="flex flex-col items-center gap-1">
                                            <h1 className="text-2xl font-bold text-secondary">
                                                ${Number(leaderboard[2]?.wagered).toLocaleString("en-US", {
                                                    minimumFractionDigits: 2,
                                                    maximumFractionDigits: 2,
                                                }).split('.')[0]}
                                                <span className="text-sm">.{leaderboard[2]?.wagered.toFixed(2).split('.')[1]}</span>
                                            </h1>
                                            <h1 className="text-xs text-zinc-400 tracking-wide italic">WAGERED</h1>
                                        </div>
                                    </div>
                                    <div className="w-full rounded-b-lg flex justify-center items-center h-[15%] group-hover:h-[17%] bg-border group-hover:bg-secondary/80 transition-all duration-500 ease-initial">
                                        <h1 className="font-bold text-xl tracking-wide text-primary transition-all duration-500 ease-initial group-hover:text-white">$450</h1>
                                    </div>
                                </div>
                            </SpotlightCard>
                        </div>
                    }
                </div>
                <div className="w-full h-[50vh] pt-40 flex flex-col justify-center items-center">
                    <h1 className="py-5 relative text-2xl text-primary font-semibold tracking-wide italic">
                        RESET IN
                        <span className="w-full h-full bg-secondary absolute top-0 left-0 -z-10 rounded-full blur-3xl opacity-50"></span>
                    </h1>
                    {timerLoading ? <span className="rounded-full w-10 h-10 border-t-2 border-primary animate-spin"></span> : <CountdownTimer resetTime={timer} />}
                </div>
                <div className="w-full h-screen py-32">
                    <div className="bg-gradient-to-br from-card via-[#0b1730] to-card w-2/3 mx-auto backdrop-blur-sm rounded-xl border border-blue-500/20 overflow-hidden shadow-2xl">
                        <div className="bg-border px-6 py-4">
                            <div className="grid grid-cols-4 gap-4 text-sm font-semibold text-white uppercase tracking-wider">
                                <div>Place</div>
                                <div>Users</div>
                                <div className="text-right">Wagered</div>
                                <div className="text-right">Prize</div>
                            </div>
                        </div>
                        {loading ?
                            <div className="w-full h-screen flex justify-center items-center">
                                <span className="rounded-full w-10 h-10 border-t-2 border-primary animate-spin"></span>
                            </div>
                            : <div className="divide-y divide-slate-700/50">
                                {leaderboard.slice(3).map((entry, index) => (
                                    <LeaderboardRow key={index} entry={entry} index={index} />
                                ))}
                            </div>}
                    </div>
                </div>
            </div>
        </section>
    )
}