import { Link } from "react-router-dom";

export const Nav = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="w-full flex justify-center mt-10 font-semibold justify-center">
      <ul className="flex gap-x-4 w-fit bg-[#0f0f0f] py-2 px-16 rounded-full">
        <p className="hover:text-green cursor-pointer">Inicio</p>
        <Link
          to="#rules"
          onClick={() => {
            scrollToSection("rules");
          }}
          className="hover:text-green cursor-pointer"
        >
          Reglas
        </Link>
        <Link
          to="#sponsors"
          onClick={() => {
            scrollToSection("sponsors");
          }}
          className="hover:text-green cursor-pointer"
        >
          Patrocinadores
        </Link>
        <Link
          to="#awards"
          onClick={() => {
            scrollToSection("awards");
          }}
          className="hover:text-green cursor-pointer"
        >
          Premios
        </Link>
        <p className="hover:text-green cursor-pointer">Registro</p>
      </ul>
    </nav>
  );
};
