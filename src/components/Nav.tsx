import { Link, useLocation } from 'react-router-dom'
import { ROUTE } from '../routes'
import { AlignJustify, ChevronLeft } from 'lucide-react'
import { cn } from '../common/utils/cn'
import { useState } from 'react'

export const Nav = () => {
  const { pathname } = useLocation()
  const isHome = pathname === ROUTE.home
  const [isOpen, setIsOpen] = useState(false)

  const classes = {
    container: cn(
      'container mx-auto relative flex justify-end px-8 lg:sticky lg:top-5 lg:z-30 lg:justify-center'
    ),
    nav: cn(
      'text-cWhite font-semibold text-[28px] lg:text-[20px] ',
      'absolute max-lg:right-8 max-lg:top-18',
      'lg:w-full lg:flex lg:mt-4 lg:justify-center ',
      'transition-transform z-30',
      {
        'max-lg:translate-y-[-300%]': !isOpen,
        'max-lg:translate-y-0': isOpen
      }
    ),
    list: cn(
      'py-5 px-10 lg:py-2 ',
      'flex flex-col gap-4 gap-x-[32px]',
      'lg:flex-row',
      'w-fit bg-[#0f0f0f]',
      'rounded-lg lg:rounded-full'
    ),
    link: (active: boolean) =>
      cn('hover:text-green cursor-pointer transition-colors', {
        'text-green': active
      })
  }

  const handleClick = () => setIsOpen(!isOpen)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return isHome ? (
    <header className={classes.container}>
      <button
        className="bg-transparent border-none text-white ml-auto mt-8 lg:hidden z-30"
        onClick={handleClick}
      >
        <AlignJustify className="w-full h-full" size={32} />
      </button>

      <nav className={classes.nav}>
        <ul className={classes.list}>
          <li>
            <Link to={ROUTE.home} className={classes.link(isHome)}>
              Inicio
            </Link>
          </li>

          <li>
            <Link
              to="#rules"
              onClick={() => {
                scrollToSection('rules')
              }}
              className={classes.link(false)}
            >
              Reglas
            </Link>
          </li>

          <li>
            <Link
              to="#sponsors"
              onClick={() => {
                scrollToSection('sponsors')
              }}
              className={classes.link(false)}
            >
              Patrocinadores
            </Link>
          </li>

          <li>
            <Link
              to="#awards"
              onClick={() => {
                scrollToSection('awards')
              }}
              className={classes.link(false)}
            >
              Premios
            </Link>
          </li>

          <li>
            <Link
              to="#faqs"
              onClick={() => {
                scrollToSection('faqs')
              }}
              className={classes.link(false)}
            >
              Preguntas
            </Link>
          </li>

          <li>
            <Link to={ROUTE.register} className={classes.link(false)}>
              Inscripción
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  ) : (
    <nav>
      <Link to={ROUTE.home} className="font-bold text-cWhite">
        <span className="flex gap-x-1 mt-10 px-8 xl:px-2">
          <ChevronLeft />
          Volver
        </span>
      </Link>
    </nav>
  )
}
