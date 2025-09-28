import Image from "next/image";

const processData = [
  {
    step: "Step 1: Consultation",
    title: "Share your requirement with our agent",
    description: "Our experts dive deep into your preferences, lifestyle needs, and investment goals, crafting a personalized plan.",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fb03db6c-5ef0-4c5d-a106-339f02e1dcca-housepluss-framer-website/assets/images/DmUo4z7POFfG8RQ0oES8aahlNg-9.png",
    alt: "Illustration of a person pointing at a board with colorful cards",
  },
  {
    step: "Step 2: Curation",
    title: "We connect you with the best property owner",
    description: "We handpick extraordinary properties matching your criteria, arranging private viewings or virtual tours.",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fb03db6c-5ef0-4c5d-a106-339f02e1dcca-housepluss-framer-website/assets/images/e9zMwjaW4Cm6NXomsBOOi98-10.png",
    alt: "Illustration of a person holding a laptop showing a link icon",
  },
  {
    step: "Step 3: Acquisition",
    title: "Get seamless transition to your dream home",
    description: "Our team manages the entire acquisition process, from expert negotiations to concierge services.",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fb03db6c-5ef0-4c5d-a106-339f02e1dcca-housepluss-framer-website/assets/images/Qm3pwZnpkmFMH9ywozSmWgkc0xA-11.png",
    alt: "Illustration of a person holding a key with a checkmark icon nearby",
  },
];

const ProcessSection = () => {
  return (
    <section className="bg-dark-gray py-[120px] text-white">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-[80px]">
          <div className="max-w-[618px] text-center">
            <h2 className="text-[56px] font-bold leading-[1.2] tracking-[-1px]">
              Houseplus make it simple for finding home
            </h2>
          </div>
          <div className="flex w-full flex-col gap-[120px]">
            {processData.map((item, index) => (
              <div
                key={index}
                className={`flex w-full flex-col items-center gap-y-12 lg:flex-row lg:justify-between lg:gap-x-[100px] ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="flex max-w-[460px] flex-col gap-6 text-center lg:text-left">
                  <p className="text-base font-medium uppercase tracking-[1.6px] text-white/70">
                    {item.step}
                  </p>
                  <h3 className="text-[40px] font-bold leading-[1.2] tracking-[-0.8px]">
                    {item.title}
                  </h3>
                  <p className="text-lg leading-relaxed text-white/70">
                    {item.description}
                  </p>
                </div>
                <div className="relative h-[460px] w-[460px] shrink-0">
                  <Image
                    src={item.imageSrc}
                    alt={item.alt}
                    width={460}
                    height={460}
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;