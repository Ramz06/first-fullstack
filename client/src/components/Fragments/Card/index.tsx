import type React from "react";
import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className: string;
};

const Card: React.FC<CardProps> = ({ children, className = "" }) => {
  return (
    <div className={`card bg-base-100 shadow-xl ${className}`}>{children}</div>
  );
};

export default Card;
