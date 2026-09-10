import type { Technology } from "../types/technology";

interface StackItemProps {
  technology: Technology;
  onRemove: (id: string) => void;
}

const StackItem = ({ technology, onRemove }: StackItemProps) => {
  return (
    <div className="flex items-center justify-between border border-slate-100 rounded-lg px-3 py-2">

      <div className="flex items-center gap-2">
        <img
          src={technology.icon}
          alt={technology.name}
          className="w-6 h-6 object-contain"
        />

        <div>
          <p className="text-xs font-medium text-slate-700">
            {technology.name}
          </p>

          <p className="text-[9px] text-slate-400">
            {technology.category}
          </p>
        </div>
      </div>

      <button
        onClick={() => onRemove(technology.id)}
        className="text-slate-400 hover:text-red-500 text-sm"
      >
        ✕
      </button>

    </div>
  );
};

export default StackItem;