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
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Deposit from "./pages/Dashboard/Deposit";
import Withdrawal from "./pages/Dashboard/Withdrawal";
import ForgotPassword from "./pages/ForgotPassword";
import PreLoader from "./components/PreLoader"
import { useEffect, useState } from "react";
import Transfer from "./pages/Dashboard/Transfer";
import Investment from "./pages/Dashboard/Investment";
import Packages from "./pages/Dashboard/Packages";



const App = () => {

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 3000);
		return () => clearTimeout(timer);
	}, []);

	if (loading) {
		return <PreLoader />;
	}
	const router = createBrowserRouter(
		createRoutesFromElements(
			<>
				<Route path="/" element={<MainLayout />}>
					<Route index element={<HomePage />} />
					<Route path="/about" element={<About />} />
					<Route path="/services" element={<Services />} />
					<Route path="/contact" element={<Contact />} />
				</Route>
				<Route element={<AuthLayout />}>
					<Route path="/sign-in" index element={<LoginPage />} />
					<Route path="/sign-up" element={<Register />} />
					<Route path="/forgot-password" element={<ForgotPassword/>}/>
				</Route>
				
				<Route element={<DashboardLayout />}>
					<Route path="/dashboard" index element={<Dashboard />} />
					<Route path="/settings"  element={<Settings />} />
					<Route path="/deposit"  element={<Deposit />} />
					<Route path="/withdrawals" element={<Withdrawal />} />
					<Route path="/transfers" element={<Transfer />} />
					<Route path="/investments" element={<Investment />} />
					<Route path="/packages" element={<Packages />} />
					
				</Route>
			</>
		)
	);
	return <RouterProvider router={router} />;
};

export default App