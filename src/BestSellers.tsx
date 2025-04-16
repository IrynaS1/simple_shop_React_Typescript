import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";

export type ProductType = {
  _id: string;
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export const BestSellers = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    //обращение к серверу для получения данных при загрузке страницы

    const promise = axios.get(
      "https://masterclass.kimitsu.it-incubator.io/api/products"
    );
    promise.then((res) => {
      const products = res.data;
      setProducts(products);
    });
  }, []);

  return (
    <div className="bestSeller">
      <h2>Best Sellers</h2>
      <div className="cards">
        {products.map((product) => {
          return (
            <div key={product.id} className="card">
              <img src={product.image} alt="img" />
              <h4>{product.title}</h4>
              <p className="price">${product.price}</p>
              <Link to={`/product/${product.id}`}>Show more</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
