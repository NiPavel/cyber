import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./pages/MainLayout.jsx";
import MainPage from "./pages/MainPage.jsx";
import VoutersLogin from "./pages/VoutersLogin.jsx";
import VerifiersLogin from "./pages/VerifiersLogin.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    id: "MainPage",
    children: [
      { index: true, element: <MainPage /> },
      { path: "voutersLogin/", element: <VoutersLogin /> },
      { path: "verifiersLogin/", element: <VerifiersLogin /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;