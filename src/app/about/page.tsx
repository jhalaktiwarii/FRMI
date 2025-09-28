import NavigationBar from "@/components/sections/navigation-bar";
import FooterSection from "@/components/sections/footer-section";
import CtaSection from "@/components/sections/cta-section";
import { Target, Shield, Users, Award, CheckCircle, Building2 } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <NavigationBar />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                About FRMI
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Empowering individuals and businesses during critical moments of need through innovative financial solutions
              </p>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
                Our Mission
              </h2>
              <div className="max-w-5xl mx-auto">
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  At FRMI, our mission is to provide innovative financial solutions that empower individuals and businesses during critical moments of need. Through our mortgage lending services, we deliver reliable, transparent, and competitive financing that helps clients achieve their real estate goals with confidence.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Simultaneously, our legal case purchasing and pre-settlement funding programs provide vital liquidity to clients facing long litigation timelines, offering fair and ethical access to funds when it matters most.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We are committed to integrity, compliance, and risk management in every transaction, ensuring trust with our clients, investors, and regulatory partners. By combining financial expertise with personalized service, FRMI strives to be a trusted partner—turning challenges into opportunities and future payment streams into present-day strength.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Badges & Credibility */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Trusted & Licensed
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our credentials and compliance ensure you're working with a trusted financial partner
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">California Real Estate Broker License</h3>
                <p className="text-gray-600 text-sm">Official licensed real estate brokerage</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">NMLS Registered Mortgage Lender</h3>
                <p className="text-gray-600 text-sm">Nationwide Mortgage Licensing System</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">California Finance Lender License</h3>
                <p className="text-gray-600 text-sm">State-licensed financial services</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">$250,000 Surety Bond Protected</h3>
                <p className="text-gray-600 text-sm">Client protection guaranteed</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
              <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Compliance Logos</h3>
                <p className="text-gray-600 text-sm">CFPB, DFPI, RESPA compliant</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">20+ Years Combined Experience</h3>
                <p className="text-gray-600 text-sm">Decades of financial expertise</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">$25M–$50M Loan Volume Annually</h3>
                <p className="text-gray-600 text-sm">Proven track record of success</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Fraud Prevention & QC Guaranteed</h3>
                <p className="text-gray-600 text-sm">Pre-Funding Loan Audits Completed</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose FRMI */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Why Choose FRMI
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We combine financial expertise with personalized service to deliver exceptional results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-gray-50 rounded-xl">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-dark-gray" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Personalized Service</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every client receives individual attention and customized solutions tailored to their unique financial needs and goals.
                </p>
              </div>
              <div className="text-center p-8 bg-gray-50 rounded-xl">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-dark-gray" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Integrity & Compliance</h3>
                <p className="text-gray-600 leading-relaxed">
                  We maintain the highest standards of integrity, compliance, and risk management in every transaction we handle.
                </p>
              </div>
              <div className="text-center p-8 bg-gray-50 rounded-xl">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-dark-gray" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Innovative Solutions</h3>
                <p className="text-gray-600 leading-relaxed">
                  We provide innovative financial solutions that empower individuals and businesses during critical moments of need.
                </p>
              </div>
            </div>
          </div>
        </section>

        <CtaSection 
          title="Ready to Work With a Trusted Partner?"
          description="Experience the FRMI advantage with our integrated mortgage and real estate services"
          primaryButtonText="Get Pre-Approved"
          secondaryButtonText="Contact Us Today"
        />
      </main>
      <FooterSection />
    </>
  );
}
