import React, { createContext } from "react";
import { Routes, Route } from "react-router-dom";
import NavAbove from "./Comp/NavAbove";
import Navbar from "./Comp/Navbar";
import Admin from "./Comp/Admin/Admin";
import AdminLogin from "./Comp/Admin/AdminLogin";
import AddTeam from "./Comp/Admin/AddTeam";
import RemTeam from "./Comp/Admin/RemTeam";
import AddVideo from "./Comp/Admin/AddVideo";
import DelVideo from "./Comp/Admin/DelVideo";
import HomeCover from "./Comp/Admin/HomeCover";
import AddService from "./Comp/Admin/AddService";
import RemoveService from "./Comp/Admin/RemoveService";
import LogoutAdmin from "./Comp/Admin/LogoutAdmin";
import Home from "./Comp/Home";
import Services from "./Comp/Services";
import ServiceContent from "./SComp/ServiceContent";
import DonateNowForm from "./SComp/DonateNowForm";
import Team from "./Comp/Team";
import Videos from "./Comp/Videos";
import ContactUs from "./Comp/ContactUs";
import AboutUs from "./Comp/AboutUs";
import Footer from "./Comp/Footer";
import Error from "./Comp/Error";
import ForgetPassword from "./Comp/Admin/SComp/ForgetPassword";
import "react-toastify/dist/ReactToastify.css";
import { NavState, NavReducer } from "./Comp/Reducers/NavReducer";
import { useReducer } from "react";
import { ToastContainer } from "react-toastify";
import "./css/admin.css";
const NavContext = createContext();
const Routing = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/content" element={<ServiceContent />} />
        <Route exact path="/donateNow" element={<DonateNowForm />} />
        <Route exact path="/team" element={<Team />} />
        <Route exact path="/videos" element={<Videos />} />
        <Route exact path="/contact" element={<ContactUs />} />
        <Route exact path="/about" element={<AboutUs />} />
        <Route exact path="/admin" element={<Admin />} />
        <Route exact path="/adminLogin" element={<AdminLogin />} />
        <Route exact path="/homeCover" element={<HomeCover />} />
        <Route exact path="/addVideo" element={<AddVideo />} />
        <Route exact path="/delVideo" element={<DelVideo />} />
        <Route exact path="/addTeam" element={<AddTeam />} />
        <Route exact path="/remTeam" element={<RemTeam />} />
        <Route exact path="/addService" element={<AddService />} />
        <Route exact path="/remService" element={<RemoveService />} />
        <Route exact path="/fPassword" element={<ForgetPassword />} />
        <Route exact path="/logoutAdmin" element={<LogoutAdmin />} />
        <Route exact path="/*" element={<Error />} />
      </Routes>
    </>
  );
};
const App = () => {
  const [navState, navDispatch] = useReducer(NavReducer, NavState);
  return (
    <>
      <ToastContainer
        className="set_notify"
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <NavContext.Provider value={{ navState, navDispatch }}>
        <NavAbove />
        <Navbar />
        <Routing />
        <Footer />
      </NavContext.Provider>
    </>
  );
};
export { NavContext };
export default App;
