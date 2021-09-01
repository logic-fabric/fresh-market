import { useState } from "react";

import "./CheckoutForm.css";

const NAME_ERROR_MESSAGE =
  "deux caractères minimum, sans chiffre ni caractère spécial";

export function CheckoutForm() {
  const validateName = (name) => {
    const nameRegex = /^[a-zA-Z]+[a-zA-Z -]*[a-zA-Z]$/;

    return nameRegex.test(name) && name.length > 1;
  };

  const [isFormValid, setIsFormValid] = useState(false);

  const [isFirstNameValid, setIsFirstNameValid] = useState(true);

  return (
    <form className="text-primary-900">
      <fieldset className="flex flex-wrap mb-2">
        <div className="flex flex-col w-1/2 px-1 py-sm">
          <label className="px-1" htmlFor="first-name">
            prénom
          </label>
          <input
            className={`px-1 py-sm rounded-sm text-lg outline-none border-xs border-${
              isFirstNameValid ? "primary-100" : "danger-300"
            } focus:border-${
              isFirstNameValid ? "primary-500" : "danger-300"
            } transition-all duration-200`}
            id="first-name"
            type="text"
            name="first-name"
            placeholder="votre prénom"
            onChange={() => {
              const firstNameInput = document.getElementById("first-name");
              setIsFirstNameValid(validateName(firstNameInput.value));
            }}
          />
          <p
            className="checkout-form__error px-1 text-danger-700 text-sm"
            id="first-name-error"
          >
            {isFirstNameValid ? "" : NAME_ERROR_MESSAGE}
          </p>
        </div>

        <div className="flex flex-col w-1/2 px-1 pt-sm pb-1">
          <label className="px-1" htmlFor="last-name">
            nom
          </label>
          <input
            className="px-1 py-sm rounded-sm text-lg outline-none border-xs border-primary-100 focus:border-primary-500"
            id="last-name"
            type="text"
            name="last-name"
            placeholder="votre nom"
          />
        </div>

        <div className="flex flex-col w-full px-1 pt-sm pb-1">
          <label className="px-1" htmlFor="email">
            e-mail
          </label>
          <input
            className="px-1 py-sm rounded-sm text-lg outline-none border-xs border-primary-100 focus:border-primary-500"
            id="email"
            type="email"
            name="email"
            placeholder="votre adresse mail"
          />
        </div>
      </fieldset>

      <fieldset className="flex flex-wrap mb-3">
        <div className="flex flex-col w-full px-1 pt-sm pb-1">
          <label className="px-1" htmlFor="address">
            adresse
          </label>
          <input
            className="px-1 py-sm rounded-sm text-lg outline-none border-xs border-primary-100 focus:border-primary-500"
            id="address"
            type="text"
            name="address"
            placeholder="l'adresse de livraison de votre commande"
          />
        </div>

        <div className="flex flex-col w-1/4 px-1 pt-sm pb-1">
          <label className="px-1" htmlFor="zip-code">
            code postal
          </label>
          <input
            className="px-1 py-sm rounded-sm text-lg outline-none border-xs border-primary-100 focus:border-primary-500"
            id="zip-code"
            type="text"
            name="zip-code"
            placeholder="24000"
          />
        </div>

        <div className="flex flex-col w-3/4 px-1 pt-sm pb-1">
          <label className="px-1" htmlFor="city">
            ville
          </label>
          <input
            className="px-1 py-sm rounded-sm text-lg outline-none border-xs border-primary-100 focus:border-primary-500"
            id="city"
            type="text"
            name="city"
            placeholder="Périgueux"
          />
        </div>
      </fieldset>

      <button
        className={
          isFormValid
            ? "block m-auto px-5 py-1 my-2 rounded-3 text-white text-center text-lg font-medium bg-gradient-to-r from-tonic-700 to-tonic-600 transition-all duration-300 hover:shadow-lg hover:opacity-90 hover:transform hover:-translate-y-px"
            : "block m-auto px-5 py-1 my-2 rounded-3 text-white text-center text-lg font-medium bg-neutral-400 cursor-default"
        }
      >
        confirmer
      </button>
    </form>
  );
}
