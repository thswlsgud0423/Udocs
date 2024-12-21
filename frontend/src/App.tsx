import { BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/homepage";
import MyCourses from "./pages/mycourses";

const App = () => {
  return (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mycourses" element={<MyCourses />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;