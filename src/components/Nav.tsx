import { Link, useLocation } from 'react-router-dom'
import { ROUTE } from '../routes'
import { AlignJustify, ChevronLeft } from 'lucide-react'
import { cn } from '../common/utils/cn'
import { useState } from 'react'

export const Nav = () => {
  const { pathname } = useLocation()
  const isHome = pathname === ROUTE.home
  const [isOpen, setIsOpen] = useState(false)
  const currentHash = window.location.hash
  const navItems = [
    { id: 'root', title: 'Inicio' },
    { id: 'rules', title: 'Reglas' },
    { id: 'sponsors', title: 'Patrocinadores' },
    { id: 'awards', title: 'Premios' },
    { id: 'faqs', title: 'Preguntas' }
  ]

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
      const elementPosition = element.offsetTop
      window.scrollTo({ top: elementPosition - 60, behavior: 'smooth' })
    }
  }

  const liElements = navItems.map((item) => (
    <li key={item.id}>
      <Link
        to={`#${item.id}`}
        onClick={() => {
          scrollToSection(item.id)
        }}
        className={classes.link(
          currentHash === `#${item.id}` || (!currentHash && item.id === 'root')
        )}
      >
        {item.title}
      </Link>
    </li>
  ))

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
          {liElements}
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
