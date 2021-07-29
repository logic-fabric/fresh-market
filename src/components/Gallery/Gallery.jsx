import React from "react";

import { Card } from "../Card/Card";

export function Gallery({ products, activeCategory }) {
  return (
    <div className="grid gap-3 grid-cols-3 p-3 rounded-1 bg-neutral-100">
      {products.map((product) => {
        return (
          <Card
            key={`card-${product.id}`}
            product={product}
            category={activeCategory}
          />
        );
      })}
    </div>
  );
}
