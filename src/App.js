import { useLocation } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { Col, Collapse, Container, Row } from "react-bootstrap";

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
import AdminHome from "./adminPages/adminHome";
import SideBar from "./adminPages/components/SideBar";

function App() {
  const { pathname } = useLocation();

  return (
    <>
      <Container fluid>
        {pathname !== "/Login" && <NavbarElement />}
        <Row>
          {pathname.includes("admin") && (
            <Col xs={2}>
              <Collapse>
                <SideBar />
              </Collapse>
            </Col>
          )}
          <Col
            xs={pathname.includes("admin") ? 10 : 12}
            id="page-content-wrapper"
          >
            <Routes>
              <Route path="About" element={<About />} />
              <Route path="ContactUs" element={<ContactUs />} />
              <Route path="ViewNotes" element={<ViewNotes />} />
              <Route path="Profile" element={<Profile />} />
              <Route path="Registration" element={<Registration />} />
              <Route path="Login" element={<Login />} />
              <Route path="/" element={<Home />} />
              <Route path="service" element={<Services />} />
              {/* admin Routes */}
              <Route path="adminHome" element={<AdminHome />} />
            </Routes>
          </Col>
        </Row>
      </Container>
      {pathname !== "/Login" && pathname !== "/adminhome" && <Footer />}
    </>
  );
}

export default App;
