import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ProductsPage from "./pages/ProductsPage";
import ProductInfo from "./pages/ProductInfo";

function App() {
  const products = [
    {
      id: "1",
      title: "Milk",
      price: 5.0,
      imgsrc: "../Images/img1.png",
      description: "Milk 3% Tnuva",
    },
    {
      id: "2",
      title: "Bread",
      price: 10.5,
      imgsrc: "../Images/img2.png",
      description: "White bread",
    },
    {
      id: "3",
      title: "Cheese",
      price: 13.9,
      imgsrc: "../Images/img3.png",
      description: "Yellow cheese",
    },
    {
      id: "4",
      title: "Apple",
      price: 8.9,
      imgsrc: "../Images/img4.png",
      description: "Organic apple",
    },
    {
      id: "5",
      title: "Tomato",
      price: 6.5,
      imgsrc: "../Images/img5.png",
      description: "Organic tomato",
    },
    {
      id: "6",
      title: "Avocado",
      price: 21.9,
      imgsrc: "../Images/img6.png",
      description: "Organic avocado",
    },
    {
      id: "7",
      title: "Eggs",
      price: 12.0,
      imgsrc: "../Images/img7.png",
      description: "description",
    },
  ];
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route
            exact
            path="/"
            element={<ProductsPage products={products} />}
          ></Route>
          <Route
            path="/ProductInfo/:id"
            element={<ProductInfo products={products} />}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
