// components/layout/Header.tsx
import Link from "next/link";
import { useState } from "react";

const Header: React.FC = () => {
  const [query, setQuery] = useState("");

  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/">
            <a className="text-2xl font-bold text-sky-600">ListingApp</a>
          </Link>

          <nav className="hidden md:flex items-center gap-3 text-sm text-gray-600">
            <Link href="/"><a className="hover:underline">Rooms</a></Link>
            <Link href="/"><a className="hover:underline">Mansion</a></Link>
            <Link href="/"><a className="hover:underline">Countryside</a></Link>
            <Link href="/"><a className="hover:underline">Villas</a></Link>
          </nav>
        </div>

        <div className="flex-1 mx-4 hidden md:block">
          <div className="flex items-center bg-gray-100 rounded-full px-3 py-2">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search city, property, or feature"
              className="bg-transparent outline-none flex-1 text-sm"
            />
            <button className="ml-3 bg-sky-600 text-white px-4 py-1 rounded-full text-sm">Search</button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="text-sm px-4 py-1 border rounded-full">Sign In</button>
          <button className="text-sm px-4 py-1 bg-sky-600 text-white rounded-full">Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
