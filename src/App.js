import { useEffect, useState } from "react";
import { BrowserRouter, useLocation, useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";

import Registration from "./components/Registration";
import Login from "./components/Login";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import ViewNotes from "./components/ViewNotes";
import Profile from "./components/Profile";
import Home from "./components/Home";
import NavbarElement from "./components/Navbar";
import Footer from "./components/Footer";
import Services from "./pages/Services";

function App() {
  const [loginPage, setLoginPage] = useState(false);
  const { pathName } = useLocation();
  useEffect(() => {
    setLoginPage(pathName == "/Login");
  }, [pathName]);

  return (
    <>
      {!loginPage && <NavbarElement />}
      <Container fluid>
        <Routes>
          <Route path="About" element={<About />} />
          <Route path="ContactUs" element={<ContactUs />} />
          <Route path="ViewNotes" element={<ViewNotes />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="Registration" element={<Registration />} />
          <Route path="Login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="service" element={<Services />} />
        </Routes>
      </Container>
      {!loginPage && <Footer />}
    </>
  );
}

export default App;
