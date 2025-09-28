import NavigationBar from "@/components/sections/navigation-bar";
import FooterSection from "@/components/sections/footer-section";
import CtaSection from "@/components/sections/cta-section";
import { DollarSign, Shield, CheckCircle, ArrowRight, FileText, Scale } from "lucide-react";

export default function StructuredSettlementsPage() {
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
                  Unlock Cash From Your Structured Settlement
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  FRMI purchases structured settlement payments at a discounted rate, providing clients with immediate cash instead of waiting years for scheduled disbursements.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-primary text-dark-gray px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]">
                    Get My Settlement Cash Offer
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <DollarSign className="w-24 h-24 text-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-white text-center mb-4">Immediate Cash</h3>
                  <div className="space-y-3 text-gray-300">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Lump Sum Today</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Secure Process</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Attorney Assisted</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Fully Licensed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Points Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Structured Settlement Cash-Out?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get immediate access to your settlement funds with a secure, regulated process
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-gray-50 rounded-xl">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <DollarSign className="w-8 h-8 text-dark-gray" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Lump Sum Today</h3>
                <p className="text-gray-600">
                  Receive a lump sum today instead of small periodic payments over many years
                </p>
              </div>
              <div className="text-center p-8 bg-gray-50 rounded-xl">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-8 h-8 text-dark-gray" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Flexible Use</h3>
                <p className="text-gray-600">
                  Funds can be used for medical bills, debt relief, or new investments
                </p>
              </div>
              <div className="text-center p-8 bg-gray-50 rounded-xl">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-dark-gray" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Secure Process</h3>
                <p className="text-gray-600">
                  Process is secure, regulated, and attorney-assisted through escrow/trust accounts
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose FRMI */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Why Choose FRMI for Your Settlement?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-dark-gray" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Fully Licensed</h3>
                      <p className="text-gray-600">Licensed under California Finance Lenders License & Real Estate Broker License</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-dark-gray" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Client Protection</h3>
                      <p className="text-gray-600">$250,000 surety bond for client protection and peace of mind</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-dark-gray" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Transparent Process</h3>
                      <p className="text-gray-600">Transparent, compliant transactions with full disclosure</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Your Cash Offer</h3>
                <p className="text-gray-600 mb-6">
                  Receive a free, no-obligation quote for your structured settlement.
                </p>
                <button className="w-full bg-primary text-dark-gray px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2">
                  Get My Settlement Cash Offer
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <CtaSection 
          title="Ready to Unlock Your Settlement Cash?"
          description="Convert your structured settlement payments into immediate cash with competitive rates"
          primaryButtonText="Get Settlement Quote"
          secondaryButtonText="Contact Settlement Team"
        />
      </main>
      <FooterSection />
    </>
  );
}
