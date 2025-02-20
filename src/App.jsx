
import "./App.css"
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from "./assets/root/Home";
import About from "./assets/root/About";
import Product from "./assets/root/Product";
function App() {
return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/" element={<Product />} />
    </Routes>
    </BrowserRouter>
    </>
);

};
export default App;


