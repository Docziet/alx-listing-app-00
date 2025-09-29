// pages/index.tsx
import { useMemo, useState } from "react";
import { PROPERTYLISTINGSAMPLE, HERO_BG } from "@/constants";
import PropertyCard from "@/components/common/PropertyCard";
import Pill from "@/components/common/Pill";
import type { PropertyProps } from "@/interfaces";

const filterLabels = [
  "Luxury Villa",
  "Pool",
  "Free Parking",
  "Mountain View",
  "Self Checkin",
  "Pet Friendly",
  "Beachfront",
  "Private Pool",
  "City Center",
];

export default function Home() {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [search, setSearch] = useState("");

  const toggleFilter = (label: string) => {
    setActiveFilters((prev) => (prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]));
  };

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return PROPERTYLISTINGSAMPLE.filter((p) => {
      // filter by search
      if (q) {
        const inName = p.name.toLowerCase().includes(q);
        const inCity = p.address.city.toLowerCase().includes(q);
        if (!inName && !inCity) return false;
      }
      // filter by active filters: property must include all active filters (AND)
      if (activeFilters.length > 0) {
        return activeFilters.every((f) => p.category.includes(f));
      }
      return true;
    });
  }, [search, activeFilters]);

  return (
    <div>
      {/* Hero */}
      <section
        className="h-[360px] md:h-[440px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      >
        <div className="container mx-auto px-4 md:px-8 text-white">
          <h1 className="text-3xl md:text-5xl font-bold">Find your favorite place here!</h1>
          <p className="mt-2 text-md md:text-lg">The best prices for over 2 million properties worldwide.</p>

          <div className="mt-6 flex gap-3">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search city or property..."
              className="px-4 py-2 rounded-lg w-72 md:w-96 text-gray-800"
            />
            <button onClick={() => setSearch("")} className="px-4 py-2 bg-white rounded-lg text-sky-600 font-semibold">Clear</button>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="container mx-auto px-4 md:px-8 mt-6">
        <div className="flex gap-3 overflow-x-auto py-2">
          {filterLabels.map((label) => (
            <Pill key={label} label={label} active={activeFilters.includes(label)} onClick={() => toggleFilter(label)} />
          ))}
        </div>
      </section>

      {/* Listings */}
      <section className="container mx-auto px-4 md:px-8 mt-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p: PropertyProps, idx) => (
            <PropertyCard key={`${p.name}-${idx}`} {...p} />
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full text-center text-gray-500 py-10">No results found.</div>
          )}
        </div>
      </section>
    </div>
  );
}
