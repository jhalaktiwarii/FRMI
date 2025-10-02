import { LucideHome } from "lucide-react";
import React from "react";
 
interface LogoIconProps {
  width?: number;
  height?: number;
  className?: string;
}

const LogoIcon: React.FC<LogoIconProps> = ({ 
  width = 300, 
  height = 100, 
  className = "" 
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 300 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Modern gradient background */}
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor:'rgba(255,255,255,0.95)', stopOpacity:1}} />
          <stop offset="100%" style={{stopColor:'rgba(255,255,255,0.85)', stopOpacity:1}} />
        </linearGradient>
        <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{stopColor:'#059669', stopOpacity:1}} />
          <stop offset="100%" style={{stopColor:'#10b981', stopOpacity:1}} />
        </linearGradient>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="rgba(0,0,0,0.1)"/>
        </filter>
      </defs>

      {/* Elegant background with shadow */}
      <rect
        x="25"
        y="12"
        width="250"
        height="76"
        rx="20"
        ry="20"
        fill="url(#bgGradient)"
        filter="url(#shadow)"
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="1"
      />

      {/* House icon from Lucide */}
      <foreignObject x="30" y="20" width="30" height="30">
       
      </foreignObject>

      {/* Company name with gradient */}
      <text
        x="150"
        y="48"
        textAnchor="middle"
        fontFamily="'Inter', 'Segoe UI', system-ui, sans-serif"
        fontWeight="800"
        fontSize="16"
        fill="url(#textGradient)"
        letterSpacing="0.2"
      >
        FIRST RATE MORTGAGE
      </text>

      <text
        x="150"
        y="68"
        textAnchor="middle"
        fontFamily="'Inter', 'Segoe UI', system-ui, sans-serif"
        fontWeight="700"
        fontSize="12"
        fill="url(#textGradient)"
        letterSpacing="3"
      >
        INC.
      </text>

      {/* Decorative line */}
      <line
        x1="80"
        y1="68"
        x2="220"
        y2="68"
        stroke="url(#textGradient)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default LogoIcon;
