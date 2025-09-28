import Image from "next/image";

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fb03db6c-5ef0-4c5d-a106-339f02e1dcca-housepluss-framer-website/assets/svgs/13qduwjkiqf8u2yC1KetQrpJhZg-5.svg",
    title: "Integrated Services",
    description: "Get both mortgage lending and real estate brokerage under one roof for seamless transactions.",
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fb03db6c-5ef0-4c5d-a106-339f02e1dcca-housepluss-framer-website/assets/svgs/egd4W9hpcOYlzJGdmEkjXbI-6.svg",
    title: "Transparent & Reliable",
    description: "We deliver reliable, transparent, and competitive financing with integrity in every transaction.",
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fb03db6c-5ef0-4c5d-a106-339f02e1dcca-housepluss-framer-website/assets/svgs/TRRglLule9jftNbdqUdb5b77lr4-7.svg",
    title: "Expert Guidance",
    description: "Combining financial expertise with personalized service to turn challenges into opportunities.",
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fb03db6c-5ef0-4c5d-a106-339f02e1dcca-housepluss-framer-website/assets/svgs/lrbaIcI4WKZrGVw1PY3n5Y05Bg4-8.svg",
    title: "Risk Management",
    description: "Committed to compliance and risk management ensuring trust with clients and regulatory partners.",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="bg-white py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16 xl:gap-20">
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-[4/3] lg:aspect-[3/4] w-full overflow-hidden rounded-2xl">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fb03db6c-5ef0-4c5d-a106-339f02e1dcca-housepluss-framer-website/assets/images/eeotjixV0KSCecnm4B71u4kPQYY-15.png"
                alt="Luxury home with pool"
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          {/* Content Section */}
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
            <div className="space-y-8 lg:space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                  Why Choose FRMI?
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">
                  Our mission is to provide innovative financial solutions that empower individuals and businesses during critical moments of need, combining mortgage lending expertise with real estate services.
                </p>
              </div>
              
              {/* Benefits Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
                {benefits.map((benefit) => (
                  <div key={benefit.title} className="space-y-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 p-3">
                      <Image 
                        src={benefit.icon} 
                        alt="" 
                        width={24} 
                        height={24} 
                        className="w-6 h-6" 
                      />
                    </div>
                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900">
                      {benefit.title}
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;