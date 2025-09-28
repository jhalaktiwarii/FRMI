"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

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

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.08),transparent_50%)] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="text-center mb-16"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Get answers to common questions about mortgages, real estate, and our integrated services.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
              >
                <AccordionItem 
                  value={`item-${index}`}
                  className="bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/60 px-6 py-4 shadow-sm"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 py-4 hover:no-underline data-[state=open]:text-blue-600 transition-colors duration-500">
                    <span className="pr-4">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed pt-2 pb-4 overflow-hidden">
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0, 
                        scale: 1,
                        transition: {
                          duration: 0.4,
                          ease: [0.25, 0.46, 0.45, 0.94],
                          delay: 0.1
                        }
                      }}
                      exit={{ 
                        opacity: 0, 
                        y: -10, 
                        scale: 0.95,
                        transition: {
                          duration: 0.3,
                          ease: [0.25, 0.46, 0.45, 0.94]
                        }
                      }}
                      className="origin-top"
                    >
                      {faq.answer}
                    </motion.div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p className="text-gray-600 mb-8 text-lg">
            Still have questions? We're here to help!
          </p>
          <Button
            asChild
            className="h-auto rounded-lg bg-primary px-8 py-4 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Link href="/contact">
              Contact Us
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
