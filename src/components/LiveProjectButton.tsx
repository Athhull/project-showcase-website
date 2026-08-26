import React from 'react';

interface LiveProjectButtonProps {
  className?: string;
  onClick?: () => void;
  url?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({ className = '', onClick, url }) => {
  const content = (
    <button
      onClick={onClick}
      className={`rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:bg-[#D7E2EA]/10 transition-colors duration-200 whitespace-nowrap ${className}`}
    >
      Live Project
    </button>
  );

  if (url) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
};

export default LiveProjectButton;
