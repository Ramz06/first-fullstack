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
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  email: z.string().email({ message: "format email tidak valid " }),
  password: z.string().min(8, { message: "password tidak boleh kosong" }),
});

const SignInPage: React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const navigate = useNavigate();
  const { isSubmitting } = form.formState;
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await authService.signUp(values);
      alert("pendaftaran berhasil silakhan masuk");
    } catch (error) {
      form.setError("root", {
        type: "manual",
        message: "Email atau password yang anda masukan salah",
      });
      console.error("Sing-in failed: ", error);
    }
  };
  return (
    <AuthLayout
      title="Selamat datang kembali"
      description="Masukan email dan password anda"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {form.formState.errors.root && (
            <p className="text-sm font-medium text-destructive">
              {form.formState.errors.root.message}
            </p>
          )}

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="nama@gmail.com"
                    {...field}
                    disabled={isSubmitting}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center">
                  <FormLabel>Password</FormLabel>
                  <Link
                    to="/lupa-password"
                    className="ml-auto text-sm underline"
                  >
                    Lupa Password?
                  </Link>
                </div>
                <FormControl>
                  <Input type="password" {...field} disabled={isSubmitting} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Masuk
          </Button>
        </form>
      </Form>
      <div className="mt-4 text-center text-sm">
        Belum punya akun?{" "}
        <Link to="/signup" className="underline">
          Daftar disini
        </Link>
      </div>
    </AuthLayout>
  );
};

export default SignInPage;
