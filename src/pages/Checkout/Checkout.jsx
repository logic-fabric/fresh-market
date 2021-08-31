import { CheckoutForm } from "../../components/CheckoutForm/CheckoutForm";

export function Checkout() {
  return (
    <main className="content-wrapper">
      <section className="mx-6 my-3 px-3 py-2 rounded-1 bg-primary-100">
        <h2 className="mb-3 font-serif text-primary-800 text-center text-3xl">
          passer la commande
        </h2>

        <CheckoutForm />
      </section>
    </main>
  );
}
