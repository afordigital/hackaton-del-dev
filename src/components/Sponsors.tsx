import { Title } from './common/Title'

export const Sponsors = () => {
  return (
    <article
      id="sponsors"
      className="flex flex-col gap-y-[80px] mt-14 items-center w-full"
    >
      <Title>Patrocinadores</Title>
      <section className="grid md:grid-cols-[1fr_0.5fr_1fr] place-items-center gap-32 w-full">
        <img src="/images/sponsors/logitech.svg" alt="logitech logo" />
        <img src="/images/sponsors/getmagical.svg" alt="getmagical logo" />
        <img src="/images/sponsors/4geeks.svg" alt="4geeks logo" />
      </section>
    </article>
  )
}
