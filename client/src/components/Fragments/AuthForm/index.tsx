import { useState } from "react";
import type { AuthCredentials } from "../../../types";
import Input from "../../Elements/Input";
import { Button } from "../../ui/button";
import { Loader2 } from "lucide-react";

interface AuthFormProps {
  onSubmit: (credential: AuthCredentials) => Promise<void>;
  submitButtonText: string;
}

const AuthForm: React.FC<AuthFormProps> = ({ onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    try {
      await onSubmit({ email, password });
    } catch (err: any) {
      setError(err.message);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form action="" className="card-body" onSubmit={handleSubmit}>
      {error && <div className="alert alert-error text-sm">{error}</div>}
      <Input
        id="email"
        label="Email"
        type="email"
        placeholder="....."
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
        disabled={isLoading}
      />
      <Input
        id="password"
        label="Password"
        type="password"
        placeholder="....."
        value={password}
        required
        onChange={(e) => setPassword(e.target.value)}
        disabled={isLoading}
      />
      <div className="form-control mt-6">
        <Button type="submit" disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              mohon tunggu
            </>
          ) : (
            submitButtonText
          )}
        </Button>
      </div>
    </form>
  );
};

export default AuthForm;
