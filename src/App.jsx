import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Aboutme from "./pages/Aboutme";
import Achievements from "./pages/Achievements";
import Currently from "./pages/Currently";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

function App() {
  return (
    <Router>
      <div>
        <Sidebar />
        <Header />
        <div className="ml-24">
          <Routes>
            <Route path="/" element={<Navigate to="/aboutme" replace />} />
            <Route
              path="/aboutme"
              element={<Aboutme key={location.pathname} />}
            />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/currently" element={<Currently />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
