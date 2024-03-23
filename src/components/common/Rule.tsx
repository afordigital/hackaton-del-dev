type RuleProps = {
  id: number
  alt: string
  description: string
}

export const Rule = ({ id, alt, description }: RuleProps) => {
  return (
    <div className="grid place-items-center gap-2">
      <img loading="lazy" src={`/images/rules/rule_${id}.png`} alt={alt} />
      <p className="text-center font-bold text-[24px] text-balance">
        {description}
      </p>
    </div>
  )
}
