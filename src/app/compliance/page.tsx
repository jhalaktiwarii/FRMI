import NavigationBar from "@/components/sections/navigation-bar";
import FooterSection from "@/components/sections/footer-section";
import CtaSection from "@/components/sections/cta-section";
import { Shield, CheckCircle, AlertTriangle, FileText, Users, Scale } from "lucide-react";

export default function CompliancePage() {
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
                  Compliance and Quality Control You Can Trust
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  FRMI ensures every loan, transaction, and client interaction meets the highest standards of accuracy, integrity, and compliance with California and federal regulations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-primary text-dark-gray px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]">
                    Work With a Trusted California Mortgage Lender & Real Estate Brokerage
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <Shield className="w-24 h-24 text-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-white text-center mb-4">Licensed & Bonded</h3>
                  <div className="space-y-3 text-gray-300">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>California Real Estate Broker License</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>California Finance Lenders License</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>MLO Endorsements</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>$250,000 Surety Bond</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Commitment to Compliance */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Our Commitment to Compliance
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We maintain the highest standards of regulatory compliance across all our services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">California Bureau of Real Estate (CalBRE)</h3>
                <p className="text-gray-600 text-sm">Full compliance with state real estate regulations</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <Scale className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">California DFPI</h3>
                <p className="text-gray-600 text-sm">Department of Financial Protection and Innovation compliance</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">NMLS Mortgage Rules</h3>
                <p className="text-gray-600 text-sm">Nationwide Mortgage Licensing System adherence</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">CFPB & Federal Laws</h3>
                <p className="text-gray-600 text-sm">Consumer Financial Protection Bureau compliance</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Quality Control Matters */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Why Quality Control Matters
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Protects Clients</h3>
                <p className="text-gray-600 leading-relaxed">
                  Ensures fair lending, accurate valuations, and safe transactions for every client we serve.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Protects Investors</h3>
                <p className="text-gray-600 leading-relaxed">
                  Assures that loans funded meet strict standards, minimizing risk and maximizing returns.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Protects FRMI's Reputation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Reinforces trust in every deal and maintains our standing as a reliable financial partner.
                </p>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <div className="flex items-start">
                <AlertTriangle className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-red-800 mb-2">Zero Tolerance Policy</h4>
                  <p className="text-red-700">
                    We at FRMI will not tolerate loan fraud and are committed to cooperating with local, state, and federal authorities to safeguard clients, investors, and partners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How Our QC Works */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                How Our Quality Control Works
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our comprehensive step-by-step process ensures every transaction meets our high standards
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-dark-gray">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Pre-Funding Audits</h3>
                <p className="text-gray-600">Comprehensive review of all loan documentation before funding</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-dark-gray">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Credit Verification</h3>
                <p className="text-gray-600">Thorough verification of borrower creditworthiness and history</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-dark-gray">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Employment Re-Verification</h3>
                <p className="text-gray-600">Current employment status and income verification</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-dark-gray">4</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Tax Return Validation</h3>
                <p className="text-gray-600">Verification of tax returns and financial documentation</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-dark-gray">5</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Self-Employed Borrowers</h3>
                <p className="text-gray-600">Specialized review process for self-employed applicants</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-dark-gray">6</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Appraisal Review</h3>
                <p className="text-gray-600">Independent appraisal verification and property valuation</p>
              </div>
            </div>
          </div>
        </section>

        <CtaSection 
          title="Trust & Transparency"
          description="At FRMI, compliance is not just policy — it's our promise. Every loan we originate, every property we represent, and every funding we provide undergoes rigorous quality control to protect you."
          primaryButtonText="Work With a Trusted California Mortgage Lender & Real Estate Brokerage"
        />
      </main>
      <FooterSection />
    </>
  );
}
