export default function PricingPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-6">Pricing</h1>
      <p className="text-lg mb-12 text-gray-500">
        Simple plans for individuals and teams. Start free, scale when you need.
      </p>

      <div className="grid md:grid-cols-3 gap-10">
        {/* Free */}
        <div className="p-8 border rounded-2xl bg-white">
          <h2 className="text-2xl font-semibold mb-2">Free</h2>
          <p className="text-4xl font-bold mb-4">0$</p>
          <ul className="space-y-3 text-gray-600">
            <li>1 Project</li>
            <li>Up to 500 Submissions</li>
            <li>Basic Analytics</li>
            <li>Email Support</li>
          </ul>
        </div>

        {/* Pro */}
        <div className="p-8 border-2 border-purple-600 rounded-2xl bg-white shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">Pro</h2>
          <p className="text-4xl font-bold mb-4">$10/mo</p>
          <ul className="space-y-3 text-gray-600">
            <li>Unlimited Projects</li>
            <li>10,000 Submissions / mo</li>
            <li>Advanced Analytics</li>
            <li>Webhooks</li>
            <li>Priority Support</li>
          </ul>
        </div>

        {/* Business */}
        <div className="p-8 border rounded-2xl bg-white">
          <h2 className="text-2xl font-semibold mb-2">Business</h2>
          <p className="text-4xl font-bold mb-4">$40/mo</p>
          <ul className="space-y-3 text-gray-600">
            <li>Unlimited Everything</li>
            <li>Team Access</li>
            <li>Audit Logs</li>
            <li>Custom Webhooks</li>
            <li>24/7 Support</li>
          </ul>
        </div>
      </div>
    </main>
  );
}

