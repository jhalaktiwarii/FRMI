import NavigationBar from "@/components/sections/navigation-bar";
import FooterSection from "@/components/sections/footer-section";
import CtaSection from "@/components/sections/cta-section";
import { FileText, Clock, CheckCircle, ArrowRight, Users, Shield } from "lucide-react";

export default function TransactionPage() {
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
                  Seamless Transactions, From Start to Finish
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  FRMI's transaction coordination services ensure every step is handled with care and compliance for smooth real estate transactions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-primary text-dark-gray px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]">
                    Simplify My Transaction
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <FileText className="w-24 h-24 text-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-white text-center mb-4">Complete Support</h3>
                  <div className="space-y-3 text-gray-300">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Paperwork Management</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Deadline Tracking</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Escrow Coordination</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Regular Updates</span>
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
                Complete Transaction Support
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional coordination services to ensure your real estate transaction goes smoothly
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <FileText className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Paperwork & Deadlines</h3>
                <p className="text-gray-600 mb-6">
                  Paperwork, deadlines, escrow, and compliance — we coordinate every step to keep your transaction on track.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Document preparation</li>
                  <li>• Deadline management</li>
                  <li>• Compliance tracking</li>
                  <li>• Status monitoring</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Escrow & Title Management</h3>
                <p className="text-gray-600 mb-6">
                  Licensed partners ensure secure closings with professional escrow and title services.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Licensed escrow partners</li>
                  <li>• Title insurance coordination</li>
                  <li>• Secure fund handling</li>
                  <li>• Closing coordination</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Client Updates</h3>
                <p className="text-gray-600 mb-6">
                  Our team ensures seamless communication between buyers, sellers, lenders, and escrow officers.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Regular progress updates</li>
                  <li>• Stakeholder communication</li>
                  <li>• Issue resolution</li>
                  <li>• Timeline management</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Our Transaction Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Step-by-step coordination to ensure nothing slips through the cracks
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-dark-gray">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Initial Setup</h3>
                <p className="text-gray-600">Gather all necessary documents and establish timeline with all parties</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-dark-gray">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Coordination</h3>
                <p className="text-gray-600">Coordinate between buyers, sellers, lenders, and escrow officers</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-dark-gray">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Monitoring</h3>
                <p className="text-gray-600">Track progress, manage deadlines, and resolve any issues that arise</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-dark-gray">4</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Closing</h3>
                <p className="text-gray-600">Ensure smooth closing with all parties and proper documentation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose FRMI for Transactions */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Why Choose FRMI for Transaction Support?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-dark-gray" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Nothing Slips Through</h3>
                      <p className="text-gray-600">Comprehensive tracking ensures every detail is managed and deadlines are met</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-dark-gray" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Coordination</h3>
                      <p className="text-gray-600">Seamless communication between all parties for smoother transactions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-dark-gray" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Stay Informed</h3>
                      <p className="text-gray-600">Regular updates keep you informed while we handle the complexities</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-dark-gray" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Licensed Partners</h3>
                      <p className="text-gray-600">Work with licensed escrow and title professionals for secure closings</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to Simplify Your Transaction?</h3>
                <p className="text-gray-600 mb-6">
                  Let our transaction coordination team handle all the details for you.
                </p>
                <button className="w-full bg-primary text-dark-gray px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2">
                  Simplify My Transaction
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <CtaSection 
          title="Ready to Simplify Your Real Estate Transaction?"
          description="Let us handle all the complex paperwork and coordination for a smooth closing"
          primaryButtonText="Simplify My Transaction"
          secondaryButtonText="Contact Transaction Team"
        />
      </main>
      <FooterSection />
    </>
  );
}
