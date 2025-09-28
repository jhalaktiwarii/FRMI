import NavigationBar from "@/components/sections/navigation-bar";
import FooterSection from "@/components/sections/footer-section";
import CtaSection from "@/components/sections/cta-section";
import { Building2, DollarSign, Users, CheckCircle, ArrowRight, Shield } from "lucide-react";

export default function DevelopersPage() {
  return (
    <>
      <NavigationBar />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                  Financing Support for California Developers
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  FRMI works directly with developers to fund residential & commercial projects with flexible financing solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-primary text-dark-gray px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]">
                    Connect With Our Lending Team
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <Building2 className="w-24 h-24 text-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-white text-center mb-4">Developer Focused</h3>
                  <div className="space-y-3 text-gray-300">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Construction Loans</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Acquisition Financing</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Investor Network</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Compliance & QC</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Sections */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Developer Financing Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive financing support for California developers and construction projects
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Building2 className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Construction & Acquisition Loans</h3>
                <p className="text-gray-600 mb-6">
                  Flexible structures for both construction and acquisition financing to support your development projects.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Construction financing</li>
                  <li>• Land acquisition loans</li>
                  <li>• Bridge financing</li>
                  <li>• Flexible terms</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Investor Network Access</h3>
                <p className="text-gray-600 mb-6">
                  Liquidity via secondary markets and access to our network of investors and funding partners.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Secondary market access</li>
                  <li>• Investor connections</li>
                  <li>• Funding partnerships</li>
                  <li>• Market liquidity</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Compliance & QC</h3>
                <p className="text-gray-600 mb-6">
                  Secure financing for large projects with rigorous compliance and quality control standards.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Regulatory compliance</li>
                  <li>• Quality control</li>
                  <li>• Risk management</li>
                  <li>• Secure transactions</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <CtaSection 
          title="Ready to Fund Your Next Development Project?"
          description="Get the financing you need for your commercial and residential development projects"
          primaryButtonText="Start Development Loan Application"
          secondaryButtonText="Contact Development Team"
        />
      </main>
      <FooterSection />
    </>
  );
}
