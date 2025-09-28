import NavigationBar from "@/components/sections/navigation-bar";
import FooterSection from "@/components/sections/footer-section";
import CtaSection from "@/components/sections/cta-section";
import { Home, Shield, DollarSign, CheckCircle, ArrowRight } from "lucide-react";

export default function ResidentialLoansPage() {
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
                  Residential Mortgages Tailored for California Homebuyers
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  FRMI originates conventional, FHA, VA, and jumbo loans with terms from 10–30 years, designed specifically for California's unique real estate market.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-primary text-dark-gray px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]">
                    Start My Home Loan Application
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <Home className="w-24 h-24 text-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-white text-center mb-4">California Focused</h3>
                  <div className="space-y-3 text-gray-300">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Local Market Expertise</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Competitive Rates</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Fast Processing</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Personalized Service</span>
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
                Our Residential Loan Options
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from our comprehensive range of residential mortgage products designed for California homebuyers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Home className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Conventional Loans</h3>
                <p className="text-gray-600 mb-6">
                  Flexible options for qualified buyers with competitive rates and terms.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 5-20% down payment</li>
                  <li>• Fixed or adjustable rates</li>
                  <li>• 15-30 year terms</li>
                  <li>• No PMI with 20% down</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">FHA Loans</h3>
                <p className="text-gray-600 mb-6">
                  Low down payment solutions perfect for first-time homebuyers.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 3.5% down payment</li>
                  <li>• Lower credit requirements</li>
                  <li>• Government insured</li>
                  <li>• Flexible qualification</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">VA Loans</h3>
                <p className="text-gray-600 mb-6">
                  Exclusive benefits for veterans and active military service members.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 0% down payment</li>
                  <li>• No PMI required</li>
                  <li>• Competitive rates</li>
                  <li>• Flexible qualification</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                  <DollarSign className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Jumbo Loans</h3>
                <p className="text-gray-600 mb-6">
                  Financing for higher-value California homes that exceed conforming limits.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Higher loan amounts</li>
                  <li>• Competitive rates</li>
                  <li>• Flexible terms</li>
                  <li>• California market expertise</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Our Simple Loan Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From application to closing, we guide you through every step with transparency and expertise
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-dark-gray">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Pre-Approval</h3>
                <p className="text-gray-600">Get pre-approved to understand your budget and strengthen your offer</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-dark-gray">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Documentation</h3>
                <p className="text-gray-600">We help you gather all necessary documents for a smooth process</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-dark-gray">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Underwriting</h3>
                <p className="text-gray-600">Our team reviews your application and processes your loan</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-dark-gray">4</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Closing</h3>
                <p className="text-gray-600">Sign your documents and get the keys to your new home</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose FRMI */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Why Choose FRMI for Your Home Loan?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-dark-gray" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">California Market Expertise</h3>
                      <p className="text-gray-600">Deep understanding of California's unique real estate market and regulations</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-dark-gray" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Processing</h3>
                      <p className="text-gray-600">Streamlined process with average closing times faster than industry standards</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-dark-gray" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Competitive Rates</h3>
                      <p className="text-gray-600">Access to competitive rates and terms from our network of lenders</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-dark-gray" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Personalized Service</h3>
                      <p className="text-gray-600">Dedicated loan officer who guides you through every step of the process</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to Get Started?</h3>
                <p className="text-gray-600 mb-6">
                  Take the first step towards homeownership with our easy pre-approval process.
                </p>
                <button className="w-full bg-primary text-dark-gray px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2">
                  Start My Home Loan Application
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <CtaSection 
          title="Ready to Find Your Dream Home?"
          description="Get pre-approved today and start your home buying journey with confidence"
          primaryButtonText="Start My Home Loan Application"
          secondaryButtonText="Contact a Loan Officer"
        />
      </main>
      <FooterSection />
    </>
  );
}
