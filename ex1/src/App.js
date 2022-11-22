import './App.css';
import Produts from "./components/Products";


function App() {
  const items = [
    {title : 'Milk', price: 7.90, imgsrc:'./Images/img1.png' },
    {title : 'Bread', price: 10.50, imgsrc:'./Images/img2.png'},
    {title : 'Cheese', price: 13.90, imgsrc:'./Images/img3.png' },
    {title : 'Apple', price: 8.90, imgsrc:'./Images/img4.png' },
    {title : 'Tomato', price: 6.50, imgsrc:'./Images/img5.png'},
    {title : 'Avocado', price: 21.90, imgsrc:'./Images/img6.png'},
    {title : 'Eggs', price: 12.00, imgsrc:'./Images/img7.png' },
  ];

  return(
    <div>
      <h4>Products list</h4>
      <Produts
      title={items[0].title}
      price={items[0].price}
      imgsrc={items[0].imgsrc}
      ></Produts>
        <Produts
      title={items[1].title}
      price={items[1].price}
      imgsrc={items[1].imgsrc}
      ></Produts>
        <Produts
      title={items[2].title}
      price={items[2].price}
      imgsrc={items[2].imgsrc}
      ></Produts>
        <Produts
      title={items[3].title}
      price={items[3].price}
      imgsrc={items[3].imgsrc}
      ></Produts>
        <Produts
      title={items[4].title}
      price={items[4].price}
      imgsrc={items[4].imgsrc}
      ></Produts>
        <Produts
      title={items[5].title}
      price={items[5].price}
      imgsrc={items[5].imagsrc}
      ></Produts>
        <Produts
      title={items[6].title}
      price={items[6].price}
      imgsrc={items[6].imgsrc}
      ></Produts>
    </div>
  );
}

export default App;


/*<Produts
      title={items[0].title}
      price={items[0].price}
      image={items[0].imgsrc}
      ></Produts>
        <Produts
      title={items[1].title}
      price={items[1].price}
      image={items[1].imgsrc}
      ></Produts>
        <Produts
      title={items[2].title}
      price={items[2].price}
      image={items[2].imgsrc}
      ></Produts>
        <Produts
      title={items[3].title}
      price={items[3].price}
      image={items[3].imgsrc}
      ></Produts>
        <Produts
      title={items[4].title}
      price={items[4].price}
      image={items[4].imgsrc}
      ></Produts>
        <Produts
      title={items[5].title}
      price={items[5].price}
      image={items[5].imagsrc}
      ></Produts>
        <Produts
      title={items[6].title}
      price={items[6].price}
      image={items[6].imgsrc}
      ></Produts>*/