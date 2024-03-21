import { Route, Routes } from "react-router-dom";
import { Rules } from "./components/Rules";
import { Register } from "./components/Register";
import { Home } from "./components/Home";

function App() {
  return (
    <main className="w-screen h-screen flex bg-cBackogrund text-cWhite">
      <section className="max-w-5xl mx-auto w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/regulation" element={<Rules />} />
        </Routes>
      </section>
    </main>
  );
}

export default App;
