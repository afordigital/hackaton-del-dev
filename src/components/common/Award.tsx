import { AWARD_TYPE } from '../../constants'

type AwardProps = {
  img: string
  alt: string
  title: string
  awardType: AWARD_TYPE
}

export const Award = ({ img, alt, title, awardType }: AwardProps) => {
  return (
    <div
      className={`box bg-cSecondary h-full drop-shadow-customShadow ${awardType === AWARD_TYPE.PRICE ? 'px-20' : 'px-8'} flex flex-col gap-4 items-center border border-cStrokeBox rounded-[5px] py-8 w-full h-fit lg:max-h-[400px]`}
    >
      <img src={`/images/rewards/${img}`} alt={alt} className="my-auto" />

      <p
        className={`text-cWhite text-center ${awardType === AWARD_TYPE.PRICE ? 'text-[64px]' : 'text-[24px]'}  font-bold`}
      >
        {title}
      </p>
    </div>
  )
}

// flex-col items-end md:flex-row md:items-center even:items-center
