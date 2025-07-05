import { Card } from "@/components/ui/card";
import type React from "react";
import { motion } from "framer-motion";
import { AuthLayoutBackground } from "./AuthLayoutBackground";

interface AuthLayoutProps {
  formSlot: React.ReactNode;
  splashSlot: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ formSlot, splashSlot }) => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-900">
      <AuthLayoutBackground />
      <motion.div
        initial={{ opacity: 0, y: -30, x: -30 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.85, ease: "easeOut" }}
      >
        <div className="relative z-10 text-white">
          <Card className="grid w-full max-w-4xl grid-cols-1 md:grid-cols-2 overflow-hidden shadow-2xl rounded-2xl border-none">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              {formSlot}
            </div>
            <div className="hidden md:block p-8 bg-zinc-900 text-white">
              {splashSlot}
            </div>
          </Card>
        </div>
      </motion.div>
    </div>
  );
};

export default AuthLayout;
