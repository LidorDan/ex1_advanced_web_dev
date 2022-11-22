import "./Products.css";

function Product(prod) {
  return (
    <div className="Product">
      <div className="ProductDetailsDiv">
        <label className="Product_name "> {prod.title} </label>
        <br></br>
        <label className="Product_price">Price: {prod.price} $</label>
      </div>
      <img src={prod.imgsrc} className="Product_image" alt="" />
    </div>
  );
}

export default Product;
