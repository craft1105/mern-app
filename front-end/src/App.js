import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Signup from "./components/signup";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<h1>welcome to home</h1>} />
          <Route path="/add" element={<h1>welcome to home</h1>} />
          <Route path="/update" element={<h1>welcome to update</h1>} />
          <Route path="/logout" element={<h1>welcome to logout</h1>} />
          <Route path="/profile" element={<h1>welcome to profile</h1>} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
