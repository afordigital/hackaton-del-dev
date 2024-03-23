import Spline from '@splinetool/react-spline'
import { ButtonLink } from './common/ButtonLink'

export const Hero = () => {
  return (
    <section id="hero" className="flex justify-between relative md:mt-20">
      <article className="relative z-10">
        <h1 className="hero-title max-w-[12ch] title-gradient font-bold md:leading-28">
          La Hackathon Del Dev
        </h1>
        <h2 className="mt-10 text-[#AEB2B9] font-semibold hero-description">
          Una hackathon para cualquier dev
        </h2>
        <p className="text-[#AEB2B9] font-medium hero-caption mb-[24px]">
          Próxima edición 13 de abril del 2024
        </p>
        <ButtonLink to="register">Registrarme</ButtonLink>
      </article>
      <div className="h-[600px] w-fit max-lg:absolute max-lg:inset-y-0 max-lg:right-0 my-auto max-lg:z-0 hidden md:block">
        <Spline scene="https://prod.spline.design/M1HgjURyO4sZWucZ/scene.splinecode" />
      </div>
    </section>
  )
}
