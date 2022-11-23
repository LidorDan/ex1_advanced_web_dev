import { useParams } from "react-router-dom";
import "../styles/ProductInfo.css";
function ProductInfo() {
  // need to send the item to this function in order to use the description
  let params = useParams();
  return <label>{params.id}</label>;
}

export default ProductInfo;
