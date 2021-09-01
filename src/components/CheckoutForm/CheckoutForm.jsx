import { useEffect, useState } from "react";

import "./CheckoutForm.css";

const NAME_ERROR_MESSAGE =
  "deux caractères minimum, sans chiffre ni caractère spécial";
const EMAIL_ERROR_MESSAGE = "nous avons besoin d'une adresse mail valide";
const ADDRESS_ERROR_MESSAGE = "nous avons besoin d'une adresse de livraison";
const ZIP_CODE_ERROR_MESSAGE = "code formé de 5 chiffres";

export function CheckoutForm() {
  const validateName = (name) => {
    const nameRegex = /^[a-zA-Z]+[a-zA-Z -]*[a-zA-Z]$/;

    return nameRegex.test(name) && name.length > 1;
  };

  const validateZipCode = (zipCode) => {
    const zipCodeRegex = /^\d{5}$/;

    return zipCodeRegex.test(zipCode);
  };

  const [isFormValid, setIsFormValid] = useState(false);

  const [isFirstNameValid, setIsFirstNameValid] = useState(true);
  const [isLastNameValid, setIsLastNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isAddressValid, setIsAddressValid] = useState(true);
  const [isZipCodeValid, setIsZipCodeValid] = useState(true);
  const [isCityValid, setIsCityValid] = useState(true);

  return (
    <form className="text-primary-900">
      <fieldset className="flex flex-wrap mb-2">
        <div className="flex flex-col w-1/2 px-1">
          <label className="px-1 font-semibold" htmlFor="first-name">
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
          <p className="checkout-form__error px-1 text-danger-700 text-xs">
            {isFirstNameValid ? "" : NAME_ERROR_MESSAGE}
          </p>
        </div>

        <div className="flex flex-col w-1/2 px-1">
          <label className="px-1 font-semibold" htmlFor="last-name">
            nom
          </label>
          <input
            className={`px-1 py-sm rounded-sm text-lg outline-none border-xs border-${
              isLastNameValid ? "primary-100" : "danger-300"
            } focus:border-${
              isLastNameValid ? "primary-500" : "danger-300"
            } transition-all duration-200`}
            id="last-name"
            type="text"
            name="last-name"
            placeholder="votre nom"
            onChange={() => {
              const lastNameInput = document.getElementById("last-name");
              setIsLastNameValid(validateName(lastNameInput.value));
            }}
          />
          <p className="checkout-form__error px-1 text-danger-700 text-xs">
            {isLastNameValid ? "" : NAME_ERROR_MESSAGE}
          </p>
        </div>

        <div className="flex flex-col w-full px-1">
          <label className="px-1 font-semibold" htmlFor="email">
            e-mail
          </label>
          <input
            className={`px-1 py-sm rounded-sm text-lg outline-none border-xs border-${
              isEmailValid ? "primary-100" : "danger-300"
            } focus:border-${
              isEmailValid ? "primary-500" : "danger-300"
            } transition-all duration-200`}
            id="email"
            type="email"
            name="email"
            placeholder="votre adresse mail"
            onChange={() => {
              const emailInput = document.getElementById("email");
              setIsEmailValid(emailInput.validity.valid);
            }}
          />
          <p className="checkout-form__error px-1 text-danger-700 text-xs">
            {isEmailValid ? "" : EMAIL_ERROR_MESSAGE}
          </p>
        </div>
      </fieldset>

      <fieldset className="flex flex-wrap mb-3">
        <div className="flex flex-col w-full px-1">
          <label className="px-1 font-semibold" htmlFor="address">
            adresse
          </label>
          <input
            className={`px-1 py-sm rounded-sm text-lg outline-none border-xs border-${
              isAddressValid ? "primary-100" : "danger-300"
            } focus:border-${
              isAddressValid ? "primary-500" : "danger-300"
            } transition-all duration-200`}
            id="address"
            type="text"
            name="address"
            placeholder="l'adresse de livraison de votre commande"
            onChange={() => {
              const addressInput = document.getElementById("address");
              setIsAddressValid(addressInput.value.length > 8);
            }}
          />
          <p className="checkout-form__error px-1 text-danger-700 text-xs">
            {isAddressValid ? "" : ADDRESS_ERROR_MESSAGE}
          </p>
        </div>

        <div className="flex flex-col w-1/4 px-1">
          <label className="px-1 font-semibold" htmlFor="zip-code">
            code postal
          </label>
          <input
            className={`px-1 py-sm rounded-sm text-lg outline-none border-xs border-${
              isZipCodeValid ? "primary-100" : "danger-300"
            } focus:border-${
              isZipCodeValid ? "primary-500" : "danger-300"
            } transition-all duration-200`}
            id="zip-code"
            type="text"
            name="zip-code"
            placeholder="24000"
            onChange={() => {
              const zipCodeInput = document.getElementById("zip-code");
              setIsZipCodeValid(validateZipCode(zipCodeInput.value));
            }}
          />
          <p className="checkout-form__error px-1 text-danger-700 text-xs">
            {isZipCodeValid ? "" : ZIP_CODE_ERROR_MESSAGE}
          </p>
        </div>

        <div className="flex flex-col w-3/4 px-1">
          <label className="px-1 font-semibold" htmlFor="city">
            ville
          </label>
          <input
            className={`px-1 py-sm rounded-sm text-lg outline-none border-xs border-${
              isCityValid ? "primary-100" : "danger-300"
            } focus:border-${
              isCityValid ? "primary-500" : "danger-300"
            } transition-all duration-200`}
            id="city"
            type="text"
            name="city"
            placeholder="Périgueux"
            onChange={() => {
              const cityInput = document.getElementById("city");
              setIsCityValid(validateName(cityInput.value));
            }}
          />
          <p className="checkout-form__error px-1 text-danger-700 text-xs">
            {isCityValid ? "" : NAME_ERROR_MESSAGE}
          </p>
        </div>
      </fieldset>

      <button
        className={
          isFormValid
            ? "block m-auto px-5 py-1 my-2 rounded-3 text-white text-center text-lg font-medium bg-gradient-to-r from-tonic-700 to-tonic-600 transition-all duration-300 hover:shadow-lg hover:opacity-90 hover:transform hover:-translate-y-px"
            : "block m-auto px-5 py-1 my-2 rounded-3 text-white text-center text-lg font-medium bg-neutral-400 cursor-default"
        }
        disabled={isFormValid}
      >
        confirmer
      </button>
    </form>
  );
}
