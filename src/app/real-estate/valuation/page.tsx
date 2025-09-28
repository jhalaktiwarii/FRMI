import NavigationBar from "@/components/sections/navigation-bar";
import FooterSection from "@/components/sections/footer-section";
import CtaSection from "@/components/sections/cta-section";
import { Calculator, BarChart3, CheckCircle, ArrowRight, Home, TrendingUp } from "lucide-react";

export default function ValuationPage() {
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
                  Know Your Property's True Worth
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  FRMI provides valuation support for both buyers and sellers, ensuring informed decisions with accurate property assessments.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-primary text-dark-gray px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]">
                    Get My Property Valued
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <Calculator className="w-24 h-24 text-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-white text-center mb-4">Accurate Valuations</h3>
                  <div className="space-y-3 text-gray-300">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Market Analysis</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Professional Appraisals</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Investor Guidelines</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Detailed Reports</span>
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
                Comprehensive Valuation Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional property valuation services for buyers, sellers, and investors
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <BarChart3 className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Comparative Market Analysis</h3>
                <p className="text-gray-600 mb-6">
                  Recent sales, property features, and location trends analyzed to determine accurate market value.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Recent comparable sales</li>
                  <li>• Property condition assessment</li>
                  <li>• Location analysis</li>
                  <li>• Market trend evaluation</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <Home className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Appraisal Coordination</h3>
                <p className="text-gray-600 mb-6">
                  Independent professional appraisals coordinated to meet lender and investor requirements.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Licensed appraiser network</li>
                  <li>• Lender-compliant reports</li>
                  <li>• Quick turnaround times</li>
                  <li>• Quality assurance</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Investor Insight</h3>
                <p className="text-gray-600 mb-6">
                  Valuations that meet lender and investor guidelines for financing and investment decisions.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Investment property analysis</li>
                  <li>• Cash flow projections</li>
                  <li>• ROI calculations</li>
                  <li>• Risk assessment</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Accurate Valuation Matters */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Why Accurate Valuation Matters
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-dark-gray" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">For Buyers</h3>
                      <p className="text-gray-600">Ensure you're paying fair market value and not overpaying for your investment</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-dark-gray" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">For Sellers</h3>
                      <p className="text-gray-600">Price your home competitively to attract buyers while maximizing your return</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-dark-gray" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">For Investors</h3>
                      <p className="text-gray-600">Make informed investment decisions based on accurate property valuations</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-dark-gray" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">For Lenders</h3>
                      <p className="text-gray-600">Ensure loan-to-value ratios are appropriate and minimize lending risk</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Your Property Valued</h3>
                <p className="text-gray-600 mb-6">
                  Professional valuation services to help you make informed real estate decisions.
                </p>
                <button className="w-full bg-primary text-dark-gray px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2">
                  Get My Property Valued
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <CtaSection 
          title="Ready to Know Your Property's True Worth?"
          description="Get an accurate property valuation to make informed buying or selling decisions"
          primaryButtonText="Get My Home Valued"
          secondaryButtonText="Schedule Consultation"
        />
      </main>
      <FooterSection />
    </>
  );
}
