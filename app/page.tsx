export default function HomePage() {
  return (
    <div>

      {/* Hero Section */}
      <section className="pt-24 pb-32">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold leading-tight">
            Simplify Your Form Submissions
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-500 mt-2">
              With Just One API
            </span>
          </h1>

          <p className="text-lg text-gray-700 max-w-2xl mx-auto mt-6">
            Kaliisubmit lets you collect form data, file uploads, and POST inputs —
            without building a backend. Just send to our endpoint and track everything.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <a
              href="https://console.kaliisubmit.kerliix.com"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-orange-500 text-white font-medium shadow-lg hover:opacity-90 transition"
            >
              Get Started
            </a>
            <a
              href="/docs"
              className="px-6 py-3 rounded-xl border border-gray-400 font-medium hover:bg-gray-100 transition"
            >
              Read Docs
            </a>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center">
            Everything You Need to Collect Submissions
          </h2>

          <div className="grid md:grid-cols-3 gap-10 mt-12">
            <div className="p-6 border rounded-2xl shadow-sm bg-gray-50">
              <h3 className="text-xl font-semibold">Form Submissions</h3>
              <p className="text-gray-700 mt-2">
                Submit HTML, React, or backend POST requests directly to Kaliisubmit.
              </p>
            </div>

            <div className="p-6 border rounded-2xl shadow-sm bg-gray-50">
              <h3 className="text-xl font-semibold">File Uploads</h3>
              <p className="text-gray-700 mt-2">
                Upload images, videos, PDFs, and files securely with instant access.
              </p>
            </div>

            <div className="p-6 border rounded-2xl shadow-sm bg-gray-50">
              <h3 className="text-xl font-semibold">SDKs for Every Stack</h3>
              <p className="text-gray-700 mt-2">
                JavaScript, Flutter, Python, Node, PHP — integrate in minutes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gray-50 border-t">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold">How It Works</h2>

          <div className="grid md:grid-cols-4 gap-8 mt-12 text-left">
            <div className="p-6 border bg-white rounded-xl shadow-sm">
              <h3 className="font-semibold text-lg">1. Create a Project</h3>
              <p className="text-gray-700 mt-2">Generate your unique endpoint instantly.</p>
            </div>
            <div className="p-6 border bg-white rounded-xl shadow-sm">
              <h3 className="font-semibold text-lg">2. Send Data</h3>
              <p className="text-gray-700 mt-2">Use fetch, Axios, forms, or SDKs.</p>
            </div>
            <div className="p-6 border bg-white rounded-xl shadow-sm">
              <h3 className="font-semibold text-lg">3. View Submissions</h3>
              <p className="text-gray-700 mt-2">Track everything in your dashboard.</p>
            </div>
            <div className="p-6 border bg-white rounded-xl shadow-sm">
              <h3 className="font-semibold text-lg">4. Automate</h3>
              <p className="text-gray-700 mt-2">Forward to apps, emails, and workflows.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Frameworks */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold">Works with All Frameworks</h2>

          <div className="grid md:grid-cols-6 gap-6 mt-12 opacity-90">
            {["Next.js", "React", "Flutter", "Node.js", "Python", "PHP"].map((fw) => (
              <div
                key={fw}
                className="p-6 border rounded-xl bg-gray-50 shadow-sm font-medium"
              >
                {fw}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates */}
      <section className="py-24 bg-gray-50 border-t">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center">Ready-Made Templates</h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              "Job Application Form",
              "Contact Form",
              "File Upload Form",
              "Registration Form",
              "Survey Form",
              "Custom Workflow"
            ].map((t) => (
              <div
                key={t}
                className="p-6 bg-white border rounded-xl shadow-sm"
              >
                <h3 className="text-lg font-semibold">{t}</h3>
                <p className="text-gray-700 mt-2">Use instantly or customize.</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="/templates"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-orange-500 text-white font-medium shadow-lg hover:opacity-90 transition"
            >
              Browse Templates
            </a>
          </div>
        </div>
      </section>

      {/* Demo */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold">Live Demo</h2>
          <p className="text-gray-700 mt-4">A real-time demonstration of how submissions are captured.</p>

          <div className="mt-10 p-10 border rounded-2xl bg-gray-50 shadow-sm">
            <p className="font-mono text-gray-700">
              POST https://api.kaliisubmit.kerliix.com/v1/submit  
              <br />{"{"}"name": "John", "email": "john@example.com"{"}"}
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-gray-50 border-t">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold">Pricing</h2>

          <div className="grid md:grid-cols-3 gap-10 mt-12">
            <div className="p-8 bg-white border rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold">Free</h3>
              <p className="text-gray-700 mt-2">For personal projects</p>
              <p className="text-4xl font-bold mt-6">$0</p>
            </div>

            <div className="p-8 bg-white border rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold">Pro</h3>
              <p className="text-gray-700 mt-2">For startups & devs</p>
              <p className="text-4xl font-bold mt-6">$10/mo</p>
            </div>

            <div className="p-8 bg-white border rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold">Business</h3>
              <p className="text-gray-700 mt-2">Teams & companies</p>
              <p className="text-4xl font-bold mt-6">$49/mo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Section */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold">Built for Developers</h2>
          <p className="text-gray-700 mt-4">
            Clean API. Webhooks. SDKs. UAPI-powered.  
          </p>

          <a
            href="/docs"
            className="mt-8 inline-block px-6 py-3 rounded-xl bg-black text-white font-medium hover:opacity-80"
          >
            Visit Developer Docs
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gray-50 border-t">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center">FAQ</h2>

          <div className="mt-12 space-y-6">
            {[
              ["What is Kaliisubmit?", "A submission platform that handles form POST data, files, and workflows."],
              ["Is it secure?", "Yes — encrypted storage + Kerliix infrastructure."],
              ["Do I need a backend?", "No. Just submit to our endpoint."],
              ["Can I use my own domain?", "Yes — custom domain support is built in."]
            ].map(([q, a]) => (
              <div key={q} className="p-6 bg-white border rounded-xl shadow-sm">
                <h3 className="font-semibold text-lg">{q}</h3>
                <p className="text-gray-700 mt-2">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
                }
