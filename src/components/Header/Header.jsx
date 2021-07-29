import React from "react";

import "./Header.css";

export function Header() {
  return (
    <header className="bg-gradient-to-r from-primary-600 to-primary-300 ">
      <div className="content-wrapper px-4 py-3 flex justify-between">
        <div className="font-serif text-white text-4xl">Fresh Market</div>

        <nav className="flex text-lg items-center">
          <form className="mr-4 rounded-full overflow-hidden">
            <input
              className="w-6 px-2 py-sm"
              type="search"
              placeholder="chercher un article"
              aria-label="search"
            />
            <button
              className="bg-gradient-to-r from-secondary-800 to-secondary-600 pl-2 pr-3 py-sm text-white"
              type="submit"
            >
              <i className="fas fa-search inline-block mr-2"></i>
              <span>rechercher</span>
            </button>
          </form>

          <button
            className="fas fa-shopping-cart p-sm text-primary-600 text-2xl"
            type="button"
          ></button>
        </nav>
      </div>
    </header>
  );
}
