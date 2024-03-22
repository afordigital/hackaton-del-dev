import { Link, useLocation } from "react-router-dom";
import { routes } from "../routes";
import { ChevronLeft } from "lucide-react";

export const Nav = () => {
  const { pathname } = useLocation();
  const isHome = pathname === routes.home;

  const linkClass = (active: boolean)=> `hover:text-green cursor-pointer ${active ? "text-green" : ""}`;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return isHome ? (
    <nav className="w-full flex justify-center mt-10 font-semibold justify-center">
      <ul className="flex gap-x-5 w-fit bg-[#0f0f0f] py-2 px-10 rounded-full">
        <Link
          to={routes.home}
          className={linkClass(isHome)}
        >
          Inicio
        </Link>
        <Link
          to={routes.register}
          className={linkClass(false)}
        >
          Inscripción
        </Link>
        <Link
          to="#sponsors"
          onClick={() => {
            scrollToSection("sponsors");
          }}
          className={linkClass(false)}
        >
          Patrocinadores
        </Link>
        <Link
          to="#awards"
          onClick={() => {
            scrollToSection("awards");
          }}
          className={linkClass(false)}
        >
          Premios
        </Link>
        <Link
          to="#rules"
          onClick={() => {
            scrollToSection("rules");
          }}
          className={linkClass(false)}
        >
          Reglamento
        </Link>

      </ul>
    </nav>
  ) : (
    <Link to={routes.home} className="font-bold">
      <span className="flex gap-x-1 mt-10">
        <ChevronLeft />
        Volver

      </span>
    </Link>
  )
};
