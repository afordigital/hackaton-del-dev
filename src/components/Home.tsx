import { Awards } from './Awards'
import { CTASection } from './CTASection'
import { Faq } from './FAQ'
import { Hero } from './Hero'
import { Rules } from './Rules'
import { Sponsors } from './Sponsors'

export const Home = () => {
  return (
    <div className="flex flex-col gap-y-[80px] container mx-auto mt-10">
      <Hero />
      <Rules />
      <Sponsors />
      <CTASection />
      <Awards />
      <Faq />
      <CTASection />
    </div>
  )
}
