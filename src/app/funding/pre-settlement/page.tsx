import NavigationBar from "@/components/sections/navigation-bar";
import FooterSection from "@/components/sections/footer-section";
import CtaSection from "@/components/sections/cta-section";
import { DollarSign, Shield, CheckCircle, ArrowRight, FileText, Clock } from "lucide-react";

export default function PreSettlementPage() {
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
                  Funding When You Need It Most — Before Your Case Settles
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  FRMI offers pre-settlement loans to individuals engaged in civil or injury litigation, providing essential funds for medical bills, living expenses, and legal costs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-primary text-dark-gray px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]">
                    Apply for Pre-Settlement Funding
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <Clock className="w-24 h-24 text-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-white text-center mb-4">No Monthly Payments</h3>
                  <div className="space-y-3 text-gray-300">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Repay on Settlement</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Credit Score 540+</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Secure Disbursement</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Independent QC</span>
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
                Pre-Settlement Funding Benefits
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get the financial support you need during litigation without monthly payment stress
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-gray-50 rounded-xl">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-dark-gray" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">No Monthly Payments</h3>
                <p className="text-gray-600">
                  Repayment comes only upon case settlement, not monthly
                </p>
              </div>
              <div className="text-center p-8 bg-gray-50 rounded-xl">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-8 h-8 text-dark-gray" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Flexible Structures</h3>
                <p className="text-gray-600">
                  Loan structures available: interest-only, amortized, balloon payments
                </p>
              </div>
              <div className="text-center p-8 bg-gray-50 rounded-xl">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-dark-gray" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Low Credit Requirements</h3>
                <p className="text-gray-600">
                  Borrowers with credit scores as low as 540 may qualify
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
                  Why Choose FRMI for Pre-Settlement Funding?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-dark-gray" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Disbursement</h3>
                      <p className="text-gray-600">Funds disbursed securely via escrow or attorney trust account</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-dark-gray" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Independent QC</h3>
                      <p className="text-gray-600">Independent QC department ensures compliance and fraud prevention</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-dark-gray" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Backed by Lenders</h3>
                      <p className="text-gray-600">Backed by commercial lenders + FRMI reserves for reliability</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Apply for Funding</h3>
                <p className="text-gray-600 mb-6">
                  Get the financial support you need during your litigation process.
                </p>
                <button className="w-full bg-primary text-dark-gray px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2">
                  Apply for Pre-Settlement Funding
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <CtaSection 
          title="Need Funding During Your Case?"
          description="Get immediate cash advances while your legal case is pending with our pre-settlement funding"
          primaryButtonText="Apply for Pre-Settlement Funding"
          secondaryButtonText="Contact Funding Team"
        />
      </main>
      <FooterSection />
    </>
  );
}
