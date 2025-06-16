import { Copy, ExternalLink, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function FreeRewards() {
    return (
        <div className="min-h-screen p-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex items-center gap-4 mb-12">
                    <div className="w-12 h-12 bg-secondary/60 rounded-xl flex items-center justify-center">
                        <Download className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl font-bold text-white">Free Rewards</h1>
                    <div className="flex-1 h-px bg-primary ml-4"></div>
                </div>

                {/* Reward Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    

                    {/* RAINGG Card */}
                    <div className="bg-gray-800 rounded-2xl p-6 border-2 border-secondary relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-card via-[#0b1730] to-card"></div>
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-2xl font-bold text-white">
                                    RAIN<span className="text-secondary">GG</span>
                                </span>
                            </div>

                            <h3 className="text-xl font-semibold text-white mb-8">3 Free Cases</h3>

                            <div className="space-y-4">
                                <div className="relative">
                                    <Input
                                        value="TJA"
                                        readOnly
                                        className="from-card via-[#0b1730] to-card bg-gradient-to-r border-secondary text-white pr-12 h-12 text-center font-medium"
                                    />
                                    <Button
                                        size="icon"
                                        variant="ghost"
                                        className="absolute right-2 top-1/2 -translate-y-1/2 text-secondary hover:text-white"
                                    >
                                        <Copy className="w-4 h-4" />
                                    </Button>
                                </div>

                                <Button className="w-full bg-secondary/60 hover:bg-secondary/40 text-white h-12 text-base font-medium">
                                    Claim Bonus
                                    <ExternalLink className="w-4 h-4 ml-2" />
                                </Button>
                            </div>
                        </div>
                    </div>
                    {/* CLASH Card */}
                    <div className="bg-gray-800 rounded-2xl clashGG p-6 border-2 border-secondary relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-card via-[#0a1c05] to-card"></div>
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-2xl font-bold text-white">
                                    CLASH<span className="text-secondary">GG</span>
                                </span>
                            </div>

                            <h3 className="text-xl font-semibold text-white mb-8">3 Free Cases</h3>

                            <div className="space-y-4">
                                <div className="relative">
                                    <Input
                                        value="TJA"
                                        readOnly
                                        className="from-card via-[#0b1730] to-card bg-gradient-to-r border-secondary text-white pr-12 h-12 text-center font-medium"
                                    />
                                    <Button
                                        size="icon"
                                        variant="ghost"
                                        className="absolute right-2 top-1/2 -translate-y-1/2 text-secondary hover:text-white"
                                    >
                                        <Copy className="w-4 h-4" />
                                    </Button>
                                </div>

                                <Button className="w-full bg-secondary/60 hover:bg-secondary/40 text-white h-12 text-base font-medium">
                                    Claim Bonus
                                    <ExternalLink className="w-4 h-4 ml-2" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}