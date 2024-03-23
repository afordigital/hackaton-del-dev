import { useState } from 'react'
import { faqs } from '../data/faqs'
import { QACollapse } from './QACollapse'
import { Title } from './common/Title'

export const Faq = () => {
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null)

  const handleExpanderClick = (id: string) => {
    setExpandedFaq((prev) => (prev === id ? null : id))
  }
  const renderFaqs = () =>
    faqs.map((faq) => (
      <QACollapse
        id={faq.question}
        key={faq.question}
        question={faq.question}
        answer={faq.answer}
        isExpanded={expandedFaq === faq.question}
        onClick={handleExpanderClick}
      />
    ))

  return (
    <section id="faqs" className="flex flex-col items-center gap-10 my-20">
      <Title>Faqs</Title>
      {renderFaqs()}
    </section>
  )
}
