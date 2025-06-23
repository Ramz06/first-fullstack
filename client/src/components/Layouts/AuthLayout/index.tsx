import type React from "react";
import Card from "../../Elements/Card";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  title,
  subtitle,
}) => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse w-full max-w-4xl gap-16">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="py-6">{subtitle}</p>
        </div>
        <Card className="shrink-0 w-full max-w-sm">{children}</Card>
      </div>
    </div>
  );
};

export default AuthLayout;
