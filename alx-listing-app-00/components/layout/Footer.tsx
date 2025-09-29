// components/layout/Footer.tsx
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8 mt-8">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h4 className="text-lg font-semibold">ListingApp</h4>
          <p className="text-sm mt-2">Find the best stays around the world.</p>
        </div>

        <div>
          <h5 className="font-semibold mb-2">Company</h5>
          <ul className="text-sm space-y-1">
            <li><Link href="/about"><a className="hover:underline">About</a></Link></li>
            <li><Link href="/contact"><a className="hover:underline">Contact</a></Link></li>
            <li><Link href="/terms"><a className="hover:underline">Terms</a></Link></li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold mb-2">Follow</h5>
          <div className="flex gap-3">
            <a href="#" className="text-sm hover:underline">Twitter</a>
            <a href="#" className="text-sm hover:underline">Instagram</a>
            <a href="#" className="text-sm hover:underline">Facebook</a>
          </div>
        </div>
      </div>
      <div className="mt-6 text-center text-xs text-gray-400">© {new Date().getFullYear()} ListingApp</div>
    </footer>
  );
};

export default Footer;
