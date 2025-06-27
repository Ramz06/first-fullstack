import type React from "react";

type ProgressBarProps = {
  value: number;
  max: number;
  className: string;
};

const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max,
  className = `progress-error`,
}) => {
  return (
    <progress
      className={`progress w-56 ${className}`}
      value={value}
      max={max}
      aria-label="Progress belanja"
    />
  );
};

export default ProgressBar;
