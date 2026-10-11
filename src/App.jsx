
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    function getAllProducts() {
      axios
        .get("http://localhost:7777/products")
        .then((data) => {
          setProducts(data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    getAllProducts();
  }, []);

  return (
    <div>
      <h1>All Products</h1>

      {products.map((pr) => {
        return (
          <div key={pr.id}>
            <img
              src={pr.imageurl}
              alt={pr.name}
              width="100"
            />

            <div>ID: {pr.id}</div>
            <div>Name: {pr.name}</div>
            <div>Description: {pr.desc}</div>
          </div>
        );
      })}
    </div>
  );
}

export default App;