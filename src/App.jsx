import Home from "./screens/Home";
import Register from "./screens/Register";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/home" element={<Register />} />
        </Route>
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
