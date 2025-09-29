// components/common/Pill.tsx
import React from "react";

interface PillProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const Pill: React.FC<PillProps> = ({ label, active = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 rounded-full text-sm border transition ${
        active ? "bg-sky-600 text-white border-sky-600" : "bg-white text-gray-700 border-gray-200"
      }`}
    >
      {label}
    </button>
  );
};

export default Pill;
