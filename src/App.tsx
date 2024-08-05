import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import HomeMaster from "./pages/HomeMaster";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/HomeMaster" element={<HomeMaster />} />
      </Routes>
    </Router>
  );
}

export default App;
