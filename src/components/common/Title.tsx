type TitleProps = {
  children: string
}

export const Title = ({ children }: TitleProps) => {
  return (
    <h1 className="text-fluid-title text-balance  font-bold title-gradient">
      {children}
    </h1>
  )
}
