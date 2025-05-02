import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import simpleHeroImage from "./assets/prism.png";
import heroFeatureBullets from "./assets/heroFeatureBullets.png";
import featuresRightImage from "./assets/features_side_image1.jpg";
import featuresLeftImage from "./assets/features_side_image2.jpg";
import Features from "./components/Features";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/hero-section"
            element={
              <HeroSection
                type="simple"
                title="Well crafted abstract images"
                subtitle="High quality abstract images for your projects, wallpaper and presentations."
                image={simpleHeroImage}
              />
            }
          />
          <Route
            path="/hero-section-bullets"
            element={
              <HeroSection
                type="feature-bullets"
                title="Premium abstract images"
                content={[
                  "Minimum 5K image resolutions",
                  "Various format variants available",
                  "Retina display support",
                ]}
                image={heroFeatureBullets}
              />
            }
          />
          <Route
            path="/features-right-image"
            element={
              <Features
                type="image-right"
                title="For designers, by designers"
                subTitle="Unleash boundless creativity with a large repository of images optimized for designers"
                helpText="High quality images"
                image={featuresRightImage}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
