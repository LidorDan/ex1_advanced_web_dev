import Product from "../components/Product";
import "../styles/ProductsPage.css"
function ProductsPage() {
  const items = [
    { title: "Milk", price: 5.0, imgsrc: "./Images/img1.png" },
    { title: "Bread", price: 10.5, imgsrc: "./Images/img2.png" },
    { title: "Cheese", price: 13.9, imgsrc: "./Images/img3.png" },
    { title: "Apple", price: 8.9, imgsrc: "./Images/img4.png" },
    { title: "Tomato", price: 6.5, imgsrc: "./Images/img5.png" },
    { title: "Avocado", price: 21.9, imgsrc: "./Images/img6.png" },
    { title: "Eggs", price: 12.0, imgsrc: "./Images/img7.png" },
  ];
  return (
    <div>
      <h4 className="pageTitle">Products list:</h4>
      {items.map((item) => (
        <Product
          title={item.title}
          price={item.price}
          imgsrc={item.imgsrc}
        ></Product>
      ))}
    </div>
  );
}
export default ProductsPage;
