import Image from "next/image";

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fb03db6c-5ef0-4c5d-a106-339f02e1dcca-housepluss-framer-website/assets/svgs/13qduwjkiqf8u2yC1KetQrpJhZg-5.svg",
    title: "Exclusive Listings",
    description: "Discover handpicked, luxury properties in exclusive locations.",
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fb03db6c-5ef0-4c5d-a106-339f02e1dcca-housepluss-framer-website/assets/svgs/egd4W9hpcOYlzJGdmEkjXbI-6.svg",
    title: "Personalized Service",
    description: "Discover handpicked, luxury properties in exclusive locations.",
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fb03db6c-5ef0-4c5d-a106-339f02e1dcca-housepluss-framer-website/assets/svgs/TRRglLule9jftNbdqUdb5b77lr4-7.svg",
    title: "Global Network",
    description: "Discover handpicked, luxury properties in exclusive locations.",
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fb03db6c-5ef0-4c5d-a106-339f02e1dcca-housepluss-framer-website/assets/svgs/lrbaIcI4WKZrGVw1PY3n5Y05Bg4-8.svg",
    title: "Trusted Expertise",
    description: "Discover handpicked, luxury properties in exclusive locations.",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="bg-white py-[120px]">
      <div className="container">
        <div className="flex flex-col items-center gap-[60px] lg:flex-row lg:items-center lg:gap-5">
          <div className="w-full lg:flex-1">
            <div className="relative aspect-[606/666] w-full overflow-hidden rounded-xl">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fb03db6c-5ef0-4c5d-a106-339f02e1dcca-housepluss-framer-website/assets/images/eeotjixV0KSCecnm4B71u4kPQYY-15.png"
                alt="Houseplus Image"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex w-full flex-col items-start gap-5 lg:flex-1">
            <h2 className="text-5xl font-bold leading-tight -tracking-wider text-dark-gray md:text-[56px] md:leading-[1.2] md:-tracking-[1px]">
              Why People Choose Houseplus?
            </h2>
            <p className="text-lg leading-relaxed text-medium-gray lg:max-w-[530px]">
              Guiding principles that shape our approach to luxury real estate, ensuring unparalleled service and exceptional experiences for our discerning clientele.
            </p>
            <div className="mt-10 grid w-full grid-cols-1 gap-x-10 gap-y-[60px] sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex flex-col items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-light-gray p-3">
                    <Image src={benefit.icon} alt="" width={24} height={24} />
                  </div>
                  <h3 className="text-2xl font-medium leading-snug text-dark-gray">
                    {benefit.title}
                  </h3>
                  <p className="font-['Inter'] text-base font-normal leading-normal text-medium-gray">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;