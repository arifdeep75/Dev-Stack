import { useEffect, useState } from "react";
import type { Technology } from "../types/technology";
import TechnologyCard from "./TechnologyCard";

const TechnologySection = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
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

  return (
    <section id="technologies" className="bg-white">
      <div className="max-w-5xl mx-auto px-5 py-16">

        {/* Heading */}
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

        {/* Loading */}
        {loading ? (
          <div className="flex justify-center py-10">
            <p className="text-sm text-slate-500">
              Loading technologies...
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

            {/* Technology Cards */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {technologies.map((technology) => (
                <TechnologyCard
                  key={technology.id}
                  technology={technology}
                />
              ))}
            </div>

            {/* Your Stack */}
            <div className="lg:col-span-1">
              <div className="border border-slate-100 rounded-xl p-4 shadow-sm">

                <h3 className="text-sm font-semibold text-slate-800">
                  Your Stack
                </h3>

                <p className="mt-1 text-[10px] text-slate-400">
                  No technologies selected yet.
                </p>

                <div className="mt-3 h-24 border border-dashed border-slate-200 rounded-lg flex items-center justify-center">
                  <p className="text-[10px] text-slate-400">
                    Your stack is empty.
                  </p>
                </div>

              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};

export default TechnologySection;