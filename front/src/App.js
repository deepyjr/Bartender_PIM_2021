import "./App.css";
import Layout from "./Views/Layout";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./Views/HomePage";
import CartContent from "./Views/CartContent/CartContent";
import MyDrinks from "./Views/MyDrinks/MyDrinks";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Layout></Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart-content" element={<CartContent />} />
          <Route path="/my-drinks" element={<MyDrinks />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
