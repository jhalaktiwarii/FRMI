import Image from 'next/image';
import Link from 'next/link';
import { Pencil, KeyRound, Blocks } from 'lucide-react';

const NavItems = [
  { name: 'Home', href: '/' },
  { name: 'Properties', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Testimonials', href: '#' },
];

const Logo = () => (
  <Link href="/" className="flex items-center gap-3">
    <div className="bg-white text-dark-gray w-8 h-8 rounded-md flex items-center justify-center">
      <span className="font-bold text-xl leading-none">N</span>
    </div>
    <span className="text-white text-2xl font-semibold">Houseplus</span>
  </Link>
);

const FloatingButtons = () => (
  <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
    <a
      href="https://finestdevs.com/buy-houseplus"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2.5 bg-white text-dark-gray px-4 py-2.5 rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.12)] text-sm font-medium hover:bg-neutral-100 transition-colors"
    >
      <Pencil className="w-4 h-4" />
      <span>Get This Template</span>
    </a>
    <a
      href="https://framerbite.com/all-access"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2.5 bg-[#16A085] text-white px-4 py-2.5 rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.12)] text-sm font-medium hover:bg-opacity-90 transition-opacity"
    >
      <KeyRound className="w-4 h-4" />
      <span>Unlock 190+ Templates</span>
    </a>
    <a
      href="https://grayblocks.net/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2.5 bg-dark-gray text-white px-4 py-2.5 rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.12)] text-sm font-medium border border-white/20 hover:bg-neutral-700 transition-colors"
    >
      <Blocks className="w-4 h-4" />
      <span>Access 4200+ Components</span>
    </a>
    <a
      href="https://www.framer.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-2 w-[168px] h-[36px] flex items-center justify-center"
    >
      <Image
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fb03db6c-5ef0-4c5d-a106-339f02e1dcca-housepluss-framer-website/assets/icons/Obi3JOZXtPCv2r93v1AsVEUz0M-1.png"
        alt="Made in Framer"
        width={126}
        height={27}
      />
    </a>
  </div>
);

const FooterSection = () => {
  return (
    <>
      <footer className="relative bg-dark-gray text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fb03db6c-5ef0-4c5d-a106-339f02e1dcca-housepluss-framer-website/assets/images/KeveHAY4XUDxyakVf31gY0U9UZs-19.png"
            alt="Interior of a modern living room"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="opacity-50"
          />
          <div className="absolute inset-0 bg-dark-gray/60"></div>
        </div>

        <div className="container relative z-10 mx-auto flex flex-col justify-between min-h-[660px] py-[120px]">
          <div>
            <div className="flex flex-col md:flex-row justify-between items-center border-b border-white/10 pb-5">
              <Logo />
              <nav className="mt-6 md:mt-0">
                <ul className="flex items-center gap-8">
                  {NavItems.map((item, index) => (
                    <li key={item.name} className="flex items-center gap-2">
                       <span className="text-white/50">•</span>
                      <Link
                        href={item.href}
                        className="text-base font-medium text-white hover:text-primary-green transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>

          <div className="mt-auto pt-10 text-center md:text-left">
            <p className="text-base text-white/70">
              © 2024 Design and Developed by Framerbite
            </p>
          </div>
        </div>
      </footer>
      <FloatingButtons />
    </>
  );
};

export default FooterSection;