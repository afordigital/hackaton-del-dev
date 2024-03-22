import { Title } from "./common/Title"

export const Sponsors = () => {
  return <article id="sponsors" className="flex flex-col gap-y-[80px] mt-14 items-center w-full">
  <Title>Patrocinadores</Title>
  <section className="flex justify-center gap-x-32 w-full">
    <img src="/images/sponsors/logitech.svg" alt='logitech logo' className="flex items-center justify-center aspect-[3/2] object-contain" />
    <img src="/images/sponsors/getmagical.svg" alt='getmagical logo' className="aspect-[3/2] object-contain" />
    <img src="/images/sponsors/4geeks.svg" alt='4geeks logo' className="aspect-[3/2] object-contain" />
  </section>
</article>
}
