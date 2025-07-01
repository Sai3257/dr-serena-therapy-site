"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do you accept insurance?",
    answer: "No, but a superbill is provided for self-submission to your insurance company for potential reimbursement. Many clients find that their insurance covers a portion of out-of-network therapy costs."
  },
  {
    question: "Are online sessions available?",
    answer: "Yes—all virtual sessions are conducted via secure Zoom meetings. Online therapy provides the same level of care and effectiveness as in-person sessions, with the added convenience of attending from your comfortable space."
  },
  {
    question: "What is your cancellation policy?",
    answer: "24-hour notice is required for all cancellations or rescheduling. Sessions cancelled with less than 24 hours notice will be charged the full session fee, except in cases of emergency."
  }
];

export default function FAQ() {
  return (
    <section id="faqs" className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 scroll-mt-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 font-medium">
            Everything you need to know about working together
          </p>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20">
          <Accordion type="single" collapsible className="space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-100/50 pb-6">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-800 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:bg-clip-text transition-all-300 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pt-4 font-medium">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}