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

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [city, setCity] = useState("");

  const [isFirstNameValid, setIsFirstNameValid] = useState(false);
  const [isLastNameValid, setIsLastNameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isAddressValid, setIsAddressValid] = useState(false);
  const [isZipCodeValid, setIsZipCodeValid] = useState(false);
  const [isCityValid, setIsCityValid] = useState(false);

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(
      isFirstNameValid &&
        isLastNameValid &&
        isEmailValid &&
        isAddressValid &&
        isZipCodeValid &&
        isCityValid
    );
  }, [
    isFirstNameValid,
    isLastNameValid,
    isEmailValid,
    isAddressValid,
    isZipCodeValid,
    isCityValid,
    isFormValid,
  ]);

  return (
    <form className="text-primary-900">
      <fieldset className="flex flex-wrap mb-2">
        <div className="flex flex-col w-1/2 px-1">
          <label className="px-1 font-semibold" htmlFor="first-name">
            prénom
          </label>
          <input
            className={`px-1 py-sm rounded-sm text-lg outline-none border-xs border-${
              isFirstNameValid || !firstName ? "primary-100" : "danger-300"
            } focus:border-${
              isFirstNameValid || !firstName ? "primary-500" : "danger-300"
            } transition-all duration-200`}
            id="first-name"
            type="text"
            name="first-name"
            placeholder="votre prénom"
            defaultValue={firstName}
            required
            onChange={() => {
              const firstNameInput = document.getElementById("first-name");
              setFirstName(firstNameInput.value);
              setIsFirstNameValid(validateName(firstNameInput.value));
            }}
          />
          <p className="checkout-form__error px-1 text-danger-700 text-xs">
            {isFirstNameValid || !firstName ? "" : NAME_ERROR_MESSAGE}
          </p>
        </div>

        <div className="flex flex-col w-1/2 px-1">
          <label className="px-1 font-semibold" htmlFor="last-name">
            nom
          </label>
          <input
            className={`px-1 py-sm rounded-sm text-lg outline-none border-xs border-${
              isLastNameValid || !lastName ? "primary-100" : "danger-300"
            } focus:border-${
              isLastNameValid || !lastName ? "primary-500" : "danger-300"
            } transition-all duration-200`}
            id="last-name"
            type="text"
            name="last-name"
            placeholder="votre nom"
            defaultValue={lastName}
            required
            onChange={() => {
              const lastNameInput = document.getElementById("last-name");
              setLastName(lastNameInput.value);
              setIsLastNameValid(validateName(lastNameInput.value));
            }}
          />
          <p className="checkout-form__error px-1 text-danger-700 text-xs">
            {isLastNameValid || !lastName ? "" : NAME_ERROR_MESSAGE}
          </p>
        </div>

        <div className="flex flex-col w-full px-1">
          <label className="px-1 font-semibold" htmlFor="email">
            e-mail
          </label>
          <input
            className={`px-1 py-sm rounded-sm text-lg outline-none border-xs border-${
              isEmailValid || !email ? "primary-100" : "danger-300"
            } focus:border-${
              isEmailValid || !email ? "primary-500" : "danger-300"
            } transition-all duration-200`}
            id="email"
            type="email"
            name="email"
            placeholder="votre adresse mail"
            defaultValue={email}
            required
            onChange={() => {
              const emailInput = document.getElementById("email");
              setEmail(emailInput.value);
              setIsEmailValid(emailInput.validity.valid);
            }}
          />
          <p className="checkout-form__error px-1 text-danger-700 text-xs">
            {isEmailValid || !email ? "" : EMAIL_ERROR_MESSAGE}
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
              isAddressValid || !address ? "primary-100" : "danger-300"
            } focus:border-${
              isAddressValid || !address ? "primary-500" : "danger-300"
            } transition-all duration-200`}
            id="address"
            type="text"
            name="address"
            placeholder="l'adresse de livraison de votre commande"
            defaultValue={address}
            required
            onChange={() => {
              const addressInput = document.getElementById("address");
              setAddress(addressInput.value);
              setIsAddressValid(addressInput.value.length > 8);
            }}
          />
          <p className="checkout-form__error px-1 text-danger-700 text-xs">
            {isAddressValid || !address ? "" : ADDRESS_ERROR_MESSAGE}
          </p>
        </div>

        <div className="flex flex-col w-1/4 px-1">
          <label className="px-1 font-semibold" htmlFor="zip-code">
            code postal
          </label>
          <input
            className={`px-1 py-sm rounded-sm text-lg outline-none border-xs border-${
              isZipCodeValid || !zipCode ? "primary-100" : "danger-300"
            } focus:border-${
              isZipCodeValid || !zipCode ? "primary-500" : "danger-300"
            } transition-all duration-200`}
            id="zip-code"
            type="text"
            name="zip-code"
            placeholder="24000"
            defaultValue={zipCode}
            required
            onChange={() => {
              const zipCodeInput = document.getElementById("zip-code");
              setZipCode(zipCodeInput.value);
              setIsZipCodeValid(validateZipCode(zipCodeInput.value));
            }}
          />
          <p className="checkout-form__error px-1 text-danger-700 text-xs">
            {isZipCodeValid || !zipCode ? "" : ZIP_CODE_ERROR_MESSAGE}
          </p>
        </div>

        <div className="flex flex-col w-3/4 px-1">
          <label className="px-1 font-semibold" htmlFor="city">
            ville
          </label>
          <input
            className={`px-1 py-sm rounded-sm text-lg outline-none border-xs border-${
              isCityValid || !city ? "primary-100" : "danger-300"
            } focus:border-${
              isCityValid || !city ? "primary-500" : "danger-300"
            } transition-all duration-200`}
            id="city"
            type="text"
            name="city"
            placeholder="Périgueux"
            defaultValue={city}
            required
            onChange={() => {
              const cityInput = document.getElementById("city");
              setCity(cityInput.value);
              setIsCityValid(validateName(cityInput.value));
            }}
          />
          <p className="checkout-form__error px-1 text-danger-700 text-xs">
            {isCityValid || !city ? "" : NAME_ERROR_MESSAGE}
          </p>
        </div>
      </fieldset>

      <button
        className={
          isFormValid
            ? "block m-auto px-5 py-1 my-2 rounded-3 text-white text-center text-lg font-medium bg-gradient-to-r from-tonic-700 to-tonic-600 transition-all duration-300 hover:shadow-lg hover:opacity-90 hover:transform hover:-translate-y-px"
            : "block m-auto px-5 py-1 my-2 rounded-3 text-white text-center text-lg font-medium bg-neutral-400 cursor-default"
        }
        disabled={!isFormValid}
      >
        confirmer
      </button>
    </form>
  );
}
