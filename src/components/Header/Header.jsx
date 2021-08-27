import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

export function Header({
  filterProducts,
  setIsFilteringProducts,
  cartCounter,
}) {
  return (
    <header className="bg-gradient-to-r from-primary-600 to-primary-300 ">
      <div className="content-wrapper flex justify-between items-center px-4 py-3">
        <Link to="/" className="font-serif text-white text-4xl">
          Fresh Market
        </Link>

        <nav className="flex text-lg items-center">
          <form className="mr-4 rounded-full overflow-hidden">
            <input
              className="w-6 px-2 py-sm outline-none"
              type="search"
              placeholder="chercher un article"
              aria-label="search"
              onChange={(e) => {
                setIsFilteringProducts(e.target.value.length > 0);
                filterProducts(e.target.value);
              }}
            />

            <button
              className="bg-gradient-to-r from-secondary-800 to-secondary-600 pl-2 pr-3 py-sm text-white"
              type="submit"
            >
              <i className="fas fa-search inline-block mr-2"></i>
              <span>rechercher</span>
            </button>
          </form>

          <Link
            to="mon-panier"
            className="relative w-4 h-4 border-sm border-colorprimary-600 rounded-full text-primary-600 text-2xl"
            type="button"
          >
            <span className="cart-icon fas fa-shopping-cart"></span>
            <span className="cart-counter font-sans  bg-gradient-to-r from-danger-500 to-danger-400">
              {cartCounter}
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
