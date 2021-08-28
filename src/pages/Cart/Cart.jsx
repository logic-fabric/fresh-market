import { CartContent } from "../../components/CartContent/CartContent";
import { CartSummary } from "../../components/CartSummary/CartSummary";

import "./Cart.css";

export function Cart() {
  return (
    <main className="content-wrapper flex">
      <section className="w-3/4 ml-4 mr-3 my-3 px-3 py-2 rounded-1 bg-neutral-100">
        <h1 className="font-serif text-secondary-700 text-center text-3xl">
          mon panier
        </h1>

        <CartContent />
      </section>

      <aside className="w-1/4 ml-3 mr-4 my-3 px-3 py-2 rounded-1 leading-7 bg-primary-100">
        <h2 className="mb-3 font-serif text-primary-800 text-center text-3xl">
          récapitulatif
        </h2>
        <CartSummary />
      </aside>
    </main>
  );
}
