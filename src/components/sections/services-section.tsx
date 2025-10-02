"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import CtaBannerSection from "./cta-banner-section";

// High-quality 4K images for real estate services
const serviceImages = {
  buyerRep: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
  sellerRep: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  transaction: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80",
  valuation: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  synergy: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const sectionVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.95,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
  },
};

const ServiceCard = ({ 
  imageSrc, 
  title, 
  points, 
  cta, 
  index 
}: { 
  imageSrc: string; 
  title: string; 
  points: string[]; 
  cta: string; 
  index: number;
}) => {
  return (
    <motion.div
      variants={sectionVariants}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full lg:w-1/2"
    >
      <motion.div
        className="h-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100"
      >
        {/* Image Section */}
        <div className="relative h-64 overflow-hidden">
          <Image
            src={imageSrc}
            alt={title}
            width={600}
            height={256}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </div>

        {/* Content Section */}
        <div className="p-8 space-y-6 h-full flex flex-col">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight"
          >
            {title}
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            className="space-y-3 flex-grow"
          >
            {points.map((point, pointIndex) => (
              <motion.div
                key={pointIndex}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 + pointIndex * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-700 leading-relaxed">{point}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
          >
            <Button
              className="w-full h-auto rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700"
            >
              {cta}
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ServiceComparisonRow = ({ 
  card1, 
  card2 
}: { 
  card1: { imageSrc: string; title: string; points: string[]; cta: string };
  card2: { imageSrc: string; title: string; points: string[]; cta: string };
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="flex flex-col lg:flex-row gap-8 lg:gap-6"
    >
      <ServiceCard {...card1} index={0} />
      <ServiceCard {...card2} index={1} />
    </motion.div>
  );
};



export default function ServicesSection() {
  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-blue-50/30 py-[120px] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-emerald-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold tracking-[-2px] text-gray-900 mb-6"
          >
            Real Estate Services
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Comprehensive real estate solutions designed to meet your every need, from buying and selling to transaction coordination and property valuation.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
           <ServiceComparisonRow
            card1={{
              imageSrc: serviceImages.buyerRep,
              title: "Helping California Buyers Find — and Finance — Their Homes.",
              points: [
                "We represent buyers at every stage: property search, negotiations, inspections, and closing.",
                "With FRMI, you get the unique advantage of real estate guidance and mortgage expertise under one roof.",
                "We simplify the process, saving you time, money, and stress."
              ],
              cta: "Find My Dream Home"
            }}
            card2={{
              imageSrc: serviceImages.sellerRep,
              title: "Maximize Your Property Value With Expert Representation.",
              points: [
                "We provide professional listing, staging, and marketing strategies to maximize your property's value.",
                "Our agents combine local market insight with brokerage and lending knowledge to attract the right buyers.",
                "You get a streamlined sale, from pricing to escrow closing."
              ],
              cta: "List My Home Today"
            }}
          />

          {/* Transaction & Valuation Row */}
          <ServiceComparisonRow
            card1={{
              imageSrc: serviceImages.transaction,
              title: "Seamless Transactions, From Start to Finish.",
              points: [
                "Paperwork, deadlines, escrow, and compliance — we coordinate every step to keep your transaction on track.",
                "Our team ensures seamless communication between buyers, sellers, lenders, and escrow officers.",
                "You stay informed while we handle the complexities."
              ],
              cta: "Simplify My Transaction"
            }}
            card2={{
              imageSrc: serviceImages.valuation,
              title: "Know Your Property's True Worth.",
              points: [
                "Whether buying or selling, accurate property valuation is critical.",
                "We provide comparative market analysis and coordinate professional appraisals.",
                "With FRMI's insight, you make decisions with confidence and clarity."
              ],
              cta: "Get My Home Valued"
            }}
          />
        </motion.div>
      </div>

      {/* Full width CTA Banner */}
     <div className="mt-32">
     <CtaBannerSection />
     </div>
    </section>
  );
}