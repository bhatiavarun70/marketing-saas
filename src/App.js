import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/hero-section"
            element={
              <HeroSection
                title="Well crafted abstract images"
                subtitle="High quality abstract images for your projects, wallpaper and presentations."
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
