import { createBrowserRouter } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage/DashboardPage";
import SignInPage from "../pages/auth/SingInPage";
import SignUpPage from "../pages/auth/SignUpPage";
import App from "@/App";
import ProtectedRoute from "@/routes/ProtectedRoute";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        index: true,
        element: (
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/signin",
        element: <SignInPage />,
      },
      {
        path: "/signup",
        element: <SignUpPage />,
      },
    ],
  },
]);

export default router;
