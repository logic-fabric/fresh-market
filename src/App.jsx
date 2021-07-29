import { SecondaryNav } from "./components/SecondaryNav/SecondaryNav";
import { Header } from "./components/Header/Header";
import "./App.css";

function App() {
  return (
    <div>
      <Header />

      <main className="content-wrapper grid grid-cols-4">
        <aside className="h-6 px-4 py-3">
          <SecondaryNav />
        </aside>
        <div className="col-span-3 h-6 my-3 bg-neutral-100"></div>
      </main>
    </div>
  );
}

export default App;
