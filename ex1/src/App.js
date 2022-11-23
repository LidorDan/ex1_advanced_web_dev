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
      imgsrc1: "../Images/img1.png",
      imgsrc2: "../Images/secImg1/png",
      description: "Milk 3% Tnuva",
      store:"Rami Levi ,Herzel 22 - Tel Aviv",
    },
    {
      id: "2",
      title: "Bread",
      price: 10.5,
      imgsrc1: "../Images/img2.png",
      imgsrc2: "../Images/secImg2/png",
      description: "White bread",
      store:"Hatzi Hinam ,",
    },
    {
      id: "3",
      title: "Cheese",
      price: 13.9,
      imgsrc1: "../Images/img3.png",
      imgsrc2: "../Images/secImg3/png",
      description: "Yellow cheese",
      store:"Shufersal",
    },
    {
      id: "4",
      title: "Apple",
      price: 8.9,
      imgsrc1: "../Images/img4.png",
      imgsrc2: "../Images/secImg4/png",
      description: "Organic apple",
    },
    {
      id: "5",
      title: "Tomato",
      price: 6.5,
      imgsrc1: "../Images/img5.png",
      imgsrc2: "../Images/secImg5/png",
      description: "Organic tomato",
    },
    {
      id: "6",
      title: "Avocado",
      price: 21.9,
      imgsrc1: "../Images/img6.png",
      imgsrc2: "../Images/secImg6/png",
      description: "Organic avocado",
    },
    {
      id: "7",
      title: "Eggs",
      price: 12.0,
      imgsrc1: "../Images/img7.png",
      imgsrc2: "../Images/secImg7/png",
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
