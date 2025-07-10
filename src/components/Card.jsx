import { useEffect, useState } from "react";

function Card({
  title,
  value,
  icon,
  chartType,
  maxValue = 100,
  progressLabel,
  progressColor = "#602BF8",
}) {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  const percentage = Math.min((value / maxValue) * 100, 100);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimatedPercentage(percentage);
    }, 100); // delay to trigger animation

    return () => clearTimeout(timeout);
  }, [percentage]);

  return (
    <div className="p-4 bg-white rounded-xl shadow-md w-full h-60 flex flex-col justify-between">
      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-500 font-semibold">{title}</div>
        {icon && <div className="text-lg">{icon}</div>}
      </div>

      <div className="text-3xl font-bold">{value}</div>

      <div className="text-xs font-semibold text-gray-500">{progressLabel}</div>

      {/* Dynamic chart rendering */}
      {chartType === "donut" && (
        <div className="relative w-20 h-20 mx-auto transition-all duration-500">
          <svg className="w-full h-full" viewBox="0 0 36 36">
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              stroke="#CABDEE"
              strokeWidth="4"
            />
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              stroke={progressColor}
              strokeWidth="4"
              strokeDasharray={`${animatedPercentage}, 100`}
              transform="rotate(-90 18 18)"
              strokeLinecap="round"
            />
          </svg>
        </div>
      )}

      {chartType === "radial" && (
        <div className="relative w-20 h-20 mx-auto transition-all duration-500">
          <svg className="w-full h-full" viewBox="0 0 36 36">
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              stroke="#CABDEE"
              strokeWidth="4"
            />
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              stroke={progressColor}
              strokeWidth="4"
              strokeDasharray={`${animatedPercentage}, 100`}
              transform="rotate(-90 18 18)"
              strokeLinecap="round"
            />
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dy=".3em"
              fontSize="10"
              className="fill-current text-gray-700"
            >
              {Math.round(animatedPercentage)}%
            </text>
          </svg>
        </div>
      )}

      {chartType === "bar" && (
        <div className="w-full flex flex-col gap-2">
          {/* Top row: Title + Icon */}
          <div className="flex justify-between items-center">
            <span className="text-sm font-semibold text-gray-700">{title}</span>
            {icon && <img src={icon} alt="icon" className="w-5 h-5" />}
          </div>

          {/* Middle: Big Number */}
          <div className="text-3xl font-bold text-right text-gray-800">
            {value}
          </div>

          {/* Bottom: Chart Bar */}
          <div className="relative w-full h-3 bg-[#CABDEE] rounded-full group">
            <div
              className="absolute top-0 left-0 h-full rounded-full transition-all duration-500 group-hover:bg-opacity-90"
              style={{
                width: `${animatedPercentage}%`,
                backgroundColor: progressColor,
              }}
              title={`${Math.round(
                (value / maxValue) * 100
              )}% (${value} of ${maxValue})`}
            />
          </div>

          {/* Bottom Right Label */}
          <div className="text-xs text-right font-medium text-gray-500">
            {progressLabel}
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
