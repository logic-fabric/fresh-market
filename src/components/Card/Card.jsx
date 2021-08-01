import React from "react";

import "./Card.css";

export function Card({ product, category }) {
  return (
    <article className="card relative p-3 rounded-sm shadow-md bg-white">
      <img
        className="m-auto"
        src={`./img/${category}/${product.img}`}
        alt={product.name}
        with="160"
        height="160"
      />

      <h2 className="mt-1 mb-sm font-serif text-primary-600 text-3xl">
        {product.name}
      </h2>

      <p className="mb-4 text-lg text-neutral-600 font-medium">
        {product.price.toString().replace(".", ",")}€&nbsp;/&nbsp;{product.unit}
      </p>

      <button
        className="absolute bottom-3 right-3 px-3 py-sm rounded-3 text-white text-lg font-medium bg-gradient-to-r from-tonic-700 to-tonic-600 transition-all duration-300 hover:shadow-lg hover:opacity-90 hover:transform hover:-translate-y-px"
        type="button"
      >
        ajouter au panier
      </button>
    </article>
  );
}
