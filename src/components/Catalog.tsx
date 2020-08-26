import React, { useState, useEffect, useCallback } from "react";
import api from "../services/api";
import { IProduct } from "../store/modules/cart/types";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../store/modules/cart/actions";

const Catalog: React.FC = () => {
  const [catalog, setCatalog] = useState<IProduct[]>([]);
  const dispatch = useDispatch();
  useEffect(() => {
    api.get("products").then((response) => {
      setCatalog(response.data);
    });
  }, []);

  const handleAddProductToCart = useCallback(
    (product: IProduct) => {
      dispatch(addProductToCart(product));
    },
    [dispatch]
  );

  return (
    <main>
      <h1>Catalog</h1>

      {catalog.map((product) => (
        <article key={product.id}>
          <strong>{product.title}</strong> {" - "}
          <span>{product.price}</span> {" - "}
          <button type="button" onClick={() => handleAddProductToCart(product)}>
            Comprar
          </button>
        </article>
      ))}
    </main>
  );
};

export default Catalog;
