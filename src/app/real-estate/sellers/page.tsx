import NavigationBar from "@/components/sections/navigation-bar";
import FooterSection from "@/components/sections/footer-section";
import CtaSection from "@/components/sections/cta-section";
import { TrendingUp, Target, Home, CheckCircle, ArrowRight, BarChart3 } from "lucide-react";

export default function SellersPage() {
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
                  Expert Real Estate Services for California Sellers
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  FRMI provides comprehensive seller representation with market analysis, pricing strategy, and professional brokerage services to maximize your property's value.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-primary text-dark-gray px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]">
                    Get Property Valuation
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <TrendingUp className="w-24 h-24 text-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-white text-center mb-4">Maximize Value</h3>
                  <div className="space-y-3 text-gray-300">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Market Analysis</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Strategic Pricing</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Professional Marketing</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Expert Negotiation</span>
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
                Complete Seller Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional representation to maximize your property's value and ensure a smooth sale
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <BarChart3 className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Market Expertise</h3>
                <p className="text-gray-600 mb-6">
                  We provide comparative analysis to set the right price based on recent sales, market trends, and property features.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Comparative Market Analysis</li>
                  <li>• Local market trends</li>
                  <li>• Pricing strategy</li>
                  <li>• Market timing advice</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Marketing & Exposure</h3>
                <p className="text-gray-600 mb-6">
                  Our agents combine local market insight with brokerage and lending knowledge to attract the right buyers.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• MLS listings</li>
                  <li>• Professional photography</li>
                  <li>• Online marketing</li>
                  <li>• Agent networks</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <Home className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Smooth Closings</h3>
                <p className="text-gray-600 mb-6">
                  You get a streamlined sale, from pricing to escrow closing with compliance-driven process ensuring timely sale.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Compliance-driven process</li>
                  <li>• Timely closings</li>
                  <li>• Escrow coordination</li>
                  <li>• Transaction management</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose FRMI for Selling */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Why Choose FRMI for Your Home Sale?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-dark-gray" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Higher Sale Prices</h3>
                      <p className="text-gray-600">Our market expertise and pricing strategy help you get the best possible price</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-dark-gray" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Faster Sales</h3>
                      <p className="text-gray-600">Professional marketing and staging help your home sell quickly in any market</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-dark-gray" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Qualified Buyers</h3>
                      <p className="text-gray-600">Our lending expertise helps attract pre-approved buyers for smoother transactions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-dark-gray" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Stress-Free Process</h3>
                      <p className="text-gray-600">We handle all the details so you can focus on your next move</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to Sell Your Home?</h3>
                <p className="text-gray-600 mb-6">
                  Get a free market analysis and learn how much your home is worth.
                </p>
                <button className="w-full bg-primary text-dark-gray px-4 sm:px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 text-sm sm:text-base">
                  <span className="block sm:hidden">Get Valuation</span>
                  <span className="hidden sm:block">Get Property Valuation</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <CtaSection 
          title="Ready to Maximize Your Home's Value?"
          description="Get expert real estate services and market analysis to sell your home for top dollar"
          primaryHref="tel:+13102700416"
          primaryButtonText="Get Property Valuation"
          secondaryButtonText="Contact Our Team"
          secondaryHref="tel:+13102700416"
          variant="small"
        />
      </main>
      <FooterSection />
    </>
  );
}
