import React from "react";

import "./SecondaryNav.css";

export function SecondaryNav({
  categories,
  activeCategory,
  setActiveCategory,
}) {
  return (
    <nav>
      <ul className="text-xl">
        {categories.map((category, index) => {
          return (
            <li key={`cat-${index}`}>
              <button
                className={`relative flex justify-between items-center w-full mb-2 px-2 py-1 rounded-sm font-medium text-white text-center bg-gradient-to-r from-secondary-700 to-secondary-500 transition-all  duration-300 hover:shadow-lg hover:opacity-90 hover:transform hover:-translate-y-px${
                  category.en === activeCategory &&
                  " active-category from-secondary-900 to-secondary-700 text-neutral-100"
                }`}
                type="button"
                onClick={() => setActiveCategory(category.en)}
              >
                {category.fr}
                <i className={category.icon}></i>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
