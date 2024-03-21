import { Link } from "react-router-dom";
import { Button } from "./common/Button";

export const Header = () => {
  return (
    <header id="header" className="grid grid-cols-2 mb-32">
      <section>
        <h1 className="w-full text-4xl">La Hackathon Del Dev</h1>
        <h2>Una hackathon para cualquier dev</h2>
        <p>Próxima edición 13 de abril del 2024</p>
        <Link to="/register">
          <Button onClick={() => {}}>Registrarme</Button>
        </Link>
      </section>
      <p className="text-7xl">33</p>
    </header>
  );
};
