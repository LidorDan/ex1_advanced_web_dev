import "../styles/ProductInfo.css";
function Product(prod) {
  return (
   <div className="Product">
   
      <div className="ProductDetailsDiv">
        <label className="Product_name "> {prod.title} </label>
        <br></br>
        <label className="Product_price">Price: {prod.price} $</label>
      </div>
      <a className="LinkToDEscription" href={"/ProductInfo/" + prod.id}>
        Description</a>
        <img src={prod.imgsrc1} className="Product_image" alt="" />
    </div>
  
  );
}
export default Product;
