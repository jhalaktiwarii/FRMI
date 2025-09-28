import NavigationBar from "@/components/sections/navigation-bar";
import FooterSection from "@/components/sections/footer-section";
import CtaSection from "@/components/sections/cta-section";
import { DollarSign, Shield, CheckCircle, ArrowRight, FileText, Gift } from "lucide-react";

export default function LotteryPage() {
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
                  Turn Future Lottery Payments Into Cash Now
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  FRMI purchases lottery winning payment streams, giving winners the choice of a lump sum today instead of waiting years for installments.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-primary text-dark-gray px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]">
                    Cash Out My Lottery Winnings
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <Gift className="w-24 h-24 text-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-white text-center mb-4">Immediate Liquidity</h3>
                  <div className="space-y-3 text-gray-300">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Sell All or Part</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Immediate Access</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Secure Process</span>
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
                Lottery Cash-Out Benefits
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get immediate access to your lottery winnings with flexible options
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-gray-50 rounded-xl">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Gift className="w-8 h-8 text-dark-gray" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Sell All or Part</h3>
                <p className="text-gray-600">
                  Sell all or part of your lottery winnings to get cash today
                </p>
              </div>
              <div className="text-center p-8 bg-gray-50 rounded-xl">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <DollarSign className="w-8 h-8 text-dark-gray" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Immediate Liquidity</h3>
                <p className="text-gray-600">
                  Immediate liquidity to invest, pay debt, or cover expenses
                </p>
              </div>
              <div className="text-center p-8 bg-gray-50 rounded-xl">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-dark-gray" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Secure Process</h3>
                <p className="text-gray-600">
                  Transactions processed securely with legal and escrow safeguards
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
                  Why Choose FRMI for Your Lottery Winnings?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-dark-gray" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Fully Licensed</h3>
                      <p className="text-gray-600">Fully licensed California lender and broker</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-dark-gray" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Transparent Terms</h3>
                      <p className="text-gray-600">Transparent terms, no hidden conditions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-dark-gray" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Rigorous Compliance</h3>
                      <p className="text-gray-600">Rigorous compliance + QC to protect clients</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Cash Out Your Winnings</h3>
                <p className="text-gray-600 mb-6">
                  Get immediate access to your lottery winnings with our secure process.
                </p>
                <button className="w-full bg-primary text-dark-gray px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2">
                  Cash Out My Lottery Winnings
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <CtaSection 
          title="Ready to Cash Out Your Lottery Winnings?"
          description="Convert your lottery winnings into immediate cash with our competitive lump-sum offers"
          primaryButtonText="Get Lottery Quote"
          secondaryButtonText="Contact Lottery Team"
        />
      </main>
      <FooterSection />
    </>
  );
}
