import {
  Chart as ChartJS,
  ArcElement,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js/auto";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Hero from "./Hero";
import AboutSection from "./aboutsection";
import DocumentSection from "./DocumentSection";
import ProjectsSection from "./projectsSection";
// Register ChartJS components
ChartJS.register(
  ArcElement,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

// Styled components using MUI

function App() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <DocumentSection />
    </>
  );
}

export default App;
