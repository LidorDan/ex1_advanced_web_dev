import { useParams } from "react-router-dom";
import "../styles/ProductInfo.css";
function ProductInfo() {
  // not working yet
  let params = useParams();
  return <label>{params.id}</label>;
}

export default ProductInfo;
