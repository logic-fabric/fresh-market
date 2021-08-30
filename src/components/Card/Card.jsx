import React, { useState } from "react";

import { Modal } from "../Modal/Modal";
import "./Card.css";

export function Card({
  product,
  basketCounter,
  setBasketCounter,
  onAddArticleToBasket,
  onUpdateArticleQuantity,
}) {
  const [modalIsDisplayed, setModalIsDisplayed] = useState(false);

  return (
    <div>
      <article className="card relative p-3 rounded-sm shadow-md bg-white">
        <img
          className="m-auto"
          src={`./img/${product.cat}/${product.img}`}
          alt={product.name}
          with="160"
          height="160"
        />

        <h2 className="mt-1 mb-sm font-serif text-primary-600 text-3xl">
          {product.name}
        </h2>

        <p className="mb-4 text-lg text-neutral-600 font-medium">
          {product.price.toString().replace(".", ",")}€&nbsp;/&nbsp;
          {product.unit}
        </p>

        <button
          className="absolute bottom-3 right-3 px-3 py-sm rounded-3 text-white text-lg font-medium bg-gradient-to-r from-tonic-700 to-tonic-600 transition-all duration-300 hover:shadow-lg hover:opacity-90 hover:transform hover:-translate-y-px"
          type="button"
          onClick={(event) => {
            setModalIsDisplayed(!modalIsDisplayed);
          }}
        >
          ajouter au panier
        </button>
      </article>

      <div className={modalIsDisplayed ? "" : "hidden"}>
        <Modal
          product={product}
          modalIsDisplayed={modalIsDisplayed}
          setModalIsDisplayed={setModalIsDisplayed}
          basketCounter={basketCounter}
          setBasketCounter={setBasketCounter}
          onAddArticleToBasket={onAddArticleToBasket}
          onUpdateArticleQuantity={onUpdateArticleQuantity}
        />
      </div>
    </div>
  );
}
