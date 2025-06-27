import { Link, useNavigate } from "react-router-dom";
import { authService } from "../../../services/authService";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import AuthLayout from "../components/AuthLayout";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  email: z.string().email({ message: "format email tidak valid " }),
  password: z.string().min(8, { message: "password tidak boleh kosong" }),
});

const SignUpPage: React.FC = () => {
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

      alert("pendaftaran berhasil silahkan masuk");
      navigate("/signin");
    } catch (error: any) {
      if (error.message.includes("Email already exists")) {
        form.setError("email", {
          type: "manual",
          message: "Email ini sudah terdaftar",
        });
      } else {
        form.setError("root", {
          type: "manual",
          message: "Terjadi kesalahan silahkan coba lagi",
        });
      }
      console.error("Sign-up failed:", error);
    }
  };
  return (
    <AuthLayout
      title="Buat Akun Baru"
      description="masukan detail anda untuk memulai"
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
                    placeholder="nama@email.com"
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
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} disabled={isSubmitting} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Buat akun
          </Button>
        </form>
      </Form>
      <div className="mt-4 text-center text-sm">
        Sudah punya akun? {""}
        <Link to="/signin" className="underline"></Link>
      </div>
    </AuthLayout>
  );
};

export default SignUpPage;
