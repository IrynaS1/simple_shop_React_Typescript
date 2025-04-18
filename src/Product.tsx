import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import type { ProductType } from "./BestSellers.tsx";
import rating from "./assets/img/rating.svg";
import cartWhite from "./assets/img/cartWhite.svg";
import arrowBack from "./assets/img/arrowBack.svg";
import { Reviews } from "./Rewiews.tsx";

export const Product = () => {
  const [product, setProduct] = useState<ProductType | null>(null);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://masterclass.kimitsu.it-incubator.io/api/products/${id}`)
      .then((res) => setProduct(res.data));
  }, []);

  if (product === null) {
    return <h2>Loading ...</h2>;
  }

  return (
    <>
      <div className="arrowBack">
        <Link to={"/"}>
          <img src={arrowBack} alt="arrowBack" />
          Back to Best Seller
        </Link>
      </div>

      <div className="product">
        <img src={product.image} alt="Product image" />
        <div className="info">
          <p className="title">{product.title}</p>
          <p className="price">$ {product.price}</p>
          <div className="rating">
            <p>Rating: {product.rating.rate}</p>
            <img src={rating} alt="" />
          </div>
          <div className="category">
            <span>Category:</span>
            <p>{product.category}</p>
          </div>
          <p className="description">{product.description}</p>
          <button>
            <img src={cartWhite} alt="Cart button icon" />
            Add to cart
          </button>
        </div>
      </div>

      <Reviews />
    </>
  );
};
