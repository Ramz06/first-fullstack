import AuthLayout from "@/features/auth/components/AuthLayout";
import { Input } from "@/components/ui/input";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import type React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { authService } from "@/services/authService";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Github, Loader2 } from "lucide-react";
import { AuthSplash } from "../components/AuthSplash";
import { Label } from "@radix-ui/react-label";
import { Checkbox } from "@/components/ui/checkbox";

const formSchema = z.object({
  email: z.string().email({ message: "format email tidak valid " }),
  password: z.string().min(8, { message: "password tidak boleh kosong" }),
});

const SignInForm = () => {
  return (
    <div>
      <div className="space-y-2 text-left mb-8">
        <h1 className="text-3xl font-bold">Welcome Back</h1>
        <p className="text-muted-foreground">
          please enter your account detail
        </p>
      </div>
      <div className="grip gap-6">
        <div className="grip gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="jhondoe@gmail.com"
            required
            className="bg-transparent border-2 border-b-2 rounded-none focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>
        <div className="grip gap-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            required
            className="bg-transparent border-2 border-b-2 rounded-none focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>
        <div className="flex flex-row items-center justify-between bg-red-500">
          <div className="flex items-center space-x-2">
            <Checkbox id="keep-logged-in" />
            <Label htmlFor="keep-logged-in" className="text-sm font-medium">
              Keep Me logged in
            </Label>
            <Link
              to={"/forgot-password"}
              className="text-sm font-medium underline"
            >
              Forgot Password
            </Link>
          </div>
          <Button type="submit" className="w-full rounded-full font-bold h-12">
            Sign In
          </Button>
          <div className="flex items-center gap-4 bg-red-600">
            <Button
              variant={"outline"}
              size={"icon"}
              className="w-full rounded-full h-12"
            >
              G
            </Button>
            <Button
              variant={"outline"}
              size={"icon"}
              className="w-full rounded-full h-12"
            >
              F
            </Button>
            <Button
              variant={"outline"}
              size={"icon"}
              className="w-full rounded-full h-12"
            >
              G
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const SignInPage: React.FC = () => {
  return (
    <AuthLayout
      formSlot={<SignInForm />}
      splashSlot={<AuthSplash />}
    ></AuthLayout>
  );
};

export default SignInPage;
