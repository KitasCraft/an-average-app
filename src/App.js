import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './Footer';
import Nav from './Nav';
import Home from './Home';
import BookingPage from './BookingPage';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/reservation/*" element={<BookingPage />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
