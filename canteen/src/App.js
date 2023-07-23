import  { Routes, Route } from "react-router-dom";
// import Home from "./Components/Home";
import Home from "./Components/Home"
import Team from "./Components/Team";
import "./Assets/Styles/Home.css";
import "./Assets/Styles/Home.css";

export default function App()
{
  return
  (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/team" element={<Team />} />
    </Routes>
  );
}