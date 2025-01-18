import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import AuthLayout from "./layouts/AuthLayout";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Settings from "./pages/Dashboard/Settings";


const App = () => {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<>
				<Route path="/" element={<MainLayout />}>
					<Route index element={<HomePage />} />
				</Route>
				<Route element={<AuthLayout />}>
					<Route path="/sign-in" index element={<LoginPage />} />
					<Route path="/sign-up" element={<Register />} />
				</Route>
				
				<Route element={<DashboardLayout />}>
					<Route path="/dashboard" index element={<Dashboard />} />
					
					<Route path="/settings" index element={<Settings />} />
					
				</Route>
			</>
		)
	);
	return <RouterProvider router={router} />;
};

export default App