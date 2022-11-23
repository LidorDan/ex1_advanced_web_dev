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
  return <label>{item.description}</label>;
}

export default ProductInfo;
