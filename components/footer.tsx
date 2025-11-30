import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#fff2e4] border-t border-orange-200 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        <div>
          <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
            Kaliisubmit
          </h3>
          <p className="text-gray-700 mt-2">
            The universal API for forms, uploads, and submissions.
          </p>
        </div>

        <div>
          <h4 className="font-semibold">Product</h4>
          <ul className="space-y-2 mt-3 text-gray-700">
            <li><Link href="/features">Features</Link></li>
            <li><Link href="/pricing">Pricing</Link></li>
            <li><Link href="/docs">Documentation</Link></li>
            <li><Link href="/templates">Templates</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">Company</h4>
          <ul className="space-y-2 mt-3 text-gray-700">
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">Legal</h4>
          <ul className="space-y-2 mt-3 text-gray-700">
            <li><Link href="/terms">Terms</Link></li>
            <li><Link href="/privacy">Privacy</Link></li>
            <li><Link href="/cookies">Cookies</Link></li>
          </ul>
        </div>
      </div>

      <p className="text-center text-gray-600 mt-10 text-sm">
        © {new Date().getFullYear()} Kaliisubmit — A product of Kerliix Technologies.
      </p>
    </footer>
  );
}

