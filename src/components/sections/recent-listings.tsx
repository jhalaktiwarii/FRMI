import Image from 'next/image';
import Link from 'next/link';

const listingsData = [
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fb03db6c-5ef0-4c5d-a106-339f02e1dcca-housepluss-framer-website/assets/images/fLJhvcCTMdVxVbQzJY3BC70NdA-2.png",
    price: "$12506",
    status: "FOR RENT",
    title: "Modern 2-Bedroom Loft in Manhatta, New York",
    sqft: "1000 sq.ft",
    beds: "2 Bed",
    baths: "3 Bath",
    link: "https://housepluss.framer.website/listings/modern-2-bedroom-loft-in-manhatta-new-york",
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fb03db6c-5ef0-4c5d-a106-339f02e1dcca-housepluss-framer-website/assets/images/3L5QJTu9PG2YFMCWZmWGWta6nFI-4.png",
    price: "$4596",
    status: "FOR RENT",
    title: "Exquisite Beachfront Villa in Phuket, Thailand",
    sqft: "1,236 sq.ft",
    beds: "3 Bed",
    baths: "2 Bath",
    link: "https://housepluss.framer.website/listings/exquisite-beachfront-villa-in-phuket-thailand",
  },
  {
    image: "https://framerusercontent.com/images/3L5QJTu9PG2YFMCWZmWGWta6nFI.png",
    price: "$58947",
    status: "FOR RENT",
    title: "Luxurious 5-Bedroom Estate in Cannes, France",
    sqft: "563 sq.ft",
    beds: "3 Bed",
    baths: "1 Bath",
    link: "https://housepluss.framer.website/listings/luxurious-5-bedroom-estate-in-cannes-france",
    fallbackImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fb03db6c-5ef0-4c5d-a106-339f02e1dcca-housepluss-framer-website/assets/images/1nxqckykPKHYdB1IpVembIjhs0-7.png"
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fb03db6c-5ef0-4c5d-a106-339f02e1dcca-housepluss-framer-website/assets/images/X9axoG6sHjun9fAygv82WX7Ec0-5.png",
    price: "$25698",
    status: "FOR SALE",
    title: "Charming 3-Bedroom Townhouse in London, England",
    sqft: "698 sq.ft",
    beds: "5 Bed",
    baths: "3 Bath",
    link: "https://housepluss.framer.website/listings/charming-3-bedroom-townhouse-in-london-england",
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fb03db6c-5ef0-4c5d-a106-339f02e1dcca-housepluss-framer-website/assets/images/b6KZPRJiwnAnBjqLr6tLIMMvMHE-6.png",
    price: "$59687",
    status: "FOR RENT",
    title: "Contemporary 2-Bedroom Apartment in Sydney, Australia",
    sqft: "645 sq.ft",
    beds: "2 Bed",
    baths: "1 Bath",
    link: "https://housepluss.framer.website/listings/contemporary-2-bedroom-apartment-in-sydney-australia",
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fb03db6c-5ef0-4c5d-a106-339f02e1dcca-housepluss-framer-website/assets/images/1nxqckykPKHYdB1IpVembIjhs0-7.png",
    price: "$1258",
    status: "FOR RENT",
    title: "Stylish 3-Bedroom Condo in Miami Beach, Florida",
    sqft: "1500 sq.ft",
    beds: "6 Bed",
    baths: "3 Bath",
    link: "https://housepluss.framer.website/listings/stylish-3-bedroom-condo-in-miami-beach-florida",
  },
];

const rulerIcon = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fb03db6c-5ef0-4c5d-a106-339f02e1dcca-housepluss-framer-website/assets/svgs/l3nSI77CshXonKv1bmeifcoQng0-2.svg";
const bedIcon = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fb03db6c-5ef0-4c5d-a106-339f02e1dcca-housepluss-framer-website/assets/svgs/xYu8yMhNlOxbPpBSoH6es75I8-3.svg";
const bathIcon = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fb03db6c-5ef0-4c5d-a106-339f02e1dcca-housepluss-framer-website/assets/svgs/qOefT5jiiN4rMJdzOQqeuLnvZU-4.svg";

interface Listing {
  image: string;
  price: string;
  status: 'FOR RENT' | 'FOR SALE';
  title: string;
  sqft: string;
  beds: string;
  baths: string;
  link: string;
  fallbackImage?: string;
}

const PropertyCard = ({ listing }: { listing: Listing }) => {
  const imageUrl = listing.fallbackImage ? listing.fallbackImage : listing.image;
  
  return (
    <a href={listing.link} className="group block bg-[#F9F9F9] rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] overflow-hidden transition-all duration-300 ease-out hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:-translate-y-1">
      <div className="relative w-full aspect-[4/3]">
        <Image
          src={imageUrl}
          alt={listing.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <p className="font-medium text-base text-foreground">{listing.price}</p>
          <span className={`px-3 py-1 text-xs font-semibold rounded-full ${listing.status === 'FOR RENT' ? 'bg-[#16A085] text-white' : 'bg-primary text-primary-foreground'}`}>
            {listing.status}
          </span>
        </div>
        <h3 className="font-medium text-2xl leading-[1.3] text-foreground mb-4 h-[62.4px] overflow-hidden">
          {listing.title}
        </h3>
        <div className="flex items-center gap-6 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Image src={rulerIcon} alt="Ruler icon" width={20} height={20} />
            <p className="text-base font-normal">{listing.sqft}</p>
          </div>
          <div className="flex items-center gap-2">
            <Image src={bedIcon} alt="Bed icon" width={20} height={20} />
            <p className="text-base font-normal">{listing.beds}</p>
          </div>
          <div className="flex items-center gap-2">
            <Image src={bathIcon} alt="Bath icon" width={20} height={20} />
            <p className="text-base font-normal">{listing.baths}</p>
          </div>
        </div>
      </div>
    </a>
  );
};


export default function RecentListings() {
  return (
    <section className="bg-background py-[120px]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-border pb-6 mb-16">
          <h2 className="text-5xl font-bold tracking-[-1px] text-foreground mb-4 md:mb-0">Recent Listings</h2>
          <a href="https://housepluss.framer.website/listings" className="border border-border rounded-lg px-6 py-4 text-base font-medium text-foreground bg-background hover:bg-secondary transition-colors whitespace-nowrap">
            View All Listing
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {listingsData.map((listing, index) => (
            <PropertyCard key={index} listing={listing as Listing} />
          ))}
        </div>
      </div>
    </section>
  );
}