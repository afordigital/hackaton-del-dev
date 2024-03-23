import { AWARD_TYPE } from '../constants'
import { Award } from './common/Award'
import { Title } from './common/Title'
import { Slider } from './Slider'

const financialAwards = [
  {
    img: 'silver_medal.svg',
    alt: 'silver medal logo',
    title: '200€'
  },
  {
    img: 'gold_medal.svg',
    alt: 'gold medal logo',
    title: '300€'
  },
  {
    img: 'bronze_medal.svg',
    alt: 'bronze medal logo',
    title: '100€'
  }
]

const logitechAwards = [
  {
    img: 'webcam_mx_brio.webp',
    alt: 'webcam mx brio logo',
    title: 'Webcam MX BRIO'
  },
  {
    img: 'mx_master_3s.webp',
    alt: 'mx master 3s logo',
    title: 'MX Master 3S'
  },
  {
    img: 'mx_keys.webp',
    alt: 'mx keys logo',
    title: 'MX Keys'
  },
  {
    img: 'alfombrilla_logitech.webp',
    alt: 'alfombrilla logitech logo',
    title: 'Alfombrilla Logitech'
  }
]

export const Awards = () => {
  return (
    <section id="awards" className="flex flex-col w-full gap-y-[80px]">
      <Title>Premios</Title>

      <article className="award-container gap-8 xl:gap-x-16 h-fit hidden md:flex">
        {financialAwards.map((award, index) => (
          <Award
            key={index}
            img={award.img}
            alt={award.alt}
            title={award.title}
            awardType={AWARD_TYPE.PRICE}
          />
        ))}
      </article>

      <article className="block md:hidden">
        <Slider
          items={financialAwards}
          initialIndex={1}
          awardType={AWARD_TYPE.PRICE}
        />
      </article>

      <p className="font-bold text-[24px] text-cWhite">
        Solo por participar, entrarás automaticamente en el sorteo de los
        siguientes productos
        <span className="font-italic text-[#BEBEBE] text-[24px]">
          *solo residentes en España*
        </span>
      </p>

      <article className="hidden md:grid  md:grid-cols-2 lg:grid-cols-4 gap-8 h-fit">
        {logitechAwards.map((award, index) => (
          <Award
            key={index}
            img={award.img}
            alt={award.alt}
            title={award.title}
            awardType={AWARD_TYPE.GIFT}
          />
        ))}
      </article>

      <article className="block md:hidden">
        <Slider
          items={logitechAwards}
          initialIndex={2}
          awardType={AWARD_TYPE.GIFT}
        />
      </article>
    </section>
  )
}
