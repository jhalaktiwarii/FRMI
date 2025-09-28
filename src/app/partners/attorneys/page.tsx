import NavigationBar from "@/components/sections/navigation-bar";
import FooterSection from "@/components/sections/footer-section";
import CtaSection from "@/components/sections/cta-section";
import { Scale, DollarSign, Shield, CheckCircle, ArrowRight, Users } from "lucide-react";

export default function AttorneysPage() {
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
                  Legal Professionals: Support Your Clients With FRMI Funding
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  FRMI provides funding for clients involved in civil or injury litigation, offering financial relief without compromising case outcomes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-primary text-dark-gray px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]">
                    Refer a Client Today
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <Scale className="w-24 h-24 text-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-white text-center mb-4">Legal Support</h3>
                  <div className="space-y-3 text-gray-300">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Pre-Settlement Loans</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Escrow Disbursement</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Client Care</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Secure Process</span>
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
                Legal Funding Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive funding support for legal professionals and their clients
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <DollarSign className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Pre-Settlement Loans</h3>
                <p className="text-gray-600 mb-6">
                  Clients receive essential funds during litigation to cover medical bills, living expenses, and legal costs.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Medical bill coverage</li>
                  <li>• Living expenses</li>
                  <li>• Legal cost support</li>
                  <li>• No monthly payments</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Escrow Disbursement</h3>
                <p className="text-gray-600 mb-6">
                  Funds released securely via attorney trust accounts with full compliance and transparency.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Attorney trust accounts</li>
                  <li>• Secure disbursement</li>
                  <li>• Full compliance</li>
                  <li>• Transparent process</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Client Care</h3>
                <p className="text-gray-600 mb-6">
                  Financial relief without compromising case outcome, ensuring clients can focus on their recovery.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Non-recourse funding</li>
                  <li>• Case outcome protection</li>
                  <li>• Client advocacy</li>
                  <li>• Recovery support</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <CtaSection 
          title="Ready to Help Your Clients?"
          description="Provide your clients with access to pre-settlement funding and structured settlement solutions"
          primaryButtonText="Partner With Us"
          secondaryButtonText="Contact Legal Team" variant="small"
        />
      </main>
      <FooterSection />
    </>
  );
}
