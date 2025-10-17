import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing-page/LandingPage.tsx";
import AuthIntro from "./pages/auth/AuthIntro.tsx";
import StudentLogin from "./pages/auth/StudentLogin.tsx";
import ComingSoon from "./pages/ComingSoon.tsx";
import "./App.css";
function App() {
  return (
    <div className="overflow-x-hidden">
      <div className="min-h-dvh  w-full  max-w-[100vw] overflow-x-hidden bg-white">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth-intro" element={<AuthIntro />} />
          <Route path="/student-login" element={<StudentLogin />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
