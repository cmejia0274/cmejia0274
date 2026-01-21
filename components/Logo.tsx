import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  variant?: 'default' | 'footer';
}

const Logo: React.FC<LogoProps> = ({ className = "h-12", showText = true, variant = 'default' }) => {
  if (variant === 'footer') {
    return (
      <div className={`bg-white p-1.5 rounded-sm inline-block ${className}`}>
        <img 
          src="https://assets.zyrosite.com/Awvrjo5GqDcGBa7y/altitude-logo-250x250-LLpREntkMd1KJUCL.png" 
          alt="Altitude Icon" 
          className="h-full w-auto block object-contain"
        />
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2 md:gap-4 ${className}`}>
      <img 
        src="https://assets.zyrosite.com/Awvrjo5GqDcGBa7y/altitude-logo-250x250-LLpREntkMd1KJUCL.png" 
        alt="Altitude Logo" 
        className="h-full w-auto object-contain"
      />
      {showText && (
        <span className="text-lg md:text-2xl font-black tracking-normal md:tracking-widest text-[#003456] whitespace-nowrap">
          ALTITUDE
        </span>
      )}
    </div>
  );
};

export default Logo;