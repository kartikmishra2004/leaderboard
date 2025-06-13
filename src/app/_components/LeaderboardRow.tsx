import { Trophy } from "lucide-react";

interface LeaderboardEntry {
    username: string;
    wagered: number
}

interface LeaderboardRowProps {
    entry: LeaderboardEntry;
    index: number;
}

const LeaderboardRow = ({ entry, index }: LeaderboardRowProps) => {
    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
        }).format(amount);
    };

    return (
        <div className="px-6 py-4 hover:bg-gradient-to-r from from-blue-600/5 to-blue-900/5 transition-colors duration-200 group">
            <div className="grid grid-cols-4 gap-4 items-center">
                {/* Place */}
                <div className="text-2xl font-bold text-secondary">
                    #{index + 3}
                </div>

                {/* User */}
                <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 rounded-full bg-border flex items-center justify-center shadow-lg`}>
                        <span className="text-primary font-bold text-sm">
                            {entry.username.slice(0, 2)}
                        </span>
                    </div>
                    <div className="text-primary font-medium group-hover:text-secondary transition-colors">
                        {entry.username}
                    </div>
                </div>

                {/* Wagered */}
                <div className="text-right">
                    <div className="text-primary font-semibold">
                        {formatCurrency(entry.wagered)}
                    </div>
                </div>

                {/* Prize */}
                <div className="text-right">
                    <div className="inline-flex items-center space-x-2 bg-border border-secondary/30 border-2 text-primary px-4 py-2 rounded-lg font-semibold shadow-lg">
                        <Trophy size={16} className="text-secondary" />
                        <span>$100</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeaderboardRow;