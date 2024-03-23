import { useState } from 'react'
import { Award } from './common/Award'
import { AWARD_TYPE } from '../constants'
import { ArrowLeft, ArrowRight } from 'lucide-react'

type Award = {
  img: string
  alt: string
  title: string
}

type SliderProps = {
  items: Award[]
  awardType: AWARD_TYPE
  initialIndex: number
}

export const Slider = ({ items, awardType, initialIndex }: SliderProps) => {
  const [index, setIndex] = useState(initialIndex)

  const prevSlide = () => {
    if (index != 0) {
      setIndex(index - 1)
    }
  }

  const nextSlide = () => {
    if (index < items.length - 1) {
      setIndex(index + 1)
    }
  }

  return (
    <div className="flex items-center">
      {/* previous */}
      <button
        className="absolute ml-12 z-1 left-0 bg-[#414141] p-2 rounded-full"
        onClick={prevSlide}
      >
        <ArrowLeft />
      </button>
      {
        <Award
          img={items[index].img}
          alt={items[index].alt}
          title={items[index].title}
          awardType={awardType}
        />
      }
      {/* next */}
      <button
        className="absolute mr-12 z-1 right-0 bg-[#414141] p-2 rounded-full"
        onClick={nextSlide}
      >
        <ArrowRight />
      </button>
    </div>
  )
}
