import React from "react";

export function SecondaryNav({ categories, setActiveCategory }) {
  return (
    <nav>
      <ul className="text-xl">
        {categories.map((category, index) => {
          return (
            <li key={`cat-${index}`}>
              <button
                className="flex justify-between items-center w-full mb-2 px-2 py-1 rounded-sm font-medium text-white text-center bg-gradient-to-r from-secondary-700 to-secondary-500 hover:shadow-lg hover:opacity-90 hover:transform hover:-translate-y-px"
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
