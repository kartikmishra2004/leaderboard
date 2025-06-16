"use client"

import { useState } from "react"
import { Gift, Play, PlayCircle, Sparkles } from "lucide-react"

export default function Videos() {
    const [hoveredVideo, setHoveredVideo] = useState<number | null>(null)

    const videos = [
        {
            id: "dQw4w9WgXcQ",
            title: "Epic Gaming Moments",
            thumbnail: "https://placehold.co/500x300",
        },
        {
            id: "jNQXAC9IVRw",
            title: "Ultimate Strategy Guide",
            thumbnail: "https://placehold.co/500x300",
        },
        {
            id: "9bZkp7q19f0",
            title: "Legendary Loot Opening",
            thumbnail: "https://placehold.co/500x300",
        },
    ]

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-8">
            {/* Header Section */}
            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-3 mb-6">
                    <div className="relative">
                        <div className="w-16 h-16 bg-secondary/60 rounded-full flex items-center justify-center">
                            <PlayCircle className="w-8 h-8 text-white" />
                        </div>
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                            <Sparkles className="w-3 h-3 text-white" />
                        </div>
                    </div>
                </div>
                <h1 className="text-5xl font-bold text-white mb-4">Latest videos</h1>
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto mt-6"></div>
            </div>
            <div className="flex items-center justify-center gap-12 perspective-1000">
                {videos.map((video, index) => (
                    <div
                        key={index}
                        className={`relative group cursor-pointer transition-all duration-700 ease-out ${index === 0
                            ? "transform rotate-y-12 translate-x-8"
                            : index === 2
                                ? "transform -rotate-y-12 -translate-x-8"
                                : "transform scale-110 z-10"
                            }`}
                        style={{
                            transformStyle: "preserve-3d",
                            transform: `
                ${index === 0
                                    ? "rotateY(15deg) translateX(30px) translateZ(-50px)"
                                    : index === 2
                                        ? "rotateY(-15deg) translateX(-30px) translateZ(-50px)"
                                        : "rotateY(0deg) translateZ(50px) scale(1.1)"
                                }
                ${hoveredVideo === index ? "translateZ(100px) scale(1.2)" : ""}
              `,
                        }}
                        onMouseEnter={() => setHoveredVideo(index)}
                        onMouseLeave={() => setHoveredVideo(null)}
                    >
                        {/* Video Container */}
                        <div
                            className="relative w-80 h-48 rounded-xl overflow-hidden shadow-2xl"
                            style={{
                                boxShadow:
                                    hoveredVideo === index
                                        ? "0 50px 100px rgba(0,0,0,0.8), 0 20px 40px rgba(255,255,255,0.1)"
                                        : "0 25px 50px rgba(0,0,0,0.6)",
                            }}
                        >
                            {hoveredVideo === index ? (
                                <iframe
                                    src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1`}
                                    className="w-full h-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            ) : (
                                <>
                                    <img
                                        src={video.thumbnail || "/placeholder.svg"}
                                        alt={video.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    {/* Play Button Overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors duration-300">
                                        <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-125 transition-transform duration-300 border border-white/30">
                                            <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>

                        {/* 3D Side Panel Effect */}
                        <div
                            className="absolute top-0 left-full w-4 h-48 bg-gradient-to-r from-gray-700 to-gray-800 rounded-r-xl"
                            style={{
                                transform: "rotateY(90deg)",
                                transformOrigin: "left center",
                                opacity: hoveredVideo === index ? 0.8 : 0.6,
                            }}
                        />

                        {/* 3D Bottom Panel Effect */}
                        <div
                            className="absolute top-full left-0 w-80 h-4 bg-gradient-to-b from-gray-700 to-gray-900 rounded-b-xl"
                            style={{
                                transform: "rotateX(-90deg)",
                                transformOrigin: "top center",
                                opacity: hoveredVideo === index ? 0.8 : 0.6,
                            }}
                        />
                    </div>
                ))}
            </div>

            {/* Custom CSS for 3D perspective */}
            <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .rotate-y-12 {
          transform: rotateY(12deg);
        }
        .-rotate-y-12 {
          transform: rotateY(-12deg);
        }
      `}</style>
        </div>
    )
}
