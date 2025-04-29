import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Information from "./pages/Information";
import InformationSolarPanels from "./components/InformationSolarPanels";
import EnergyCalculator from "./pages/EnergyCalculator";
import {CookiesProvider} from "react-cookie";
import CarbonFootprintCalculator from "./pages/CarbonFootprintCalculator";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import RegistrationSuccess from "./pages/RegistrationSuccess";
import ConfirmLogout from "./pages/ConfirmLogout";
import LogoutSuccess from "./pages/LogoutSuccess";
import LoginSuccess from "./pages/LoginSuccess";
import Consultation from "./pages/Consultation";
import BookingSuccess from "./pages/BookingSuccess";
import Accessibility from "./pages/Accessibility";
import InformationElectricalVehicleCharging from "./components/InformationElectricalVehicleCharging";
import InformationSmartHomeTechnology from "./components/InformationSmartHomeTechnology";
import InformationReducingYourCarbonFootprint from "./components/InformationReducingYourCarbonFootprint";

function App() {
  return (
      <CookiesProvider>
        <BrowserRouter>
          <Routes>
            <Route>
              <Route index element={<Home />} />
              <Route path="information" element={<Information />} />
              <Route path="information-solar-panels" element={<InformationSolarPanels />} />
              <Route path="information-electrical-vehicle-charging" element={<InformationElectricalVehicleCharging />} />
              <Route path="information-smart-home-technology" element={<InformationSmartHomeTechnology />} />
              <Route path="information-reducing-your-carbon-footprint" element={<InformationReducingYourCarbonFootprint />} />
              <Route path="energy-calculator" element={<EnergyCalculator />} />
              <Route path="carbon-footprint-calculator" element={<CarbonFootprintCalculator />} />
              <Route path="register" element={<Registration />} />
              <Route path="login" element={<Login />} />
              <Route path="contact" element={<Contact />} />
              <Route path="registration-success" element={<RegistrationSuccess />} />
              <Route path="booking-success" element={<BookingSuccess />} />
              <Route path="confirm-logout" element={<ConfirmLogout />} />
              <Route path="logout-success" element={<LogoutSuccess />} />
              <Route path="login-success" element={<LoginSuccess />} />
              <Route path="consultation-booking" element={<Consultation />} />
              <Route path="accessibility" element={<Accessibility />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CookiesProvider>
  );
}

export default App;
