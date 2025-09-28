import NavigationBar from "@/components/sections/navigation-bar";
import FooterSection from "@/components/sections/footer-section";
import CtaSection from "@/components/sections/cta-section";
import { DollarSign, Shield, CheckCircle, ArrowRight, FileText, TrendingUp } from "lucide-react";

export default function AnnuitiesPage() {
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
                  Turn Future Annuity Payments Into Cash
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  FRMI provides liquidity by purchasing annuity payments — whether fixed or variable — giving clients financial flexibility today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-primary text-dark-gray px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]">
                    Sell My Annuity Today
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <TrendingUp className="w-24 h-24 text-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-white text-center mb-4">Financial Flexibility</h3>
                  <div className="space-y-3 text-gray-300">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Sell Part or All</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Access Funds Now</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Secure Transfer</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Licensed & Compliant</span>
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
                Annuity Cash-Out Benefits
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get immediate access to your annuity funds with flexible options
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-gray-50 rounded-xl">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <DollarSign className="w-8 h-8 text-dark-gray" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Sell Part or All</h3>
                <p className="text-gray-600">
                  Sell part or all of your annuity to get the cash you need today
                </p>
              </div>
              <div className="text-center p-8 bg-gray-50 rounded-xl">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-8 h-8 text-dark-gray" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Access Funds Now</h3>
                <p className="text-gray-600">
                  Gain access to funds without waiting years for scheduled payments
                </p>
              </div>
              <div className="text-center p-8 bg-gray-50 rounded-xl">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-dark-gray" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Secure Transfer</h3>
                <p className="text-gray-600">
                  Payments are transferred securely via third-party escrow or attorney trust accounts
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
                  Why Choose FRMI for Your Annuity?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-dark-gray" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Strong Compliance Framework</h3>
                      <p className="text-gray-600">Compliance with CalBRE, DFPI, CFPB, NMLS regulations</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-dark-gray" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Independent QC Procedures</h3>
                      <p className="text-gray-600">Independent quality control procedures to prevent fraud</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-dark-gray" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Professional Guidance</h3>
                      <p className="text-gray-600">Professional guidance from FRMI officers with decades of experience</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Sell Your Annuity Today</h3>
                <p className="text-gray-600 mb-6">
                  Get a free quote for your annuity and access your funds immediately.
                </p>
                <button className="w-full bg-primary text-dark-gray px-4 sm:px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 text-sm sm:text-base">
                  <span className="block sm:hidden">Sell Annuity</span>
                  <span className="hidden sm:block">Sell My Annuity Today</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <CtaSection 
          title="Ready to Turn Your Annuity Into Cash?"
          description="Sell your annuity payments for immediate cash with our competitive offers"
          primaryButtonText="Get Annuity Quote"
          secondaryButtonText="Contact Annuity Team" variant="small"
        />
      </main>
      <FooterSection />
    </>
  );
}
