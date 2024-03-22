import { Link } from 'react-router-dom'
import { Button } from './common/Button'
import Spline from '@splinetool/react-spline'
import { routes } from '../routes'

export const Header = () => {
  return (
    <header id="header" className="grid grid-cols-2 mb-32 mt-20">
      <section>
        <h1 className="w-full text-7xl title-gradient font-bold leading-22">
          La Hackathon <br /> Del Dev
        </h1>
        <h2 className="text-2xl mt-10">Una hackathon para cualquier dev</h2>
        <p>Próxima edición 13 de abril del 2024</p>
        <Link to={routes.register}>
          <Button onClick={() => {}}>Registrarme</Button>
        </Link>
      </section>
      <div className="h-[600px]">
        <Spline scene="https://prod.spline.design/M1HgjURyO4sZWucZ/scene.splinecode" />
      </div>
    </header>
  )
}
