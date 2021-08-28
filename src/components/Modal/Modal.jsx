import { useState } from "react";
import "./Modal.css";

export function Modal({
  product,
  modalIsDisplayed,
  setModalIsDisplayed,
  basketCounter,
  setBasketCounter,
}) {
  function calculateTotalPrice() {
    return (quantity * product.price).toFixed(2);
  }

  function addToBasket() {
    if (!articleInBasket && quantity > 0) {
      setBasketCounter(basketCounter + 1);
      setArticleInBasket(true);
    } else if (articleInBasket && quantity === 0) {
      setBasketCounter(basketCounter - 1);
      setArticleInBasket(false);
    }

    setModalIsDisplayed(!modalIsDisplayed);
  }

  const [quantity, setQuantity] = useState(0);
  const [articleInBasket, setArticleInBasket] = useState(false);

  return (
    <div
      className="modal__bg fixed top-0 left-0 z-40 w-full h-full"
      onClick={() => setModalIsDisplayed(!modalIsDisplayed)}
    >
      <div className="modal__dialog absolute rounded-sm bg-white">
        <div
          className="modal__content z-50 w-full px-4 py-3"
          onClick={(event) => event.stopPropagation()}
        >
          <header className="modal__header flex justify-between">
            <h3 className="font-serif text-primary-600 text-5xl">
              {product.name}
            </h3>

            <button
              className="far fa-times-circle text-neutral-500 text-3xl transform translate-x-2"
              type="button"
              aria-label="close"
              onClick={() => setModalIsDisplayed(!modalIsDisplayed)}
            ></button>
          </header>

          <img
            className="my-2"
            width="160"
            height="160"
            src={`./img/${product.cat}/${product.img}`}
            alt={product.name}
          />

          <div className="modal__body flex mb-4 text-2xl text-neutral-600 font-medium">
            <p>
              {product.price.toString().replace(".", ",")}&nbsp;€&nbsp; /{" "}
              {product.unit}
            </p>

            <div className="ml-4 text-3xl">
              <button
                className="fas fa-minus-square mx-2 text-secondary-700"
                type="button"
                onClick={() => setQuantity(Math.max(0, quantity - 1))}
              ></button>

              <span className="inline-block w-3 text-center">{quantity}</span>

              <button
                className="fas fa-plus-square mx-2 text-secondary-700"
                type="button"
                onClick={() => setQuantity(quantity + 1)}
              ></button>
            </div>

            <p className="w-6 text-right">
              <span>sous-total&nbsp;: </span>
              <strong className="inline-block w-4">
                {calculateTotalPrice().toString().replace(".", ",")}&nbsp;€
              </strong>
            </p>
          </div>

          <div className="modal__footer flex justify-end text-xl text-center">
            <button
              className="p-1 mr-2 text-neutral-500 font-semibold"
              type="button"
              onClick={() => setModalIsDisplayed(!modalIsDisplayed)}
            >
              fermer
            </button>

            <button
              className="px-3 py-sm rounded-3 text-white font-semibold bg-gradient-to-r from-tonic-700 to-tonic-600 transition-all duration-300 hover:shadow-lg hover:opacity-90 hover:transform hover:-translate-y-px"
              type="button"
              onClick={addToBasket}
            >
              ajouter au panier
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
