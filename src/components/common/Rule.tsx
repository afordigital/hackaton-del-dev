type RuleProps = {
  id: number
  alt: string
  description: string
}

export const Rule = ({ id, alt, description }: RuleProps) => {
  return (
    <div className="flex flex-col items-center gap-[64px]">
      <img
        src={`/images/rules/rule_${id}.png`}
        alt={alt}
        className="object-contain h-[200px] w-[300px]"
      />
      <p className="text-center font-bold text-[24px]">{description}</p>
    </div>
  )
}
