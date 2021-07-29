import { SecondaryNav } from "./components/SecondaryNav/SecondaryNav";
import { Header } from "./components/Header/Header";
import "./App.css";

import { PRODUCTS } from "./data/sample-data";

function App() {
  const productsCategories = Object.keys(PRODUCTS).map(
    (category) => PRODUCTS[category].frenchName
  );

  return (
    <div>
      <Header />

      <main className="content-wrapper grid grid-cols-4">
        <aside className="px-4 py-3">
          <SecondaryNav categories={productsCategories} />
        </aside>
        <div className="col-span-3 h-6 my-3 rounded-md bg-neutral-100"></div>
      </main>
    </div>
  );
}

export default App;
