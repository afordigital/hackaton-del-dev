import { useNavigate } from 'react-router-dom'

import { Button } from "./common/Button"
import { Rule } from "./common/Rule"
import { Title } from "./common/Title"
import { ROUTE } from '../routes'

export const Rules = () => {
  const navigate= useNavigate() 
  return <article id="rules" className="flex flex-col gap-y-[80px] items-center w-full">
    <Title>¿En qué consiste?</Title>
    <section className="layout-responsive w-full">
      <Rule id={1} alt='person with computer logo' description="Máximo de 4 miembros en el equipo" />
      <Rule id={2} alt='person with heart logo' description="Este proyecto no tiene temática" />
      <Rule id={3} alt='persons talking logo' description="Empieza el 13 de abril y termina el 27 de abril" />
      <Rule id={4} alt='sending message logo' description="El día 4 de mayo se desvelarán los ganadores" />
    </section>
      <Button onClick={()=>{navigate(ROUTE.regulation)}}>Ver reglamento</Button>
  </article>
}
