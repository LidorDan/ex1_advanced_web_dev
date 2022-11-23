import { useParams } from "react-router-dom";
import "../styles/ProductInfo.css";

function ProductInfo(products) {
  // need to send the item to this function in order to use the description
  let params = useParams();
  var item = "";
  for (let i = 0; i < products.products.length; i++) {
    if (products.products[i].id === params.id) {
      item = products.products[i];
    }
  }
  return (
    <div>
      <img src={item.imgsrc} alt="" className="ImgProductInfo"></img>
      <br></br>
      <label>Product Name:&nbsp;{item.title}</label>
      <br></br>
      <label>Description:&nbsp;{item.description}</label>
    </div>
  );
}

export default ProductInfo;
