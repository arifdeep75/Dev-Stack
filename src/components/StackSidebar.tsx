import type { Technology } from "../types/technology";
import StackItem from "./StackItem";

interface StackSidebarProps {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const StackSidebar = ({
  stack,
  onRemove,
  onRemoveAll,
}: StackSidebarProps) => {
  return (
    <div className="border border-slate-100 rounded-xl p-4 shadow-sm bg-white">

      {/* Heading */}
      <h3 className="text-sm font-semibold text-slate-800">
        Your Stack
      </h3>

      <p className="mt-1 text-[10px] text-slate-400">
        {stack.length === 0
          ? "No technologies selected yet."
          : `${stack.length} Technology Selected`}
      </p>

      {/* Empty State */}
      {stack.length === 0 ? (
        <div className="mt-3 h-24 border border-dashed border-slate-200 rounded-lg flex items-center justify-center">
          <p className="text-[10px] text-slate-400">
            Your stack is empty.
          </p>
        </div>
      ) : (
        <>
          {/* Stack Items */}
          <div className="mt-3 space-y-2">
            {stack.map((technology) => (
              <StackItem
                key={technology.id}
                technology={technology}
                onRemove={onRemove}
              />
            ))}
          </div>

          {/* Remove All */}
          <button
            onClick={onRemoveAll}
            className="w-full mt-4 py-2 rounded-md border border-red-200 text-red-500 text-xs font-medium hover:bg-red-50 transition"
          >
            Remove All
          </button>
        </>
      )}

    </div>
  );
};

export default StackSidebar;