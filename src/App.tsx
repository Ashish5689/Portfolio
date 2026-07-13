import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import CursorAtmosphere from "./components/CursorAtmosphere";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <CursorAtmosphere />
    </>
  );
}

export default App;
