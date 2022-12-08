import React from "react";
// import { Container } from "react-bootstrap";
import { AuthProvider } from '../../contexts/AuthContext';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import SignUp from "../SignUp/SignUp";
import SignIn from "../SignIn/SignIn";
import PrivateRoutes from "../PrivateRoutes";
import ForgotPassword from "../ForgotPassword/ForgotPassword";
import UpdateProfile from "../UpdateProfile/UpdateProfile";
import LandingPage from "../LandingPage/LandingPage";
import TermsAndConditions from "../TermsAndConditions/TermsAndConditions";
import NewPassword from "../NewPassword/NewPassword";
import NoProfile from "../layout/No Profile/NoProfile";
import Upload from "../Upload/Upload";
import Categories from "../Categories/Categories";
import Category from "../Category/Category";
import NotFound from "../NotFound/NotFound";
import Archive from "../Archive/Archive";
import { GlobalStore } from "../../contexts/GlobalStore";
import Bin from "../Bin/Bin";
import VerifyEmail from '../VerifyEmail/VerifyEmail';
import PrivacyPolicy from "../PrivacyPolicy/PrivacyPolicy";
import PubliceRoutes from "../PublicRoutes";
import ExistingUserRoutes from '../ExistingUserRoutes'

const App = () => {
	return (
		<AuthProvider>
				<GlobalStore>
					<BrowserRouter>
						<Routes>
							<Route path="/" exact element={<LandingPage />} />
							<Route element={<PrivateRoutes />}>
								<Route element={<ExistingUserRoutes />}>
									<Route path="/dashboard" element={<Layout />}>
										<Route index element={<Upload />} />
										<Route path="categories" element={<Categories />} />
										<Route path="categories/:name" element={<Category />} />
										<Route path="archive" element={<Archive />} />
										<Route path="bin" element={<Bin />} />
									</Route>
									<Route path="/update-profile" element={<UpdateProfile />} />
								</Route>
								<Route path="/upload-new-user" element={<NoProfile />} />
							</Route>
							<Route element={<PubliceRoutes />}>
								<Route path="/signup" element={<SignUp />} />
								<Route path="/signin" element={<SignIn />} />
								<Route path='/verify-email' element={<VerifyEmail />}/> 
								<Route path="/forgot-password" element={<ForgotPassword />} />
								<Route path="/new-password" element={<NewPassword />} />
							</Route>
							<Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            				<Route path="/privacy-policy" element={<PrivacyPolicy />} />
							<Route path="*" element={<NotFound />} />
						</Routes>
					</BrowserRouter>
				</GlobalStore>
	   </AuthProvider>
	);
};

export default App;
