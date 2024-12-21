import { BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/homepage";
import MyCourses from "./pages/mycourses";
import AIHome from "./pages/aihome";

const App = () => {
  return (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mycourses" element={<MyCourses />} />
        <Route path="/aihome" element={<AIHome />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;