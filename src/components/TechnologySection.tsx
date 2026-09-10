import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import type { Technology } from "../types/technology";
import TechnologyCard from "./TechnologyCard";
import StackSidebar from "./StackSidebar";

const TechnologySection = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/technologies.json")
      .then((response) => response.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to load technologies:", error);
        setLoading(false);
      });
  }, []);

const addToStack = (technology: Technology) => {
  const alreadyAdded = stack.some(
    (item) => item.id === technology.id
  );

  if (alreadyAdded) {
    toast.warning(`${technology.name} is already in your stack!`);
    return;
  }

  const sameCategory = stack.some(
    (item) => item.category === technology.category
  );

  if (sameCategory) {
    toast.warning(
      `You already selected a ${technology.category} technology!`
    );
    return;
  }

  setStack([...stack, technology]);
  toast.success(`${technology.name} added to your stack!`);
};

  const removeFromStack = (id: string) => {
    const technology = stack.find((item) => item.id === id);

    setStack(stack.filter((item) => item.id !== id));

    if (technology) {
      toast.info(`${technology.name} removed from your stack!`);
    }
  };

  const removeAll = () => {
    if (stack.length === 0) {
      return;
    }

    setStack([]);
    toast.info("All technologies removed from your stack!");
  };

  return (
    <section id="technologies" className="bg-white">
      <div className="max-w-5xl mx-auto px-5 py-16">

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-[#111827]">
            Explore the{" "}
            <span className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-10">
            <p className="text-sm text-slate-500">
              Loading technologies...
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">

            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {technologies.map((technology) => (
                <TechnologyCard
                  key={technology.id}
                  technology={technology}
                  isAdded={stack.some(
                    (item) => item.id === technology.id
                  )}
                  onAdd={addToStack}
                />
              ))}
            </div>

            <div className="lg:col-span-1">
              <StackSidebar
                stack={stack}
                onRemove={removeFromStack}
                onRemoveAll={removeAll}
              />
            </div>

          </div>
        )}

      </div>
    </section>
  );
};

export default TechnologySection;