import { createBrowserRouter } from "react-router-dom";
import DashboardPage from "../features/dashboard/routes/DashboardPage";
import SignInPage from "../features/auth/routes/SingInPage";
import SignUpPage from "../features/auth/routes/SignUpPage";
import App from "@/App";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        index: true,
        element: (
            <DashboardPage />
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
