import { useNavigate } from "react-router-dom"
import type { AuthCredentials } from "../../types";
import { authService } from "../../services/authService";
import AuthLayout from "../../components/Layouts/AuthLayout";
import AuthForm from "../../components/Fragments/AuthForm";

const SignUpPage: React.FC = () => {
    const navigate = useNavigate();

    const handleSignup = async (credential: AuthCredentials) => {
        await authService.signUp(credential);
        alert('pendaftaran berhasil! Silakan login.');
        navigate('/signin')
    }

    return (
        <AuthLayout title="Daftar Sekarang" subtitle="Buat akun baru untuk mendapatkan akses penuh ke semua fitur kami.">
            <AuthForm onSubmit={handleSignup}
            submitButtonText="Buat Akun"/>
            <div className="text-center p-4">
                <div className="text-sm">
                    Sudah punya akun {''}
                    <a href="signin" className="link link-primary">
                        Masuk disini
                    </a>
                </div>
            </div>
        </AuthLayout>
    )
}

export default SignUpPage;