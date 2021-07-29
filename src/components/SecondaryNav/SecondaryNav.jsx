import React from "react";

export function SecondaryNav({ categories, setActiveCategory }) {
  return (
    <nav>
      <ul className="text-xl">
        {categories.map((category, index) => {
          return (
            <li key={`cat-${index}`}>
              <button
                className="w-full mb-2 px-3 py-sm rounded-sm text-white text-center bg-gradient-to-r from-secondary-700 to-secondary-500"
                type="button"
                onClick={() => setActiveCategory(category.en)}
              >
                {category.fr}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
