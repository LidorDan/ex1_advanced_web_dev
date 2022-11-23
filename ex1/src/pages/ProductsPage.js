import Product from "../components/Product";
import "../styles/ProductsPage.css";

function ProductsPage(products) {
  return (
    <div>
      <h4 className="pageTitle">Products list:</h4>
      {products.products.map((item) => (
        <Product
          id={item.id}
          title={item.title}
          price={item.price}
          imgsrc={item.imgsrc}
          description={item.description}
        ></Product>
      ))}
    </div>
  );
}
export default ProductsPage;
