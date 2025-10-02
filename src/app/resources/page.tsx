"use client";

import NavigationBar from "@/components/sections/navigation-bar";
import FooterSection from "@/components/sections/footer-section";
import CtaSection from "@/components/sections/cta-section";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What types of mortgage loans are available in California, and which one is right for me?",
    answer: "We offer several mortgage options: conventional loans, FHA, VA, jumbo loans, fixed-rate and adjustable-rate terms. The right loan depends on your credit score, down payment, property type, and whether you plan to stay long-term. We can assess your situation and recommend the best fit."
  },
  {
    question: "How much down payment do I need to buy a home in California?",
    answer: "That depends on the loan type. Conventional loans often require 5-20% down; FHA loans can go as low as 3.5%; VA loans may offer 0% down for eligible veterans. Your overall monthly cost (including taxes and insurance) and credit profile also factor in. We help you calculate what's realistic in your area."
  },
  {
    question: "What is the difference between pre-qualification and pre-approval for a mortgage?",
    answer: "Pre-qualification is an informal estimate of what you might afford based on basic financial info you give us. Pre-approval is more rigorous—it involves verifying your income, assets, and credit. Being pre-approved strengthens your offer when you're ready to buy."
  },
  {
    question: "How do I know what my home is worth in California?",
    answer: "We provide property valuation support using Comparative Market Analysis (CMA), recent local sales, property condition, and features. In many cases, we coordinate with professional appraisers. This helps both buyers and sellers make smart decisions."
  },
  {
    question: "How long does it take to close a home sale in California?",
    answer: "Typically it takes 30-45 days from accepted offer to closing for residential transactions. Commercial property closings might take longer. Timing depends on inspections, loan underwriting, title/escrow, and how quickly the parties respond."
  },
  {
    question: "What fees and costs should I expect when buying a home (closing costs)?",
    answer: "Besides your down payment, expect costs for loan origination, appraisal fees, title and escrow services, insurance, and property taxes. In California, \"closing costs\" often run about 2%-5% of the purchase price. We provide a detailed estimate early so there are no surprises."
  },
  {
    question: "Can I refinance my mortgage in California, and when does it make sense?",
    answer: "Yes, refinancing is possible. It makes sense if interest rates are lower than your current loan, if you've built equity, or want to switch loan types (e.g. adjustable to fixed). We help you calculate break-even points so you can see if refinancing would actually save you money."
  },
  {
    question: "How is my credit score used in qualifying for a mortgage, and can I improve it beforehand?",
    answer: "Lenders look at your credit score, payment history, existing debts, and more. The higher your score, the lower the interest you'll likely pay. You can improve your score by paying bills on time, reducing credit card debt, and avoiding new major credit inquiries before applying."
  },
  {
    question: "What licensing and guarantees should I look for in a mortgage lender or real estate broker in California?",
    answer: "Make sure the lender is registered under California Residential Mortgage Lending Act (CRMLA) or other required licenses, real estate agents/brokers should hold valid California Real Estate Broker License / Salesperson License. Also, a surety bond, compliance with state and federal consumer protection laws, transparency in fees—all help ensure you're working with a trustworthy provider."
  },
  {
    question: "How do FRMI's combined mortgage + real estate services benefit me compared to hiring separate companies?",
    answer: "With FRMI, you get both lending and real estate expertise under one roof. This means better communication, less duplication of work, faster response times, and potentially lower delays. Whether buying or selling, having integrated services can make the process smoother and more efficient."
  }
];

export default function ResourcesPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <NavigationBar />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Resources & FAQs
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Find answers to common questions about mortgages, real estate, and our services
              </p>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to know about working with FRMI
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-4 sm:px-6 py-4 sm:py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-base sm:text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </span>
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  {openIndex === index && (
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                      <div className="border-t border-gray-200 pt-4">
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Additional Resources
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our comprehensive guides and tools to help you make informed decisions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <HelpCircle className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Mortgage Calculator</h3>
                <p className="text-gray-600 mb-6">
                  Calculate your monthly payments and see how much home you can afford with our easy-to-use mortgage calculator.
                </p>
                <button className="text-primary font-semibold hover:text-primary/80 transition-colors">
                  Use Calculator →
                </button>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <HelpCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Home Buying Guide</h3>
                <p className="text-gray-600 mb-6">
                  Step-by-step guide to buying your first home in California, from pre-approval to closing.
                </p>
                <button className="text-primary font-semibold hover:text-primary/80 transition-colors">
                  Read Guide →
                </button>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <HelpCircle className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Refinancing Options</h3>
                <p className="text-gray-600 mb-6">
                  Learn about different refinancing options and when it makes sense to refinance your mortgage.
                </p>
                <button className="text-primary font-semibold hover:text-primary/80 transition-colors">
                  Explore Options →
                </button>
              </div>
            </div>
          </div>
        </section>

        <CtaSection 
          title="Still Have Questions?"
          description="Our expert team is here to help you with any questions about mortgages, real estate, or our services"
          primaryButtonText="Contact Us Today"
          secondaryButtonText="Get Pre-Approved"
          primaryHref="tel:+13102700416"
          secondaryHref="tel:+13102700416"
          variant="small"
        />
      </main>
      <FooterSection />
    </>
  );
}
