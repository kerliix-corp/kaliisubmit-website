export default function DocsPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-6">Documentation</h1>
      <p className="text-lg mb-8 text-gray-500">
        Everything you need to integrate KaliiSubmit into any frontend or backend.
      </p>

      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Getting Started</h2>
          <p className="text-gray-600">
            Create a Project → Get your API Key → Create a Form → Use the URL or SDK.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Example Form Submission</h2>
          <pre className="bg-gray-900 text-white p-4 rounded-xl overflow-x-auto text-sm">
{`
<form action="https://submit.kerliix.com/form/FORM_ID" method="POST">
  <input name="email" type="email" />
  <input name="message" type="text" />
  <button type="submit">Send</button>
</form>
`}
          </pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Using JavaScript</h2>
          <pre className="bg-gray-900 text-white p-4 rounded-xl overflow-x-auto text-sm">
{`
fetch("https://submit.kerliix.com/form/FORM_ID", {
  method: "POST",
  headers: { "Authorization": "Bearer YOUR_API_KEY" },
  body: JSON.stringify({ name: "John", age: 21 })
});
`}
          </pre>
        </div>
      </section>
    </main>
  );
}

