import { Awards } from './Awards'
import { CTASection } from './CTASection'
import { Faq } from './FAQ'
import { Footer } from './Footer'
import { Header } from './Header'
import { Rules } from './Rules'
import { Sponsors } from './Sponsors'

export const Home = () => {
  return (
    <main className='flex flex-col gap-y-[80px]'>
      <Header />
      <Rules />
      <Sponsors />
      <CTASection/>
      <Awards />
      <Faq />
      <CTASection/>
      <Footer />
    </main>
  )
}
