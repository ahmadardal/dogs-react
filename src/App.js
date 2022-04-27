import Home from "./pages/home";
import Register from "./pages/register";
import DogPage from "./pages/DogPage";
import "./App.css";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dogpage" element={<DogPage />} />
      </Routes>
  );
}

export default App;
