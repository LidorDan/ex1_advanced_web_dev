import "./Products.css"

function Products(prod) {

    return (
        <div className="Products">
            <div className="Products_name "> {prod.title} </div>
            <div className="Products_price"> {prod.price} </div>
            <img src={prod.imgsrc} className="Products_image"/>
        </div>
    );
}

export default Products;