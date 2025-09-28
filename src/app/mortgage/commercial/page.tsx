import NavigationBar from "@/components/sections/navigation-bar";
import FooterSection from "@/components/sections/footer-section";
import CtaSection from "@/components/sections/cta-section";
import { Building2, DollarSign, TrendingUp, CheckCircle, ArrowRight, Users } from "lucide-react";

export default function CommercialLoansPage() {
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
                  Financing for California Businesses & Investors
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  FRMI supports commercial property purchases & refinancing with flexible loan structures designed for California's dynamic business environment.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-primary text-dark-gray px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]">
                    Apply for a Commercial Loan
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <Building2 className="w-24 h-24 text-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-white text-center mb-4">Business Focused</h3>
                  <div className="space-y-3 text-gray-300">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Flexible Terms</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Competitive Rates</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Fast Approval</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Expert Guidance</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Loan Types Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Commercial Loan Types
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Flexible loan structures with competitive rates for various commercial property needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Building2 className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">5-20 Year Terms</h3>
                <p className="text-gray-600 mb-6">
                  Flexible loan terms ranging from 5 to 20 years to match your business timeline and cash flow needs.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Short-term bridge loans</li>
                  <li>• Medium-term financing</li>
                  <li>• Long-term stability</li>
                  <li>• Customizable terms</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Balloon Structures</h3>
                <p className="text-gray-600 mb-6">
                  Balloon payment options that provide lower monthly payments with a final payment at maturity.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Lower monthly payments</li>
                  <li>• Flexible refinancing</li>
                  <li>• Cash flow optimization</li>
                  <li>• Strategic planning</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Investor Loans</h3>
                <p className="text-gray-600 mb-6">
                  Specialized financing for real estate investors and portfolio builders.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Portfolio financing</li>
                  <li>• Investment property focus</li>
                  <li>• Cash flow analysis</li>
                  <li>• Investor-friendly terms</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Who It's For Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Who It's For
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our commercial loans are designed for various types of business owners and investors
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-dark-gray" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Investors</h3>
                <p className="text-gray-600">
                  Real estate investors looking to expand their portfolios with commercial properties
                </p>
              </div>
              <div className="text-center p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building2 className="w-8 h-8 text-dark-gray" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Developers</h3>
                <p className="text-gray-600">
                  Property developers seeking financing for new construction and development projects
                </p>
              </div>
              <div className="text-center p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <DollarSign className="w-8 h-8 text-dark-gray" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Business Owners</h3>
                <p className="text-gray-600">
                  Business owners looking to purchase or refinance their commercial real estate
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Integrated Services */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Integrated Services Advantage
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  With FRMI, you get both lending and brokerage support for your commercial acquisitions, providing a seamless experience from financing to property management.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-dark-gray" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Lending + Brokerage</h3>
                      <p className="text-gray-600">Complete real estate services under one roof for streamlined transactions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-dark-gray" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Faster Closings</h3>
                      <p className="text-gray-600">Integrated processes mean quicker approvals and smoother closings</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-dark-gray" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Market Expertise</h3>
                      <p className="text-gray-600">Deep knowledge of California commercial real estate markets</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-dark-gray" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Ongoing Support</h3>
                      <p className="text-gray-600">Continued relationship beyond closing for future needs</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to Get Started?</h3>
                <p className="text-gray-600 mb-6">
                  Let our commercial lending team help you secure the financing you need for your next project.
                </p>
                <button className="w-full bg-primary text-dark-gray px-4 sm:px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 text-sm sm:text-base">
                  <span className="block sm:hidden">Apply for Loan</span>
                  <span className="hidden sm:block">Apply for a Commercial Loan</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <CtaSection 
          title="Ready to Finance Your Commercial Property?"
          description="Get the funding you need for your commercial real estate investment"
          primaryButtonText="Start Commercial Loan Application"
          secondaryButtonText="Contact Commercial Lending Team" variant="small"
        />
      </main>
      <FooterSection />
    </>
  );
}
