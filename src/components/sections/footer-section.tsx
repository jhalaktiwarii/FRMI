import Image from 'next/image';
import Link from 'next/link';

const NavItems = [
  { name: 'About Us', href: '/about' },
  { name: 'Compliance', href: '/compliance' },
  { name: 'Resources', href: '/resources' },
  { name: 'Contact Us', href: '/contact' },
];

const ServiceLinks = [
  { name: 'Mortgage Solutions', href: '/mortgage/residential' },
  { name: 'Commercial Loans', href: '/mortgage/commercial' },
  { name: 'Refinancing', href: '/mortgage/refinancing' },
  { name: 'Real Estate Services', href: '/real-estate/buyers' },
  { name: 'Property Valuation', href: '/real-estate/valuation' },
  { name: 'Transaction Support', href: '/real-estate/transaction' },
];

const FundingLinks = [
  { name: 'Annuities', href: '/funding/annuities' },
  { name: 'Lottery Winnings', href: '/funding/lottery' },
  { name: 'Pre-Settlement Funding', href: '/funding/pre-settlement' },
  { name: 'Structured Settlements', href: '/funding/structured-settlements' },
];

const PartnerLinks = [
  { name: 'Real Estate Agents', href: '/partners/agents' },
  { name: 'Attorneys', href: '/partners/attorneys' },
  { name: 'Developers', href: '/partners/developers' },
];

const Logo = () => (
  <Link href="/" className="flex items-center gap-2 sm:gap-3">
    <div className="bg-white text-dark-gray w-6 h-6 sm:w-8 sm:h-8 rounded-md flex items-center justify-center">
      <span className="font-bold text-lg sm:text-xl leading-none">F</span>
    </div>
    <span className="text-white text-xl sm:text-2xl font-semibold">FRMI</span>
  </Link>
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

        <div className="container relative z-10 mx-auto py-12 sm:py-16 md:py-20 lg:py-[120px] px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 lg:gap-12 mb-8">
            {/* Company Info */}
            <div className="lg:col-span-1 xl:col-span-2">
              <Logo />
              <p className="mt-4 text-sm text-white/80 leading-relaxed">
                Providing innovative financial solutions that empower individuals and businesses during critical moments of need.
              </p>
              <div className="mt-6 space-y-2">
                <p className="text-sm text-white/70">Phone: (555) 123-4567</p>
                <p className="text-sm text-white/70">Email: info@frmi.com</p>
                <p className="text-sm text-white/70">Address: California, USA</p>
              </div>
            </div>

            {/* Main Navigation */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-3">
                {NavItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
              <ul className="space-y-3">
                {ServiceLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Funding Services */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Funding Services</h3>
              <ul className="space-y-3">
                {FundingLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Partners */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">For Partners</h3>
              <ul className="space-y-3">
                {PartnerLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/resources" className="text-sm text-white/70 hover:text-white transition-colors">
                    FAQs & Resources
                  </Link>
                </li>
                <li>
                  <Link href="/compliance" className="text-sm text-white/70 hover:text-white transition-colors">
                    Compliance
                  </Link>
                </li>
                <li>
                  <Link href="/legal-disclaimer" className="text-sm text-white/70 hover:text-white transition-colors">
                    Legal Disclaimer
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="text-sm text-white/70 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className="text-sm text-white/70 hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Credentials/Badges */}
          <div className="border-t border-white/10 pt-8 mb-8">
            <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-8">
              <div className="text-center">
                <div className="text-xs text-white/60 mb-1">Licensed</div>
                <div className="text-sm text-white font-medium">CA Real Estate Broker</div>
              </div>
              <div className="text-center">
                <div className="text-xs text-white/60 mb-1">Registered</div>
                <div className="text-sm text-white font-medium">NMLS Lender</div>
              </div>
              <div className="text-center">
                <div className="text-xs text-white/60 mb-1">Protected</div>
                <div className="text-sm text-white font-medium">$250K Surety Bond</div>
              </div>
              <div className="text-center">
                <div className="text-xs text-white/60 mb-1">Experience</div>
                <div className="text-sm text-white font-medium">20+ Years Combined</div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-white/70 text-center md:text-left">
              © 2024 FRMI. All rights reserved. | NMLS ID: [Your NMLS ID] | DRE License: [Your DRE License]
            </p>
            <p className="text-sm text-white/70 mt-2 md:mt-0">
              Made with ❤️ by <a href="https://www.sugmaya.com" target="_blank" rel="noopener noreferrer" className="text-primary-green hover:text-primary-green/80 transition-colors">Sugmaya Governance</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterSection;