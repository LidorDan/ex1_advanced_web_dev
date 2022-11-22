import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ProductsPage from "./pages/ProductsPage";
import ProductInfo from "./pages/ProductInfo";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route exact path="/" element={<ProductsPage />}></Route>
          <Route
            exact
            path="/ProductInfo/:id"
            element={<ProductInfo />}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
