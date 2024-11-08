import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible';

const FAQ = () => {
  const faqs = [
    {
      question: "What is this tool?",
      answer: "Description of the tool and its benefits"
    },
    {
      question: "How does it work?",
      answer: "Explanation of how the tool works"
    },
    {
      question: "What are the benefits?",
      answer: "List of benefits and advantages"
    }
  ];

  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">FAQ</h2>
      <div className="max-w-2xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <Collapsible key={index} className="bg-gray-900 p-6 rounded-xl transition-all duration-300 ease-in-out">
            <CollapsibleTrigger className="flex justify-between items-center font-semibold mb-2 w-full">
             
              {faq.question}
              <span className="text-xl mr-2">+</span>
            </CollapsibleTrigger>
            <CollapsibleContent className="text-gray-400 transition-all duration-300 ease-in-out">
              {faq.answer}
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>
    </section>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ;