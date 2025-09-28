import NavigationBar from "@/components/sections/navigation-bar";
import FooterSection from "@/components/sections/footer-section";
import CtaSection from "@/components/sections/cta-section";
import { RefreshCw, DollarSign, TrendingDown, CheckCircle, ArrowRight, Calculator } from "lucide-react";

export default function RefinancingPage() {
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
                  Smarter Refinancing for Better Rates & Cash Flow
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  FRMI helps homeowners refinance existing mortgages to save money or restructure debt with competitive rates and flexible terms.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-primary text-dark-gray px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]">
                    Refinance My Mortgage
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <RefreshCw className="w-24 h-24 text-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-white text-center mb-4">Smart Refinancing</h3>
                  <div className="space-y-3 text-gray-300">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Lower Monthly Payments</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Access Home Equity</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Better Interest Rates</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Flexible Terms</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Refinancing Options Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Refinancing Options
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the refinancing option that best fits your financial goals and situation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <TrendingDown className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Lower Interest Rates</h3>
                <p className="text-gray-600 mb-6">
                  Reduce your monthly payments by taking advantage of lower interest rates in the current market.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Reduce monthly payments</li>
                  <li>• Save thousands over loan term</li>
                  <li>• Lock in low rates</li>
                  <li>• Build equity faster</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <DollarSign className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Cash-Out Refinancing</h3>
                <p className="text-gray-600 mb-6">
                  Tap into your home's equity to access cash for major expenses, investments, or debt consolidation.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Access home equity</li>
                  <li>• Lower interest than credit cards</li>
                  <li>• Tax-deductible interest</li>
                  <li>• Flexible use of funds</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <RefreshCw className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Adjustable to Fixed</h3>
                <p className="text-gray-600 mb-6">
                  Convert from an adjustable-rate mortgage to a fixed-rate loan for payment stability and peace of mind.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Payment stability</li>
                  <li>• Predictable monthly costs</li>
                  <li>• Protection from rate increases</li>
                  <li>• Long-term planning</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* When to Refinance Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                When Does Refinancing Make Sense?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Consider these factors to determine if refinancing is right for you
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Good Reasons to Refinance</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Interest rates have dropped</h4>
                      <p className="text-gray-600 text-sm">Current rates are at least 0.5% lower than your current rate</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Your credit score has improved</h4>
                      <p className="text-gray-600 text-sm">Better credit means better rates and terms</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">You want to shorten your loan term</h4>
                      <p className="text-gray-600 text-sm">Pay off your mortgage faster and save on interest</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">You need cash for major expenses</h4>
                      <p className="text-gray-600 text-sm">Access home equity for home improvements, education, or debt consolidation</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Break-Even Analysis</h3>
                <p className="text-gray-600 mb-6">
                  We help you calculate the break-even point to ensure refinancing saves you money in the long run.
                </p>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-medium text-gray-700">Closing Costs</span>
                    <span className="text-gray-900">$3,000 - $6,000</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-medium text-gray-700">Monthly Savings</span>
                    <span className="text-gray-900">$200 - $500</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-medium text-gray-700">Break-Even Time</span>
                    <span className="text-gray-900">6 - 18 months</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium text-gray-700">Total Savings (5 years)</span>
                    <span className="text-green-600 font-semibold">$8,000 - $25,000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Our Refinancing Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Simple steps to refinance your mortgage and start saving money
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-dark-gray">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Initial Consultation</h3>
                <p className="text-gray-600">We analyze your current mortgage and financial situation to determine if refinancing makes sense</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-dark-gray">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Rate Shopping</h3>
                <p className="text-gray-600">We shop multiple lenders to find you the best rates and terms available in the market</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-dark-gray">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Application & Processing</h3>
                <p className="text-gray-600">We handle all the paperwork and guide you through the application process</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-dark-gray">4</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Closing</h3>
                <p className="text-gray-600">Sign your new loan documents and start enjoying your lower payments</p>
              </div>
            </div>
          </div>
        </section>

        <CtaSection 
          title="Ready to Refinance Your Mortgage?"
          description="Lower your monthly payments or access your home equity with our refinancing options"
          primaryButtonText="Start Refinancing Application"
          secondaryButtonText="Get Refinancing Quote"
        />
      </main>
      <FooterSection />
    </>
  );
}
