import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import AboutContest from "./Pages/AboutContest";
import Participation from "./Pages/Participation";

import Organizers from "./Pages/Organizers";
import Archive from "./Pages/Archive";
import OldArchive from "./Components/OldArchive";
import NewArchive from "./Components/NewArchive";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutContest />} />
          <Route path="/organizers" element={<Organizers />} />
          <Route path="/archive" element={<Archive />}>
            <Route index path="old" element={<OldArchive />} />
            <Route path="new" element={<NewArchive />} />
          </Route>
          <Route path="/participation" element={<Participation />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
