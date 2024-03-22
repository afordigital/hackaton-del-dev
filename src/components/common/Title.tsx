
type TitleProps = {
    children: string;
}

export const Title = ({children}: TitleProps) => {
  return (
    <h1 className="text-[80px] font-bold title-gradient">{children}</h1>
  )
}