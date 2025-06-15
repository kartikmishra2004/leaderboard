'use client'
import LeaderboardNav from "../_components/LeaderboardNav";
import { useEffect, useRef, useState } from "react";
import LeaderboardRow from "../_components/LeaderboardRow";
import CountdownTimer from "../_components/CountdownTimer";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { API_URLS } from "@/utils/api";

gsap.registerPlugin(ScrollTrigger);

type LeaderboardEntry = {
    username: string;
    wagered: number;
};

export default function RainGG() {

    const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
    const [timer, setTimer] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);
    const [timerLoading, setTimerLoading] = useState<boolean>(false);
    const mainRef = useRef(null);
    const leftChip = useRef(null);
    const rightChip = useRef(null);
    const cardsRef = useRef<HTMLDivElement>(null);
    const timerRef = useRef<HTMLDivElement>(null);


    const fetchLeaderboard = async () => {
        setLoading(true);
        const result = await fetch(API_URLS.RAINGG_API_URL);
        const jsonResult = await result.json();
        setLeaderboard(jsonResult);
        setLoading(false);
    }

    const fetchTimer = async () => {
        setTimerLoading(true);
        const result = await fetch(API_URLS.RAINGG_TIMER_API_URL);
        const jsonResult = await result.json();
        setTimer(jsonResult.resetTime);
        setTimerLoading(false);
    }

    useEffect(() => {
        fetchLeaderboard();
    }, []);

    useEffect(() => {
        fetchTimer();
    }, []);

    useGSAP(() => {
        if (!loading) {
            gsap.from(cardsRef.current, {
                y: 40,
                opacity: 0,
                duration: 1,
                ease: "power4.out"
            });
        }
    }, [loading]);

    useGSAP(() => {
        gsap.from(timerRef.current, {
            y: 40,
            opacity: 0,
            duration: 1,
            ease: "power4.out",
            scrollTrigger: {
                trigger: mainRef.current,
                start: '25%'
            }
        })
    })

    return (
        <section ref={mainRef} className="w-full pb-20 text-white relative">
            <div className="">
                <Image className="absolute -left-20 top-0 -z-10 hue-rotate-200 blur-3xl opacity-40 -rotate-6 animate-float" alt="chip" src={'/9011.png'} width={400} height={400} />
                <Image ref={leftChip} className="absolute -left-20 -top-20 -z-10 hue-rotate-200 -rotate-6 animate-float" alt="chip" src={'/9011.png'} width={400} height={400} />
            </div>
            <div className="">
                <Image className="absolute -right-20 top-0 -z-10 hue-rotate-200 blur-3xl opacity-40 scale-x-[-1] rotate-6 animate-float" alt="chip" src={'/9011.png'} width={400} height={400} />
                <Image ref={rightChip} className="absolute -right-20 -top-20 -z-10 hue-rotate-200 scale-x-[-1] rotate-6 animate-float" alt="chip" src={'/9011.png'} width={400} height={400} />
            </div>
            <div className="w-full flex flex-col py-10 items-center">
                <LeaderboardNav />
                <div className="flex justify-center mt-12 items-center w-full">
                    <div className="w-[400px] h-[1px] bg-primary/10"></div>
                    <div className="space-y-1 flex flex-col items-center relative px-7">
                        <div className="absolute w-full h-full bg-blue-200 -z-10 rounded-full blur-2xl opacity-15"></div>
                        <h1 className="text-4xl text-primary font-extrabold">RAINGG</h1>
                        <h1 className="text-sm text-background px-6 py-0.5 rounded-sm bg-gradient-to-r from-secondary mt-1 to-secondary/70 font-semibold tracking-wider">LEADERBOARD</h1>
                        <Link href={'/raingg-prev'} className="text-xs z-15 py-1 my-2 px-2 border rounded-lg text-primary/80 hover:text-secondary/80 transition-colors duration-500 ease-initial">SEE PREVIOUS WINNERS</Link>
                    </div>
                    <div className="w-[400px] h-[1px] bg-primary/10"></div>
                </div>
                <div className="p-10 w-full relative flex justify-center items-center h-[400px] mt-20">
                    <div className="">
                        <Image className="absolute -left-20 top-35 hue-rotate-200 blur-3xl opacity-40 -rotate-6 animate-float" alt="chip" src={'/9011.png'} width={400} height={400} />
                        <Image ref={leftChip} className="absolute -left-20 top-35 hue-rotate-200 -rotate-6 animate-float" alt="chip" src={'/9011.png'} width={400} height={400} />
                    </div>
                    <div className="">
                        <Image className="absolute -right-20 top-35 hue-rotate-200 blur-3xl opacity-40 scale-x-[-1] rotate-6 animate-float" alt="chip" src={'/9011.png'} width={400} height={400} />
                        <Image ref={rightChip} className="absolute -right-20 top-35 hue-rotate-200 scale-x-[-1] rotate-6 animate-float" alt="chip" src={'/9011.png'} width={400} height={400} />
                    </div>
                    {loading ? <div className="w-full h-screen flex justify-center items-center">
                        <span className="rounded-full w-10 h-10 border-t-2 border-primary animate-spin"></span>
                    </div> :
                        <div className="min-h-screen flex items-center justify-center p-8">
                            <div ref={cardsRef} className="w-full flex justify-center gap-14 perspective">
                                {/* Silver - 2nd Place */}
                                <div className="relative rounded-xl border-2 translate-y-12 border-slate-600/50 hover:border-slate-400/80 bg-gradient-to-br from-card via-[#0b1730] to-card rotate-3d-right hover:scale-110 group transition-all duration-500 ease-out shadow-2xl hover:shadow-slate-400/20 transform-gpu">
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-slate-700 via-slate-600 to-slate-700 border-2 border-slate-500/50 transition-all duration-500 ease-out group-hover:border-slate-400/80 group-hover:shadow-lg group-hover:shadow-slate-400/30 text-slate-200 font-bold w-12 h-12 flex items-center text-sm justify-center rounded-full z-10">
                                        #2
                                    </div>
                                    <div className="w-[260px] h-[400px]">
                                        <div className="w-full h-[85%] p-10 flex gap-4 flex-col justify-center items-center group-hover:h-[83%] transition-all duration-500 ease-out">
                                            <span className="w-20 flex text-2xl justify-center items-center h-20 bg-slate-700/80 border-2 border-slate-500/30 group-hover:border-slate-400/60 group-hover:shadow-md group-hover:shadow-slate-400/20 transition-all duration-500 ease-out rounded-full text-slate-200">
                                                {leaderboard[1]?.username.slice(0, 2)}
                                            </span>
                                            <h1 className="text-2xl font-bold text-slate-200 group-hover:text-slate-100 transition-colors duration-300">
                                                {leaderboard[1]?.username}
                                            </h1>
                                            <div className="flex flex-col items-center gap-1">
                                                <h1 className="text-2xl font-bold text-slate-300 group-hover:text-slate-200 transition-colors duration-300">
                                                    $
                                                    {
                                                        Number(leaderboard[1]?.wagered)
                                                            .toLocaleString("en-US", {
                                                                minimumFractionDigits: 2,
                                                                maximumFractionDigits: 2,
                                                            })
                                                            .split(".")[0]
                                                    }
                                                    <span className="text-sm">.{leaderboard[1]?.wagered.toFixed(2).split(".")[1]}</span>
                                                </h1>
                                                <h1 className="text-xs text-slate-400 tracking-wide italic">WAGERED</h1>
                                            </div>
                                        </div>
                                        <div className="w-full rounded-b-lg flex justify-center items-center h-[15%] group-hover:h-[17%] bg-slate-600/80 group-hover:bg-slate-500/90 transition-all duration-500 ease-out">
                                            <h1 className="font-bold text-xl tracking-wide text-slate-200 transition-all duration-500 ease-out group-hover:text-white">
                                                $600
                                            </h1>
                                        </div>
                                    </div>
                                </div>

                                {/* Gold - 1st Place */}
                                <div className="relative">
                                    <div className="absolute w-full h-full bg-amber-300/10 -z-10 rounded-xl blur-3xl" />
                                    <div className="rounded-xl border-2 relative border-amber-600/40 hover:border-amber-500/70 bg-gradient-to-br from-card via-[#0b1730] to-card hover:scale-110 transition-all duration-500 group ease-out shadow-2xl hover:shadow-amber-400/20 transform-gpu">
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-amber-800 via-yellow-700 to-amber-800 border-2 border-amber-500/60 transition-all duration-500 ease-out group-hover:border-amber-300/80 group-hover:shadow-lg group-hover:shadow-amber-400/40 text-amber-100 font-bold w-12 h-12 flex items-center text-sm justify-center rounded-full shadow-md z-10">
                                            #1
                                        </div>
                                        <div className="w-[300px] h-[400px]">
                                            <div className="w-full h-[85%] p-10 flex gap-4 flex-col justify-center items-center group-hover:h-[83%] transition-all duration-500 ease-out">
                                                <span className="w-20 flex text-2xl justify-center items-center h-20 bg-amber-800/60 border-2 border-amber-600/40 group-hover:border-amber-500/70 group-hover:shadow-lg group-hover:shadow-amber-400/30 transition-all duration-500 ease-out rounded-full text-amber-100">
                                                    {leaderboard[0]?.username.slice(0, 2)}
                                                </span>
                                                <h1 className="text-2xl font-bold text-amber-100 group-hover:text-amber-50 transition-colors duration-300">
                                                    {leaderboard[0]?.username}
                                                </h1>
                                                <div className="flex flex-col items-center gap-1">
                                                    <h1 className="text-2xl font-bold text-amber-200 group-hover:text-amber-100 transition-colors duration-300">
                                                        $
                                                        {
                                                            Number(leaderboard[0]?.wagered)
                                                                .toLocaleString("en-US", {
                                                                    minimumFractionDigits: 2,
                                                                    maximumFractionDigits: 2,
                                                                })
                                                                .split(".")[0]
                                                        }
                                                        <span className="text-sm">.{leaderboard[0]?.wagered.toFixed(2).split(".")[1]}</span>
                                                    </h1>
                                                    <h1 className="text-xs text-amber-300/80 tracking-wide italic">WAGERED</h1>
                                                </div>
                                            </div>
                                            <div className="w-full rounded-b-lg flex justify-center items-center h-[15%] group-hover:h-[17%] bg-amber-700/60 group-hover:bg-amber-400/80 transition-all duration-500 ease-out">
                                                <h1 className="font-bold text-xl tracking-wide text-amber-100 transition-all duration-500 ease-out group-hover:text-white">
                                                    $1000
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Bronze - 3rd Place */}
                                <div className="rounded-xl border-2 translate-y-12 border-orange-950 hover:border-orange-700/80 bg-gradient-to-br from-card via-[#0b1730] to-card relative rotate-3d-left hover:scale-110 group transition-all duration-500 ease-out shadow-2xl hover:shadow-orange-600/20 transform-gpu">
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-orange-950 via-amber-900 to-orange-950 border-2 border-orange-800/60 transition-all duration-500 ease-out group-hover:border-orange-600/80 group-hover:shadow-lg group-hover:shadow-orange-500/30 text-orange-100 font-bold w-12 h-12 flex items-center text-sm justify-center rounded-full shadow-md z-10">
                                        #3
                                    </div>
                                    <div className="w-[260px] h-[400px]">
                                        <div className="w-full h-[85%] p-10 flex gap-4 flex-col justify-center items-center group-hover:h-[83%] transition-all duration-500 ease-out">
                                            <span className="w-20 flex text-2xl justify-center items-center h-20 bg-orange-950 border-2 border-orange-700/40 group-hover:border-orange-600/70 group-hover:shadow-md group-hover:shadow-orange-500/20 transition-all duration-500 ease-out rounded-full text-orange-100">
                                                {leaderboard[2]?.username.slice(0, 2)}
                                            </span>
                                            <h1 className="text-2xl font-bold text-orange-100 group-hover:text-orange-50 transition-colors duration-300">
                                                {leaderboard[2]?.username}
                                            </h1>
                                            <div className="flex flex-col items-center gap-1">
                                                <h1 className="text-2xl font-bold text-orange-200 group-hover:text-orange-100 transition-colors duration-300">
                                                    $
                                                    {
                                                        Number(leaderboard[2]?.wagered)
                                                            .toLocaleString("en-US", {
                                                                minimumFractionDigits: 2,
                                                                maximumFractionDigits: 2,
                                                            })
                                                            .split(".")[0]
                                                    }
                                                    <span className="text-sm">.{leaderboard[2]?.wagered.toFixed(2).split(".")[1]}</span>
                                                </h1>
                                                <h1 className="text-xs text-orange-300/80 tracking-wide italic">WAGERED</h1>
                                            </div>
                                        </div>
                                        <div className="w-full rounded-b-lg flex justify-center items-center h-[15%] group-hover:h-[17%] bg-orange-800/70 group-hover:bg-orange-800/70 transition-all duration-500 ease-out">
                                            <h1 className="font-bold text-xl tracking-wide text-orange-100 transition-all duration-500 ease-out group-hover:text-white">
                                                $450
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
                <div ref={timerRef} className="w-full h-[50vh] pt-40 flex flex-col justify-center items-center">
                    <h1 className="py-5 relative text-2xl text-primary font-semibold tracking-wide italic">
                        RESET IN
                        <span className="w-full h-full bg-secondary absolute top-0 left-0 -z-10 rounded-full blur-3xl opacity-50"></span>
                    </h1>
                    {timerLoading ? <span className="rounded-full w-10 h-10 border-t-2 border-primary animate-spin"></span> : <CountdownTimer resetTime={timer} />}
                </div>
                <div className="w-full py-32">
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