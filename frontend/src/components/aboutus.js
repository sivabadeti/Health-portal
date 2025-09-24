export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-green-700 text-white py-12 text-center shadow-lg">
        <h1 className="text-3xl sm:text-4xl font-bold">About Us</h1>
        <p className="mt-2 text-lg sm:text-xl font-light">
          Kerala SDG Health Portal – For a Healthier Tomorrow
        </p>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-5xl mx-auto px-6 sm:px-12 py-12 space-y-12">
        
        {/* Mission Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            The <span className="font-semibold text-green-700">Kerala SDG Health Portal</span> is 
            designed to support <span className="font-semibold">Sustainable Development Goal 3 (Good Health & Well-being)</span>.  
            Our mission is to create a digital ecosystem where{" "}
            <span className="text-blue-600 font-semibold">health workers</span>,{" "}
            <span className="text-blue-600 font-semibold">patients</span>, and{" "}
            <span className="text-blue-600 font-semibold">policymakers</span> collaborate 
            to track, manage, and prevent diseases effectively. 
          </p>
        </section>

        {/* Vision Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            We envision a <span className="font-semibold text-purple-600">healthier Kerala</span> 
            where communities have <span className="font-semibold text-green-700">equitable access</span> 
            to healthcare services. By leveraging{" "}
            <span className="font-semibold text-blue-600">technology, data, and innovation</span>,  
            the portal empowers health workers to report cases in real-time, helping the state 
            respond quickly to emerging health challenges. 
          </p>
        </section>

        {/* Features Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">What We Offer</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-lg font-semibold text-green-700 mb-2">📊 Disease Tracking</h3>
              <p className="text-gray-600">
                Real-time tracking of disease cases reported by health workers across Kerala.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-lg font-semibold text-green-700 mb-2">📂 Patient Records</h3>
              <p className="text-gray-600">
                Secure storage of patient information, prescriptions, and district-wise health data.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-lg font-semibold text-green-700 mb-2">🌍 SDG Alignment</h3>
              <p className="text-gray-600">
                Supporting Kerala’s progress toward United Nations SDG 3 with measurable health outcomes.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-lg font-semibold text-green-700 mb-2">🤝 Community Support</h3>
              <p className="text-gray-600">
                Connecting health workers, doctors, and citizens to improve overall well-being.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Join Us in Building a Healthier Kerala</h2>
          <p className="text-gray-700 mb-6">
            Together, we can prevent diseases, save lives, and promote well-being for every citizen.
          </p>
          <a
            href="mailto:info@keralasdghealth.org"
            className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition"
          >
            Contact Us
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Kerala SDG Health Portal. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
