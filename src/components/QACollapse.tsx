import { cn } from '../common/utils/cn'

interface QACollapseProps {
  /**
   * The question to be displayed on the Collapsible.
   */
  question?: string

  /**
   * The answer response associated with the Collapsible.
   */
  answer?: string

  /**
   * The unique identifier for the Expander component.
   */
  id: string

  /**
   * The CSS class to apply to the component.
   */
  className?: string

  /**
   * A flag indicating whether the Expander is currently expanded or not.
   */
  isExpanded?: boolean

  /**
   * The function to call when the Expander is clicked.
   * @param id - The id of the Expander that was clicked.
   */
  onClick: (id: string) => void
}

export const QACollapse = ({
  question,
  answer,
  id,
  className,
  isExpanded,
  onClick
}: QACollapseProps) => {
  const classes = {
    container: cn('relative w-full flex flex-col gap-4', className),
    button: cn(
      'flex gap-4 justify-between items-center',
      'bg-transparent border-none text-white',
      'z-1 relative',
      'transition-colors duration-300',
      'w-full h-full underline',
      'text-2xl font-bold',
      {
        'text-green': isExpanded
      }
    ),
    icon: cn(
      'h-6 w-6',
      'max-xs:hidden',
      'transition-transform duration-300 ease-in-out',
      {
        'rotate-90': isExpanded
      }
    ),
    collapse: cn('animate-fade-down', 'leading-relaxed text-lg')
  }

  const handleClick = () => onClick(id)

  return (
    <div className={classes.container}>
      <button className={classes.button} onClick={handleClick}>
        <span className="text-start text-balance">{question}</span>
        <img
          className={classes.icon}
          src="/images/faqs/chevron.svg"
          alt="chevron icon"
        />
      </button>

      {/* Expanded Content */}
      {isExpanded && <span className={classes.collapse}>{answer}</span>}
    </div>
  )
}
