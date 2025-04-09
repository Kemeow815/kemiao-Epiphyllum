"use client";
import { useEffect, useState } from "react";

export default function RuntimeDisplay({ startDate }: { startDate: Date }) {
    const [runtime, setRuntime] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const calculateRuntime = () => {
            const now = new Date();
            const diff = now.getTime() - startDate.getTime();

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            setRuntime({ days, hours, minutes, seconds });
        };

        calculateRuntime();
        const interval = setInterval(calculateRuntime, 1000);
        return () => clearInterval(interval);
    }, [startDate]);

    return (
        <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl shadow-sm">
            <h3 className="text-lg font-medium text-gray-800 mb-2">
                本站运行时间
            </h3>
            <div className="flex gap-4">
                <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">
                        {runtime.days}
                    </div>
                    <div className="text-xs text-gray-500">天</div>
                </div>
                <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">
                        {runtime.hours}
                    </div>
                    <div className="text-xs text-gray-500">小时</div>
                </div>
                <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">
                        {runtime.minutes}
                    </div>
                    <div className="text-xs text-gray-500">分</div>
                </div>
                <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">
                        {runtime.seconds}
                    </div>
                    <div className="text-xs text-gray-500">秒</div>
                </div>
            </div>
        </div>
    );
}
