import type { Technology } from "../types/technology";

interface TechnologyCardProps {
  technology: Technology;
}

const TechnologyCard = ({ technology }: TechnologyCardProps) => {
  return (
    <div className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm hover:shadow-md transition">

      {/* Top */}
      <div className="flex items-start justify-between">
        <img
          src={technology.icon}
          alt={technology.name}
          className="w-7 h-7 object-contain"
        />

        <span className="px-2.5 py-1 rounded-full bg-blue-50 text-blue-500 text-[10px] font-medium">
          {technology.badge}
        </span>
      </div>

      {/* Name */}
      <h3 className="mt-5 text-base font-semibold text-slate-800">
        {technology.name}
      </h3>

      {/* Description */}
      <p className="mt-2 text-xs leading-5 text-slate-500 line-clamp-3">
        {technology.description}
      </p>

      {/* Information */}
      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">

        <span className="px-2 py-1 rounded bg-slate-50 text-[10px] text-slate-500">
          {technology.category}
        </span>

        <span className="text-[10px] text-slate-500">
          {technology.difficulty}
        </span>

        <span className="text-[10px] text-slate-600">
          <span className="text-yellow-400">★</span>{" "}
          {technology.rating}
        </span>

      </div>

      {/* Button */}
      <button
        className="w-full mt-3 py-2 rounded-md bg-[#080d1b] text-white text-xs font-medium hover:bg-slate-800 transition"
      >
        Add to Stack
      </button>

    </div>
  );
};

export default TechnologyCard;