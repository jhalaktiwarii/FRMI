import Image from "next/image";

const processData = [
  {
    step: "Step 1: Pre-Approval",
    title: "Get pre-approved for your mortgage",
    description: "Start with our streamlined pre-approval process. We assess your financial profile and provide you with a pre-approval letter that strengthens your buying power.",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fb03db6c-5ef0-4c5d-a106-339f02e1dcca-housepluss-framer-website/assets/images/DmUo4z7POFfG8RQ0oES8aahlNg-9.png",
    alt: "Illustration of a person pointing at a board with colorful cards",
  },
  {
    step: "Step 2: Property Search",
    title: "Find your perfect home with our expertise",
    description: "Our real estate agents work with you to find properties that match your criteria. We provide market insights, property valuations, and coordinate viewings.",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fb03db6c-5ef0-4c5d-a106-339f02e1dcca-housepluss-framer-website/assets/images/e9zMwjaW4Cm6NXomsBOOi98-10.png",
    alt: "Illustration of a person holding a laptop showing a link icon",
  },
  {
    step: "Step 3: Seamless Closing",
    title: "Complete your transaction with confidence",
    description: "Our integrated team handles everything from loan processing to closing coordination. Experience faster, smoother transactions with our combined mortgage and real estate services.",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fb03db6c-5ef0-4c5d-a106-339f02e1dcca-housepluss-framer-website/assets/images/Qm3pwZnpkmFMH9ywozSmWgkc0xA-11.png",
    alt: "Illustration of a person holding a key with a checkmark icon nearby",
  },
];

const ProcessSection = () => {
  return (
    <section className="bg-dark-gray py-8 sm:py-12 md:py-16 lg:py-20 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 sm:gap-10 md:gap-12">
          <div className="max-w-[600px] text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              FRMI makes home buying simple and seamless
            </h2>
          </div>
          <div className="flex w-full flex-col gap-8 sm:gap-10 md:gap-12">
            {processData.map((item, index) => (
              <div
                key={index}
                className={`flex w-full flex-col items-center gap-6 sm:gap-8 lg:flex-row lg:justify-between lg:gap-8 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="flex max-w-[400px] flex-col gap-3 sm:gap-4 text-center lg:text-left">
                  <p className="text-xs sm:text-sm font-medium uppercase tracking-wider text-white/70">
                    {item.step}
                  </p>
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed text-white/70">
                    {item.description}
                  </p>
                </div>
                <div className="relative h-[200px] w-[200px] sm:h-[240px] sm:w-[240px] md:h-[280px] md:w-[280px] lg:h-[320px] lg:w-[320px] shrink-0">
                  <Image
                    src={item.imageSrc}
                    alt={item.alt}
                    width={320}
                    height={320}
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