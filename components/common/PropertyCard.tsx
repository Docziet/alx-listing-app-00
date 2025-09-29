// components/common/PropertyCard.tsx
import React from "react";
import { PropertyProps } from "@/interfaces";

const PropertyCard: React.FC<PropertyProps> = ({ name, address, rating, price, category, image, discount, offers }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
      <div className="h-44 md:h-48 bg-gray-200">
        {/* Using background image via inline style so external URL works */}
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold">{name}</h3>
          <div className="text-sm text-gray-600">{rating.toFixed(2)}</div>
        </div>

        <p className="text-sm text-gray-500 mt-1">
          {address.city}, {address.state}, {address.country}
        </p>

        <div className="flex items-center gap-2 mt-3 flex-wrap">
          {category.slice(0, 3).map((c) => (
            <span key={c} className="text-xs px-2 py-0.5 bg-gray-100 rounded-full text-gray-600">
              {c}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div>
            <div className="text-xl font-bold">${price.toLocaleString()}</div>
            {discount && <div className="text-sm text-red-500">{discount}% off</div>}
          </div>

          <div className="text-sm text-gray-500 text-right">
            <div>{offers.bed} bed • {offers.shower} bath</div>
            <div className="mt-1">{offers.occupants} guests</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
