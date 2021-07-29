import React from "react";

export function SecondaryNav() {
  const productsCategories = [
    "légumes",
    "fruis",
    "produits frais",
    "épicerie",
    "boissons",
  ];

  return (
    <nav>
      <ul className="text-xl">
        {productsCategories.map((category) => {
          return (
            <li
              className="my-2 px-3 py-sm rounded-md text-white text-center bg-gradient-to-r from-secondary-700 to-secondary-500"
              key={`cat-${category}`}
            >
              {category}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
