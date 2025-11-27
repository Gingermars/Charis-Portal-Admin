import React from "react";

// color map for short keys (kept for backwards-compatibility)
const glowColors = {
  blue: "bg-blue-100",
  purple: "bg-purple-100",
  cyan: "bg-cyan-100",
  green: "bg-green-100",
};

const StatCard = ({
  title,
  value,
  change,
  icon: Icon,
  iconBgColor,
  iconColor,
  shadowColor,
  showProgressBar,
  percentage,
}) => {
  return (
    <div className="relative">
      {/* Colored shadow/glow effect - placed outside the white card so it's visible */}
      {shadowColor
        ? (() => {
            // Allow passing either a Tailwind bg class (e.g. 'bg-blue-100')
            // or a short key like 'blue'. Determine the background class and
            // compute an RGBA fallback for box-shadow.
            const bgClass = shadowColor.startsWith("bg-")
              ? shadowColor
              : glowColors[shadowColor] || "bg-blue-100";

            const colorKey = shadowColor.startsWith("bg-")
              ? shadowColor.split("-")[1]
              : shadowColor;

            const colorShadows = {
              blue: "0 10px 30px rgba(59,130,246,0.18)",
              purple: "0 10px 30px rgba(139,92,246,0.18)",
              cyan: "0 10px 30px rgba(6,182,212,0.18)",
              green: "0 10px 30px rgba(34,197,94,0.18)",
            };

            const boxShadow = colorShadows[colorKey] || "";

            return (
              <div
                className={`absolute left-0 right-0 bottom-0 h-8 ${bgClass} rounded-b-2xl blur-xl opacity-40 z-0`}
                style={boxShadow ? { boxShadow } : undefined}
              />
            );
          })()
        : null}

      <div className="bg-white rounded-2xl shadow-none p-6 relative z-10">
        <div className="flex items-start justify-between mb-4">
          <p className="text-sm text-gray-600">{title}</p>
          <div
            className={`w-10 h-10 ${iconBgColor} rounded-lg flex items-center justify-center`}
          >
            {Icon ? <Icon className={`w-5 h-5 ${iconColor}`} /> : null}
          </div>
        </div>

        <h3 className="text-3xl font-bold text-gray-900 mb-2">{value}</h3>

        {showProgressBar ? (
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-purple-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
        ) : (
          <p className="text-xs text-green-600 font-medium">{change}</p>
        )}
      </div>
    </div>
  );
};

export default StatCard;
