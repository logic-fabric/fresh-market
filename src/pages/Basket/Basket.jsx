import { BasketContent } from "../../components/BasketContent/BasketContent";
import { BasketSummary } from "../../components/BasketSummary/BasketSummary";

import "./Basket.css";

export function Basket() {
  return (
    <main className="content-wrapper flex">
      <section className="w-3/4 ml-4 mr-3 my-3 px-3 py-2 rounded-1 bg-neutral-100">
        <h1 className="mb-3 font-serif text-secondary-700 text-center text-3xl">
          mon panier
        </h1>

        <BasketContent />
      </section>

      <aside className="basket-summary-container w-1/4 ml-3 mr-4 my-3 px-3 py-2 rounded-1 leading-7 bg-primary-100">
        <h2 className="mb-3 font-serif text-primary-800 text-center text-3xl">
          récapitulatif
        </h2>

        <BasketSummary />
      </aside>
    </main>
  );
}
