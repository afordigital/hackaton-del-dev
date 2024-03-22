import { useState } from 'react'
import { faqs } from '../data/faqs'
import { QACollapse } from './QACollapse'

export const Faq = () => {
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null)

  const handleExpanderClick = (id: string) => {
    setExpandedFaq((prev) => (prev === id ? null : id))
  }
  const renderFaqs = () => {
    return faqs.map((faq) => (
      <QACollapse
        id={faq.question}
        key={faq.question}
        question={faq.question}
        answer={faq.answer}
        isExpanded={expandedFaq === faq.question}
        onClick={handleExpanderClick}
      />
    ))
  }

  return <div className="flex flex-col gap-10 my-20">{renderFaqs()}</div>
}
