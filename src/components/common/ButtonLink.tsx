import { FC } from 'react'
import { Link } from 'react-router-dom'
import { ROUTE } from '../../routes'

type Props = {
  to: keyof typeof ROUTE
  children: React.ReactNode
}

export const ButtonLink: FC<Props> = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="w-fit px-[40px] py-[12px] flex items-center justify-center bg-cGreenButton border border-cGreenStroke rounded-[5px] hover:bg-[#3DA373]"
    >
      <p className="text-cWhite font-semibold text-[24px]">{children}</p>
    </Link>
  )
}
