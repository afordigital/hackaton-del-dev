import { Link, useLocation } from 'react-router-dom'
import { ROUTE } from '../routes'
import { ChevronLeft } from 'lucide-react'

export const Nav = () => {
  const { pathname } = useLocation()
  const isHome = pathname === ROUTE.home

  const linkClass = (active: boolean) =>
    `hover:text-green cursor-pointer ${active ? 'text-green' : ''}`

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return isHome ? (
    <nav className="w-full flex text-[20px] justify-center mt-16 font-semibold justify-center sticky z-10 top-5">
      <ul className="flex gap-x-[32px] w-fit bg-[#0f0f0f] py-2 px-10 rounded-full">
        <Link to={ROUTE.home} className={linkClass(isHome)}>
          Inicio
        </Link>
        <Link
          to="#rules"
          onClick={() => {
            scrollToSection('rules')
          }}
          className={linkClass(false)}
        >
          Reglas
        </Link>
        <Link
          to="#sponsors"
          onClick={() => {
            scrollToSection('sponsors')
          }}
          className={linkClass(false)}
        >
          Patrocinadores
        </Link>
        <Link
          to="#awards"
          onClick={() => {
            scrollToSection('awards')
          }}
          className={linkClass(false)}
        >
          Premios
        </Link>
        <Link
          to="#faq"
          onClick={() => {
            scrollToSection('faq')
          }}
          className={linkClass(false)}
        >
          Preguntas
        </Link>
        <Link to={ROUTE.register} className={linkClass(false)}>
          Inscripción
        </Link>
      </ul>
    </nav>
  ) : (
    <Link to={ROUTE.home} className="font-bold">
      <span className="flex gap-x-1 mt-10 px-8 xl:px-2">
        <ChevronLeft />
        Volver
      </span>
    </Link>
  )
}
