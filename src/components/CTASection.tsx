import { ButtonLink } from "./common/ButtonLink"
import { Title } from "./common/Title"



export const CTASection = () => {
  return (
    <article className="w-full flex flex-col items-center justify-center gap-8">
        <Title>Busca un equipo y regístrate</Title>
        <ButtonLink to="register">Registrarme</ButtonLink>
    </article>
  )
}