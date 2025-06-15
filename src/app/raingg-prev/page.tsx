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

export default function RainGGPrev() {

    const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const mainRef = useRef(null);
    const leftChip = useRef(null);
    const rightChip = useRef(null);
    const cardsRef = useRef<HTMLDivElement>(null);
    const timerRef = useRef<HTMLDivElement>(null);


    const fetchLeaderboard = async () => {
        setLoading(true);
        const result = await fetch(API_URLS.RAINGG_PREV_API_URL);
        const jsonResult = await result.json();
        setLeaderboard(jsonResult);
        setLoading(false);
    }

    useEffect(() => {
        fetchLeaderboard();
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
        <section ref={mainRef} className="w-full rainGG pb-20 text-white">
            <div className="w-full flex flex-col py-10 items-center">
                <div className="flex justify-center mt-12 items-center w-full">
                    <div className="w-[400px] h-[1px] bg-primary/10"></div>
                    <div className="space-y-1 flex flex-col items-center relative px-7">
                        <div className="absolute w-full h-full bg-blue-200 -z-10 rounded-full blur-2xl opacity-15"></div>
                        <h1 className="text-4xl text-primary font-extrabold flex items-center gap-1">RAINGG<sup className="text-sm font-normal">(PREV)</sup></h1>
                        <h1 className="text-sm text-background px-6 py-0.5 rounded-sm bg-gradient-to-r from-secondary mt-1 to-secondary/70 font-semibold tracking-wider">LEADERBOARD</h1>
                        <Link href={'/raingg'} className="text-xs py-1 my-2 px-2 border rounded-lg text-primary/80 hover:text-secondary/80 transition-colors duration-500 ease-initial">BACK TO HOME</Link>
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
                        <div ref={cardsRef} className="w-full flex justify-center gap-14 perspective">
                            <div className={`relative rounded-xl border-2 translate-y-12 border-border hover:border-secondary/80 bg-gradient-to-br from-card via-[#0b1730] to-card rotate-3d-left hover:scale-105 group transition-all duration-500 ease-initial`}>
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
                            </div>
                            <div className="relative">
                                <div className="absolute w-full h-full bg-secondary/20 -z-10 rounded-xl blur-3xl" />
                                <div className="rounded-xl border-2 relative border-border hover:border-secondary/80 bg-gradient-to-br from-card via-[#0b1730] to-card hover:scale-105 transition-all duration-500 group ease-initial">
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
                                </div>
                            </div>
                            <div className="rounded-xl border-2 translate-y-12 border-border hover:border-secondary/80 bg-gradient-to-br from-card via-[#0b1730] to-card relative rotate-3d-right hover:scale-105 group transition-all duration-500 ease-initial">
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
                            </div>
                        </div>
                    }
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