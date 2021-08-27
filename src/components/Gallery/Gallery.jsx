import React from "react";

import { Card } from "../Card/Card";

export function Gallery({ products, cartCounter, setCartCounter }) {
  return (
    <div className="grid gap-3 grid-cols-3 p-3 rounded-1 bg-neutral-100">
      {products.map((product, index) => {
        return (
          <Card
            key={`card-${index}`}
            product={product}
            cardId={`card-${index}`}
            cartCounter={cartCounter}
            setCartCounter={setCartCounter}
          />
        );
      })}
    </div>
  );
}
