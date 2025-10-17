import LandingPage from "./pages/landing-page/LandingPage.tsx";
import "./App.css";
function App() {
  return (
    <body className="overflow-x-hidden">
      <div className="min-h-dvh  w-full  max-w-[100vw] overflow-x-hidden bg-white">
        <LandingPage />
      </div>
    </body>
  );
}

export default App;
