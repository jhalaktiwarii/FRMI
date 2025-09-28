import Image from "next/image";

interface ServiceCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const services: ServiceCardProps[] = [
  {
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fb03db6c-5ef0-4c5d-a106-339f02e1dcca-housepluss-framer-website/assets/images/WoYpopCGq2Wmr2pB4xK1lqdSLvc-12.png",
    title: "Property Listings",
    description: "Explore exclusive, high-end properties in prime locations, handpicked for discerning buyers seeking luxury homes.",
  },
  {
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fb03db6c-5ef0-4c5d-a106-339f02e1dcca-housepluss-framer-website/assets/images/hxepYnvDhVO5ozqSB81Lr3XvIiE-13.png",
    title: "Real Estate Consultancy",
    description: "Tailored guidance from expert consultants to help you find and invest in your dream luxury estate.",
  },
  {
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fb03db6c-5ef0-4c5d-a106-339f02e1dcca-housepluss-framer-website/assets/images/CSNzNvXprIXJqTL48RDUXjFGbQ-14.png",
    title: "Property Management",
    description: "Comprehensive management services ensuring the seamless upkeep, security, and value of your prestigious property.",
  },
];

const ServiceCard = ({ imageSrc, title, description }: ServiceCardProps) => (
  <div className="relative rounded-2xl overflow-hidden bg-dark-gray h-[480px]">
    <Image
      src={imageSrc}
      alt={`${title} service`}
      fill
      className="object-cover opacity-50 absolute inset-0"
    />
    <div className="relative z-10 flex flex-col justify-end h-full p-10 gap-4">
      <h4 className="text-[32px] font-medium text-pure-white leading-tight">
        {title}
      </h4>
      <p className="text-lg text-pure-white/70 leading-normal">
        {description}
      </p>
    </div>
  </div>
);

export default function ServicesSection() {
  return (
    <section className="bg-background py-[120px]">
      <div className="container flex flex-col items-center gap-[60px]">
        <h2 className="text-[56px] font-bold tracking-[-1px] leading-tight text-center text-foreground">
          Houseplus Services
        </h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              imageSrc={service.imageSrc}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}