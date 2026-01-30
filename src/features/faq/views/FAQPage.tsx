import { useState } from 'react';
import { faqData } from '../data/faqData';
import { useSEO } from '@/shared/hooks/useSEO';
import { AccordionItemProps } from '../types/AccordionItem';
import { CategoryDropdownProps } from '../types/CategoryDropdown';

const AccordionItem = ({ question, answer, isOpen, onClick }: AccordionItemProps) => {
  return (
    <div className="border border-gray-200 rounded-lg mb-2.5 overflow-hidden bg-white shadow-sm">
      <button 
        className={`w-full text-left px-4 py-3 md:px-5 md:py-4 flex justify-between items-center font-semibold text-sm md:text-base transition-colors duration-200 
          ${isOpen ? 'bg-blue-50 text-blue-600' : 'bg-white text-slate-700 hover:bg-gray-50'}`} 
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="pr-4">{question}</span>
        <span className="text-lg md:text-xl leading-none text-gray-400 flex-shrink-0">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      
      <div 
        className={`transition-all duration-300 ease-out overflow-hidden 
          ${isOpen ? 'max-h-[2000px] opacity-100 border-t border-gray-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="p-4 md:p-5 text-sm md:text-base text-gray-600 leading-relaxed [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:my-2.5 [&_li]:mb-2">
          {answer}
        </div>
      </div>
    </div>
  );
};


const CategoryDropdown = ({ title, isOpen, onClick, children }: CategoryDropdownProps) => {
  return (
    <div className="mb-4 rounded-xl border border-slate-200 overflow-hidden bg-slate-50">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center px-6 py-5 bg-white hover:bg-slate-50 transition-colors text-left"
      >
        <span className="text-xl font-bold text-slate-800">{title}</span>
        <svg 
          className={`w-6 h-6 text-slate-400 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'}`}>
         <div className="p-4 border-t border-slate-200 bg-slate-50/50">
            {children}
         </div>
      </div>
    </div>
  );
};

export default function FAQPage() {

  useSEO({
    title: "FAQ | Lipi Games - How to Play Lipi Epics, Kids & Brain Booster",
    description:
      "Find answers to frequently asked questions about Lipi Games. Learn how to play Lipi Epics (Mahabharat & Ramayan), Lipi Kids, and Brain Booster. Understand game rules, levels, and rewards.",
    canonical: "https://lipiinc.com/faq",
    keywords:
      "lipi games faq, lipi epics how to play, lipi kids help, brain booster guide, word cruise rules, mahabharata quiz, ramayana learning, lipi app support",
    ogTitle: "Frequently Asked Questions | Lipi Games",
    ogDescription:
      "Get help with Lipi Epics, Lipi Kids, Brain Booster, and Word Cruise. Learn game rules, levels, rewards, and more.",
    ogImage: "https://img.lipi.games/lipi-notifications/email/Lipi-cube-logo.png",
  });

  const [activeTab, setActiveTab] = useState('General');
  
  const [openIndex, setOpenIndex] = useState<number | string | null>(0);
  
  const [openCategory, setOpenCategory] = useState<string | null>('Mahabharat');

  const toggleAccordion = (id: number | string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  const toggleCategory = (category: string) => {
    if (openCategory === category) {
        setOpenCategory(null);
        setOpenIndex(null);
    } else {
        setOpenCategory(category);
        setOpenIndex(`${category}-0`);
    }
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    
    if (tab === "Lipi Epics : Mahabharat & Ramayan") {
        setOpenCategory('Mahabharat'); 
        setOpenIndex('Mahabharat-0');
    } else {
        setOpenIndex(0);
    }
  };

  const currentData = faqData[activeTab] as any;
  const isSimpleList = Array.isArray(currentData);

  return (
    <div className="mt-20 md:mt-24 w-full">
      <div className="max-w-[900px] mx-auto px-4 py-6 md:p-5 text-gray-800 font-sans leading-relaxed">
        <h2 className="text-center mb-6 md:mb-10 text-slate-700 text-2xl md:text-3xl font-bold">
          Frequently Asked Questions
        </h2>
        
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6 md:mb-8 border-b border-gray-100 pb-4">
          {Object.keys(faqData).map((tab) => (
            <button
              key={tab}
              className={`px-3 py-2 md:px-5 md:py-2.5 border-none cursor-pointer rounded-full font-semibold text-xs sm:text-sm md:text-base transition-all duration-200 
                ${activeTab === tab 
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30' 
                  : 'bg-slate-100 text-gray-500 hover:bg-slate-200'
                }`}
              onClick={() => handleTabChange(tab)}
            >
              {tab === "Lipi Epics : Mahabharat & Ramayan" ? "Lipi Epics" : tab}
            </button>
          ))}
        </div>

        <div className="flex flex-col">
          {isSimpleList ? (
            (currentData).map((item: any, index: number) => (
              <AccordionItem
                key={index}
                question={item.q}
                answer={item.a}
                isOpen={openIndex === index}
                onClick={() => toggleAccordion(index)}
              />
            ))
          ) : (
            Object.entries(currentData).map(([subSectionTitle, questions]) => (
              <CategoryDropdown 
                key={subSectionTitle}
                title={subSectionTitle}
                isOpen={openCategory === subSectionTitle}
                onClick={() => toggleCategory(subSectionTitle)}
              >
                 {(questions as any[]).map((item, index) => {
                  const uniqueId = `${subSectionTitle}-${index}`;
                  return (
                    <AccordionItem
                      key={uniqueId}
                      question={item.q}
                      answer={item.a}
                      isOpen={openIndex === uniqueId}
                      onClick={() => toggleAccordion(uniqueId)}
                    />
                  );
                })}
              </CategoryDropdown>
            ))
          )}
        </div>
      </div>
    </div>
  );
};