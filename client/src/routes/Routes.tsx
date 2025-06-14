import { createBrowserRouter } from "react-router-dom";
import DashboardPage from "../components/pages/DashboardPage/DashboardPage";
import SignInPage from "../components/pages/auth/SingInPage";
import SignUpPage from "../components/pages/auth/SignUpPage";
import RootLayout from "../components/Layouts/RootLayout";

const router = createBrowserRouter([
    {
        element: <RootLayout />,
        children: [
            {
                path: '/',
                index: true,
                element: <DashboardPage />
            },
            {
                path: "/signin",
                element: <SignInPage />
            },
            {
                path: "/signup",
                element: <SignUpPage />
            }
        ]
    }
])

export default router;