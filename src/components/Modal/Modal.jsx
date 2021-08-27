import { useState } from "react";
import "./Modal.css";

export function Modal({ product, modalIsDisplayed, setModalIsDisplayed }) {
  const [quantity, setQuantity] = useState(0);

  return (
    <div
      className="modal__bg fixed top-0 left-0 z-40 w-full h-full"
      onClick={() => setModalIsDisplayed(!modalIsDisplayed)}
    >
      <div className="modal__dialog absolute rounded-sm bg-white">
        <div
          className="modal__content w-full px-4 py-3"
          onClick={(event) => event.stopPropagation()}
        >
          <header className="modal__header flex justify-between">
            <h3 className="font-serif text-primary-600 text-5xl">
              {product.name}
            </h3>

            <button
              className="far fa-times-circle text-neutral-500 text-3xl transform translate-x-3 -translate-y-1"
              type="button"
              aria-label="close"
              onClick={() => setModalIsDisplayed(!modalIsDisplayed)}
            ></button>
          </header>

          <div className="modal__body flex my-4 text-2xl text-neutral-600 font-medium">
            <p className="">
              {product.price.toString().replace(".", ",")}€&nbsp;/&nbsp;
              {product.unit}
            </p>

            <div className="mx-4 text-3xl">
              <button
                className="fas fa-minus-square mx-2 text-secondary-700"
                type="button"
                onClick={() => setQuantity(Math.max(0, quantity - 1))}
              ></button>

              <span class="inline-block w-3 text-center">{quantity}</span>

              <button
                className="fas fa-plus-square mx-2 text-secondary-700"
                type="button"
                onClick={() => setQuantity(quantity + 1)}
              ></button>
            </div>

            <p>total&nbsp;: {product.price.toString().replace(".", ",")}€</p>
          </div>

          <div className="modal__footer flex justify-end pt-2 text-xl text-center">
            <button
              className="px-3 py-1 text-neutral-500 font-semibold"
              type="button"
            >
              fermer
            </button>

            <button
              className="px-3 py-sm rounded-3 text-white font-semibold bg-gradient-to-r from-tonic-700 to-tonic-600 transition-all duration-300 hover:shadow-lg hover:opacity-90 hover:transform hover:-translate-y-px"
              type="button"
            >
              ajouter au panier
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
