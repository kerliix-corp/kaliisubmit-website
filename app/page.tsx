export default function TemplatesPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-6">Templates</h1>
      <p className="text-lg mb-12 text-gray-500">
        Pre-built forms you can copy and use instantly. Works with your Form ID.
      </p>

      <div className="grid md:grid-cols-3 gap-10">
        <div className="p-6 border rounded-2xl bg-white">
          <h2 className="text-xl font-semibold mb-3">Contact Form</h2>
          <pre className="bg-gray-900 text-white p-4 rounded-xl text-sm overflow-x-auto">
{`
<form action="FORM_URL" method="POST">
  <input type="text" name="name" placeholder="Name" />
  <input type="email" name="email" placeholder="Email" />
  <textarea name="message"></textarea>
  <button>Send</button>
</form>
`}
          </pre>
        </div>

        <div className="p-6 border rounded-2xl bg-white">
          <h2 className="text-xl font-semibold mb-3">File Upload Form</h2>
          <pre className="bg-gray-900 text-white p-4 rounded-xl text-sm overflow-x-auto">
{`
<form action="FORM_URL" method="POST" enctype="multipart/form-data">
  <input type="file" name="file" />
  <button>Upload</button>
</form>
`}
          </pre>
        </div>

        <div className="p-6 border rounded-2xl bg-white">
          <h2 className="text-xl font-semibold mb-3">Newsletter Signup</h2>
          <pre className="bg-gray-900 text-white p-4 rounded-xl text-sm overflow-x-auto">
{`
<form action="FORM_URL" method="POST">
  <input type="email" name="email" placeholder="Your email" />
  <button>Join</button>
</form>
`}
          </pre>
        </div>
      </div>
    </main>
  );
}

