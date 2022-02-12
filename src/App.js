import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Registration from "./components/Registration";
import Login from "./components/Login";
import { Container } from "react-bootstrap";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import ViewNotes from "./components/ViewNotes";
import Profile from "./components/Profile";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Services from "./pages/Services";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/About" element={<About />} exact />
          <Route path="/ContactUs" element={<ContactUs />} exact />
          <Route path="/ViewNotes" element={<ViewNotes />} exact />
          <Route path="/Profile" element={<Profile />} exact />
          <Route path="/Registration" element={<Registration />} exact />
          <Route path="/Login" element={<Login />} exact />
          <Route path="/" element={<Home />} exact />
          <Route path="/service" element={<Services />} exact />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
