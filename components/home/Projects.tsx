import Modal from "@/components/shared/modal";
import {
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
} from "react";
import Image from "next/image";

// ✅ Moved PROJECTS array to the top
export const PROJECTS = [
  {
    name: "Rotary Encoder Signal Conditioner",
    technologies: ["C++", "Arduino", "SolidWorks"],
    highlights:
      "Designed and prototyped a rotary encoder signal conditioner to aid in RPM testing on Skyjack Machinery. Created a final product for in-house use and tested under several conditions.",
    image: "Caption.png",
  },
  {
    name: "6900 Grinder Belt Guard",
    technologies: ["Weldment", "SolidWorks", "FEA"],
    highlights:
      "Designed and managed the weldment of a 1:1 belt guard for sheave testing of the Grinder belt. The guard includes bent sheet metal parts, Lexan sheets, and a lifting lug positioned at the CG.",
    image: "Caption.png",
  },
  {
    name: "Trestles",
    technologies: ["Weldment", "Spring loaded", "FEA"],
    highlights:
      "Spearheaded the assembly of a high-capacity Trestle stand with wheels that retract under load. Designed for safety and mobility across different bays.",
    image: "NumerAI.png",
  },
  {
    name: "Trackstand",
    technologies: ["Sheet metal", "SolidWorks"],
    highlights:
      "Fabricated adjustable-height trackstands to support heavy track assemblies. Includes self-locking nuts and slope tolerance up to 30°.",
    image: "Smart.png",
  },
  {
    name: "Prop Stands",
    technologies: ["Break Press", "SolidWorks"],
    highlights:
      "Developed 4 adjustable Prop Stands with turnbuckles and locking nut patterns. FEA validated a safety factor of 3 for roof weight support.",
    image: "BITCOIN.png",
  },
  {
    name: "Cooler Carts",
    technologies: ["Break Press", "SolidWorks", "Weldment"],
    highlights:
      "Built dual cooler carts with angled platforms for stable transport between assembly stations.",
    image: "BITCOIN.png",
  },
];

const Projects = ({
  showProjects,
  setShowProjects,
}: {
  showProjects: boolean;
  setShowProjects: Dispatch<SetStateAction<boolean>>;
}) => {
  const [project, setProject] = useState(PROJECTS[0]);

  return (
    <Modal showModal={showProjects} setShowModal={setShowProjects}>
      <div className="w-full overflow-hidden md:max-w-4xl md:rounded-2xl md:border md:border-gray-100 md:shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 bg-white px-4 py-6 pt-8 text-center md:px-16">
          <h3 className="font-display text-2xl font-bold">Projects</h3>
          <div className="bg-[#4A4A4A] w-full h-0.5" />
          <div className="flex flex-wrap justify-center gap-3">
            {PROJECTS.map((work) => (
              <button
                key={work.name}
                className="text-xl"
                onClick={() => setProject(work)}
                style={{
                  borderBottom:
                    project.name === work.name
                      ? "solid 2px #30A9EB"
                      : "solid 2px white",
                }}
              >
                {work.name}
              </button>
            ))}
          </div>

          <div className="mt-6 flex flex-col w-[90%] border rounded-[12px] shadow-md border-[#d3d3d3] p-4 items-center gap-3">
            <h2 className="font-bold text-lg">{project.name}</h2>
            <div className="flex flex-row justify-center flex-wrap gap-4">
              {project.technologies.map((tech) => (
                <div
                  key={tech}
                  className="border-2 rounded-xl border-gray-200 px-5 py-1"
                >
                  <p>{tech}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-700 w-full text-left">
              {project.highlights}
            </p>
            {project.image ? (
              <Image
                src={`/${project.image}`}
                alt={project.name}
                width={350}
                height={200}
                className="rounded-md mt-2"
              />
            ) : (
              <div className="text-sm text-gray-500 mt-2">No image available</div>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export function useProjects() {
  const [showProjects, setShowProjects] = useState(false);

  const DemoModalCallback = useCallback(() => {
    return (
      <Projects showProjects={showProjects} setShowProjects={setShowProjects} />
    );
  }, [showProjects, setShowProjects]);

  return useMemo(
    () => ({ setShowProjects, Projects: DemoModalCallback }),
    [setShowProjects, DemoModalCallback]
  );
}
