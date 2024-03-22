type ButtonProps = {
  children: React.ReactNode
  onClick: () => void
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      className="px-[40px] py-[12px] flex items-center justify-center bg-cGreenButton border border-cGreenStroke rounded-[5px] hover:bg-[#3DA373]"
      onClick={onClick}
    >
      <p className="text-cWhite font-semibold text-[24px]">{children}</p>
    </button>
  )
}
