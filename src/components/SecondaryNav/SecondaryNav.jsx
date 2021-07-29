import React from "react";

export function SecondaryNav({ categories }) {
  return (
    <nav>
      <ul className="text-xl">
        {categories.map((category) => {
          return (
            <li
              className="mb-2 p-3 py-sm rounded-md text-white text-center bg-gradient-to-r from-secondary-700 to-secondary-500"
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
