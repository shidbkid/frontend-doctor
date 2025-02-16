
import Layout from "@/components/Layout";



export default function AboutPage() {
  return (
    <Layout>
      <main className="min-h-screen p-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              We are dedicated to revolutionizing medical education through innovative digital solutions. 
              Our platform connects students with cutting-edge resources and personalized courses, making quality 
              medical education accessible to everyone, anywhere.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">What We Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium text-gray-800 mb-2">Surgery Courses</h3>
                <p className="text-gray-600">
                  Learn surgery through comprehensive courses designed by experts.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium text-gray-800 mb-2">Medical Resources</h3>
                <p className="text-gray-600">
                  Access a wide range of medical resources to enhance your learning experience.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-gray-600 mb-4">
  {`Have questions or feedback? We'd love to hear from you.`}
</p>
              <p className="text-gray-600">
                Email: contact@frontendoctor.com<br />
                Phone: (555) 123-4567
              </p>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}


