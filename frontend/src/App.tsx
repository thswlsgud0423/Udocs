import { BrowserRouter, Routes, Route} from "react-router-dom";
import AIHome from "./pages/aihome";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Homepage from "./pages/homepage";
import Python1 from "./pages/Python_1"



const App = () => {
  return (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/aihome" element={<AIHome />} />
        <Route path="/python-1" element={<Python1 />} />
        
    </Routes>
    </BrowserRouter>
  );
};

export default App;