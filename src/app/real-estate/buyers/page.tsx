import NavigationBar from "@/components/sections/navigation-bar";
import FooterSection from "@/components/sections/footer-section";
import CtaSection from "@/components/sections/cta-section";
import { Home, Search, Handshake, CheckCircle, ArrowRight, Shield } from "lucide-react";

export default function BuyersPage() {
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
                  Expert Real Estate Services for California Buyers
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  FRMI provides comprehensive buyer representation and mortgage lending services, offering the advantage of real estate expertise + financing under one roof.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-primary text-dark-gray px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]">
                    Get Pre-Approved Today
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <Home className="w-24 h-24 text-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-white text-center mb-4">Complete Service</h3>
                  <div className="space-y-3 text-gray-300">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Property Search</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Mortgage Pre-Approval</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Negotiation Support</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Closing Assistance</span>
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
                Complete Buyer Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From search to closing, we provide comprehensive support for California homebuyers
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Search className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Property Search & Representation</h3>
                <p className="text-gray-600 mb-6">
                  We represent buyers at every stage: property search, negotiations, inspections, and closing.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Comprehensive property search</li>
                  <li>• Expert negotiation</li>
                  <li>• Inspection coordination</li>
                  <li>• Closing support</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Integrated Lending Advantage</h3>
                <p className="text-gray-600 mb-6">
                  With FRMI, you get the unique advantage of real estate guidance and mortgage expertise under one roof.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Faster pre-qualification</li>
                  <li>• Seamless financing</li>
                  <li>• Coordinated process</li>
                  <li>• Better communication</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <Handshake className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Transaction Transparency</h3>
                <p className="text-gray-600 mb-6">
                  We simplify the process, saving you time, money, and stress with secure escrow and compliance.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Secure escrow handling</li>
                  <li>• Full compliance</li>
                  <li>• Transparent process</li>
                  <li>• Regular updates</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose FRMI for Buying */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Why Choose FRMI for Your Home Purchase?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-dark-gray" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">One-Stop Service</h3>
                      <p className="text-gray-600">Both real estate and mortgage services under one roof for seamless coordination</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-dark-gray" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Faster Closings</h3>
                      <p className="text-gray-600">Integrated processes mean quicker approvals and smoother transactions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-dark-gray" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">California Expertise</h3>
                      <p className="text-gray-600">Deep knowledge of California markets, regulations, and local conditions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-dark-gray" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Cost Savings</h3>
                      <p className="text-gray-600">Reduced fees and better rates through our integrated approach</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to Start Your Search?</h3>
                <p className="text-gray-600 mb-6">
                  Get pre-approved and start your home buying journey with confidence.
                </p>
                <button className="w-full bg-primary text-dark-gray px-4 sm:px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 text-sm sm:text-base">
                  <span className="block sm:hidden">Get Pre-Approved</span>
                  <span className="hidden sm:block">Get Pre-Approved Today</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <CtaSection 
          title="Ready to Start Your Home Buying Journey?"
          description="Get pre-approved and connect with our expert real estate and mortgage team"
          primaryButtonText="Get Pre-Approved Today"
          secondaryButtonText="Contact Our Team"
          primaryHref="tel:+13102700416"
          secondaryHref="tel:+13102700416"
          variant="small"
        />
      </main>
      <FooterSection />
    </>
  );
}
