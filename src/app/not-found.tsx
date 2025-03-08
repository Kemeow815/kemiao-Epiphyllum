import Link from "next/link";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "404",
    description: "404",
};

export default function NotFound() {
    // 为每个数字创建图片网格
    const createDigit = (digit: string) => {
        // 定义每个数字的形状点阵
        const getDigitMatrix = (digit: string) => {
            if (digit === "4") {
                return [
                    [0, 0, 0, 1, 0],
                    [0, 0, 1, 1, 0],
                    [0, 1, 0, 1, 0],
                    [1, 0, 0, 1, 0],
                    [1, 1, 1, 1, 1],
                    [0, 0, 0, 1, 0],
                    [0, 0, 0, 1, 0],
                    [0, 0, 0, 1, 0],
                ];
            } else if (digit === "0") {
                return [
                    [0, 1, 1, 1, 0],
                    [1, 0, 0, 0, 1],
                    [1, 0, 0, 0, 1],
                    [1, 0, 0, 0, 1],
                    [1, 0, 0, 0, 1],
                    [1, 0, 0, 0, 1],
                    [1, 0, 0, 0, 1],
                    [0, 1, 1, 1, 0],
                ];
            }
            return [];
        };

        const matrix = getDigitMatrix(digit);
        const cellSize = 30;
        const width = matrix[0].length * cellSize;
        const height = matrix.length * cellSize;

        // 收集所有需要放置图片的位置
        const positions: { x: number; y: number }[] = [];

        matrix.forEach((row, rowIndex) => {
            row.forEach((cell, colIndex) => {
                if (cell === 1) {
                    positions.push({
                        x: colIndex * cellSize,
                        y: rowIndex * cellSize,
                    });
                }
            });
        });

        return (
            <div
                className="relative inline-block mx-4"
                style={{ width, height }}
            >
                {positions.map((pos, index) => {
                    // 随机紫色色调
                    const hue = 200 + Math.floor(Math.random() * 40);
                    const saturation = 60 + Math.floor(Math.random() * 30);
                    const lightness = 65 + Math.floor(Math.random() * 25);
                    const bgColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

                    // 添加一些随机偏移，使排列看起来更自然
                    const offsetX = Math.floor(Math.random() * 6 - 3);
                    const offsetY = Math.floor(Math.random() * 6 - 3);

                    return (
                        <div
                            key={index}
                            className="absolute rounded-md overflow-hidden shadow-sm transition-all hover:scale-105 hover:z-10"
                            style={{
                                width: `${cellSize - 4}px`,
                                height: `${cellSize - 4}px`,
                                left: `${pos.x + offsetX}px`,
                                top: `${pos.y + offsetY}px`,
                                backgroundColor: bgColor,
                                transform: `rotate(${Math.floor(
                                    Math.random() * 8 - 4
                                )}deg)`,
                            }}
                        >
                            <div className="w-10 h-10"></div>
                            {/* <Image
                src={`/placeholder.svg?height=40&width=40&text=${index + 1}`}
                alt=""
                width={40}
                height={40}
                className="w-full h-full object-cover"
              /> */}
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <div className="min-h-screen flex flex-col">
            {/* 主要内容 */}
            <div className="flex-1 bg-white flex flex-col items-center justify-center p-8">
                <div className="text-center mb-8">
                    <p className="text-2xl font-semibold text-gray-800 mb-2">
                        Whoops, that page is gone.
                    </p>
                    <p className="text-xl text-gray-600 mb-4">
                        We can&apos;t seem to find the page you&apos;re looking for.
                        
                    </p>
                    <p className="text-lg text-gray-600">
                        Error code : 
                        <span className="text-sky-500 font-medium ml-1">
                            404!
                        </span>
                    </p>
                </div>

                {/* 404 图片拼贴 */}
                <div className="flex justify-center items-center my-8">
                    {createDigit("4")}
                    {createDigit("0")}
                    {createDigit("4")}
                </div>

                {/* 返回链接 */}
                <div className="mt-8">
                    <Link
                        href="/"
                        className="text-neutral-600 transition duration-200 hover:text-sky-500 text-xl font-semibold"
                    >
                        返回首页
                    </Link>
                </div>
            </div>
        </div>
    );
}
