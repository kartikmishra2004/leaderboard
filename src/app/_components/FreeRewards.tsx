"use client"

import { useState } from "react"
import { Copy, ExternalLink, Download, Gift, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default function FreeRewards() {
    const [copiedCode, setCopiedCode] = useState<string | null>(null)

    const handleCopy = (code: string) => {
        navigator.clipboard.writeText(code)
        setCopiedCode(code)
        setTimeout(() => setCopiedCode(null), 2000)
    }

    return (
        <div className="min-h-screen p-8">
            <div className="max-w-5xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-3 mb-6">
                        <div className="relative">
                            <div className="w-16 h-16 bg-secondary/60 rounded-full flex items-center justify-center">
                                <Gift className="w-8 h-8 text-white" />
                            </div>
                            <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                                <Sparkles className="w-3 h-3 text-white" />
                            </div>
                        </div>
                    </div>
                    <h1 className="text-5xl font-bold text-white mb-4">Free Rewards</h1>
                    <p className="text-gray-400 text-lg">Claim your exclusive bonuses with our partner codes</p>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto mt-6"></div>
                </div>

                {/* Rewards Section */}
                <div className="space-y-8">
                    {/* RAINGG Card */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                        <div className="relative bg-gray-800 rounded-3xl border border-secondary/30 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-card via-[#0b1730] to-card opacity-90"></div>
                            <div className="relative z-10 p-8">
                                <div className="flex items-center justify-between mb-8">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center border border-secondary/30">
                                            <Download className="w-6 h-6 text-secondary" />
                                        </div>
                                        <div>
                                            <h2 className="text-3xl font-bold text-white">
                                                RAIN<span className="text-secondary">GG</span>
                                            </h2>
                                            <p className="text-gray-400">Gaming Platform</p>
                                        </div>
                                    </div>
                                    <Badge variant="secondary" className="bg-secondary/20 text-secondary border-secondary/30">
                                        3 Free Cases
                                    </Badge>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="flex-1 relative">
                                        <Input
                                            value="RAINGGUWvyd83727"
                                            readOnly
                                            className="bg-gradient-to-r from-card via-[#0b1730] to-card border-secondary/50 text-white h-14 text-center font-bold text-lg"
                                        />
                                        <Button
                                            size="icon"
                                            variant="ghost"
                                            onClick={() => handleCopy("RAINGGUWvyd83727")}
                                            className="absolute right-2 top-1/2 -translate-y-1/2 text-secondary hover:text-white hover:bg-secondary/20"
                                        >
                                            <Copy className="w-5 h-5" />
                                        </Button>
                                        {copiedCode === "RAINGGUWvyd83727" && (
                                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-secondary text-white px-3 py-1 rounded-lg text-sm">
                                                Copied!
                                            </div>
                                        )}
                                    </div>
                                    <Button className="bg-secondary/60 hover:bg-secondary/80 text-white h-14 px-8 text-base font-medium">
                                        Claim Now
                                        <ExternalLink className="w-5 h-5 ml-2" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CLASH Card */}
                    <div className="relative group clashGG">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                        <div className="relative bg-gray-800 rounded-3xl border border-secondary/30 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-card via-[#0a1c05] to-card opacity-90"></div>
                            <div className="relative z-10 p-8">
                                <div className="flex items-center justify-between mb-8">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center border border-secondary/30">
                                            <Download className="w-6 h-6 text-secondary" />
                                        </div>
                                        <div>
                                            <h2 className="text-3xl font-bold text-white">
                                                CLASH<span className="text-secondary">GG</span>
                                            </h2>
                                            <p className="text-gray-400">Gaming Platform</p>
                                        </div>
                                    </div>
                                    <Badge variant="secondary" className="bg-secondary/20 text-secondary border-secondary/30">
                                        3 Free Cases
                                    </Badge>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="flex-1 relative">
                                        <Input
                                            value="CLASHGGUVHD278"
                                            readOnly
                                            className="bg-gradient-to-r from-card via-[#0a1c05] to-card border-secondary/50 text-white h-14 text-center font-bold text-lg"
                                        />
                                        <Button
                                            size="icon"
                                            variant="ghost"
                                            onClick={() => handleCopy("CLASHGGUVHD278")}
                                            className="absolute right-2 top-1/2 -translate-y-1/2 text-secondary hover:text-white hover:bg-secondary/20"
                                        >
                                            <Copy className="w-5 h-5" />
                                        </Button>
                                        {copiedCode === "CLASHGGUVHD278" && (
                                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-secondary text-white px-3 py-1 rounded-lg text-sm">
                                                Copied!
                                            </div>
                                        )}
                                    </div>
                                    <Button className="bg-secondary/60 hover:bg-secondary/80 text-white h-14 px-8 text-base font-medium">
                                        Claim Now
                                        <ExternalLink className="w-5 h-5 ml-2" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="text-center mt-16">
                    <p className="text-gray-500 text-sm">More exclusive rewards coming soon. Stay tuned!</p>
                </div>
            </div>
        </div>
    )
}
