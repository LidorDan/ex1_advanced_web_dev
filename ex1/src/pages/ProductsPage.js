import Product from "../components/Product";
import "../styles/ProductsPage.css";

function ProductsPage() {
  const items = [
    { id: "1", title: "Milk", price: 5.0, imgsrc: "./Images/img1.png" },
    { id: "2", title: "Bread", price: 10.5, imgsrc: "./Images/img2.png" },
    { id: "3", title: "Cheese", price: 13.9, imgsrc: "./Images/img3.png" },
    { id: "4", title: "Apple", price: 8.9, imgsrc: "./Images/img4.png" },
    { id: "5", title: "Tomato", price: 6.5, imgsrc: "./Images/img5.png" },
    { id: "6", title: "Avocado", price: 21.9, imgsrc: "./Images/img6.png" },
    { id: "7", title: "Eggs", price: 12.0, imgsrc: "./Images/img7.png" },
  ];
  return (
    <div>
      <h4 className="pageTitle">Products list:</h4>
      {items.map((item) => (
        <Product
          id={item.id}
          title={item.title}
          price={item.price}
          imgsrc={item.imgsrc}
        ></Product>
      ))}
    </div>
  );
}
export default ProductsPage;
