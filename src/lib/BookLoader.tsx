"use client";

interface BookLoaderProps {
  message?: string;
  subMessage?: string;
  color?: string;
  size?: number;
}

export default function BookLoader({
  message = "..Loading Books..",
  subMessage = "Your next favorite read is on its way!",
  color = "#7c08db",
  size = 48
}: BookLoaderProps) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-transparent ">
      <div className="flex flex-col items-center -mt-25">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
          className={`w-${size} h-${size}`}
        >
          <linearGradient id="a12">
            <stop offset="0" stopColor={color} stopOpacity="0"></stop>
            <stop offset="1" stopColor={color}></stop>
          </linearGradient>
          <circle
            fill="none"
            stroke="url(#a12)"
            strokeWidth="15"
            strokeLinecap="round"
            strokeDasharray="0 44 0 44 0 44 0 44 0 360"
            cx="100"
            cy="100"
            r="70"
            style={{ transformOrigin: 'center' }}
          >
            <animateTransform
              type="rotate"
              attributeName="transform"
              calcMode="discrete"
              dur="2"
              values="360;324;288;252;216;180;144;108;72;36"
              repeatCount="indefinite"
            ></animateTransform>
          </circle>
        </svg>

        {/* Loading Text */}
        <p className="mt-6 text-2xl font-semibold text-gray-700">
          {message}
        </p>
        <p className="mt-2 text-md text-gray-500">
          {subMessage}
        </p>
      </div>
    </div>
  );
}