import React from "react";

export function Card({ product, category }) {
  return (
    <article className="relative p-3 rounded-sm bg-white">
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

      <p className="mb-3 text-lg font-medium">
        {product.price.toString().replace(".", ",")}€&nbsp;/&nbsp;{product.unit}
      </p>

      <button
        className="w-full px-3 py-sm rounded-sm text-white text-lg font-medium bg-gradient-to-r from-tonic-700 to-tonic-600"
        type="button"
      >
        ajouter au panier
      </button>
    </article>
  );
}
