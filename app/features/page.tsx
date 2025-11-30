export default function FeaturesPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-6">Features</h1>
      <p className="text-lg mb-12 text-gray-500">
        Everything you need to collect submissions, uploads, and POST requests effortlessly.
      </p>

      <div className="grid md:grid-cols-3 gap-10">
        <div className="p-6 rounded-2xl border bg-white">
          <h2 className="text-xl font-semibold mb-3">Universal POST Handling</h2>
          <p className="text-gray-600">
            Accept POST requests from any framework, language, or platform—frontend or backend.
          </p>
        </div>

        <div className="p-6 rounded-2xl border bg-white">
          <h2 className="text-xl font-semibold mb-3">File + Form Support</h2>
          <p className="text-gray-600">
            Upload photos, documents, JSON, form data—everything works with KaliiSubmit.
          </p>
        </div>

        <div className="p-6 rounded-2xl border bg-white">
          <h2 className="text-xl font-semibold mb-3">SDK + Simple URLs</h2>
          <p className="text-gray-600">
            Use our SDK or just call the submission URL with your Project API Key.
          </p>
        </div>

        <div className="p-6 rounded-2xl border bg-white">
          <h2 className="text-xl font-semibold mb-3">Dashboard & Analytics</h2>
          <p className="text-gray-600">
            View, manage, filter, export, and delete submissions in real-time.
          </p>
        </div>

        <div className="p-6 rounded-2xl border bg-white">
          <h2 className="text-xl font-semibold mb-3">Project-Based Access</h2>
          <p className="text-gray-600">
            Paid plans allow multiple projects, each with their own API keys and forms.
          </p>
        </div>

        <div className="p-6 rounded-2xl border bg-white">
          <h2 className="text-xl font-semibold mb-3">Webhooks</h2>
          <p className="text-gray-600">
            Auto-forward submissions to your backend as soon as they arrive.
          </p>
        </div>
      </div>
    </main>
  );
}

