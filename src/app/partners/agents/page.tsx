import NavigationBar from "@/components/sections/navigation-bar";
import FooterSection from "@/components/sections/footer-section";
import CtaSection from "@/components/sections/cta-section";
import { Users, Clock, Handshake, CheckCircle, ArrowRight, Target } from "lucide-react";

export default function AgentsPage() {
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
                  Partner With FRMI to Close More Deals
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  FRMI co-markets with agents, providing lending + brokerage under one platform for seamless client management.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-primary text-dark-gray px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]">
                    Partner With Us
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <Users className="w-24 h-24 text-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-white text-center mb-4">Agent Partnership</h3>
                  <div className="space-y-3 text-gray-300">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Faster Closings</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Referral Benefits</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Co-Marketing</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Seamless Process</span>
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
                Partnership Benefits
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join our network of successful real estate agents and close more deals with our integrated services
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Faster Closings</h3>
                <p className="text-gray-600 mb-6">
                  Integrated loan origination means quicker approvals and smoother transactions for your clients.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Pre-approval coordination</li>
                  <li>• Streamlined processing</li>
                  <li>• Faster loan approval</li>
                  <li>• Reduced delays</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <Handshake className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Referral Benefits</h3>
                <p className="text-gray-600 mb-6">
                  Seamless client management with referral tracking and commission management.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Referral tracking system</li>
                  <li>• Commission management</li>
                  <li>• Client relationship tools</li>
                  <li>• Performance analytics</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Co-Marketing Opportunities</h3>
                <p className="text-gray-600 mb-6">
                  Title & escrow partnerships with joint marketing opportunities to grow your business.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Joint marketing campaigns</li>
                  <li>• Co-branded materials</li>
                  <li>• Lead sharing programs</li>
                  <li>• Networking events</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <CtaSection 
          title="Ready to Partner With FRMI?"
          description="Join our network of trusted real estate professionals and grow your business"
          primaryButtonText="Become a Partner"
          secondaryButtonText="Learn More About Partnership" variant="small"
        />
      </main>
      <FooterSection />
    </>
  );
}
