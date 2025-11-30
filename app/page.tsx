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
            Kaliisubmit lets you collect form data, file uploads, and any POST input —
            without writing a backend. Use our URL or SDK and start receiving submissions instantly.
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

      {/* Features Preview */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center">
            Everything You Need to Collect Submissions
          </h2>

          <div className="grid md:grid-cols-3 gap-10 mt-12">
            <div className="p-6 border rounded-2xl shadow-sm bg-gray-50">
              <h3 className="text-xl font-semibold">Form Submissions</h3>
              <p className="text-gray-700 mt-2">
                Submit HTML forms, React forms, or backend POST calls directly to our endpoint.
              </p>
            </div>

            <div className="p-6 border rounded-2xl shadow-sm bg-gray-50">
              <h3 className="text-xl font-semibold">File Uploads</h3>
              <p className="text-gray-700 mt-2">
                Upload images, documents, or any file type with secure storage and fast delivery.
              </p>
            </div>

            <div className="p-6 border rounded-2xl shadow-sm bg-gray-50">
              <h3 className="text-xl font-semibold">SDKs for Everything</h3>
              <p className="text-gray-700 mt-2">
                JavaScript, Python, Flutter, Node, PHP — integrate submissions in minutes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}