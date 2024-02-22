import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Snooker from "./pages/Snooker/Snooker";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Snooker />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
