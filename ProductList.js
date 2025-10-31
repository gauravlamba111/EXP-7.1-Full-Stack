import React, { useEffect, useState } from "react";
import axios from "axios";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then(res => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Error fetching products");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="product-container">
      {products.map(p => (
        <div key={p.id} className="product-card">
          <h3>{p.name}</h3>
          <p>Price: ${p.price}</p>
          <button>Buy Now</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
