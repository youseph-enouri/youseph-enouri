import Modal from "@/components/shared/modal";
import {
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
} from "react";
// import Image from "next/image"; // ⬅️ also commented out

export const PROJECTS = [
  {
    name: "Rotary Encoder Signal Conditioner",
    technologies: ["C++", "Arduino", "SolidWorks"],
    highlights:
      "Designed and prototyped a rotary encoder signal conditioner to aid in RPM testing on Skyjack Machinery. Created a final product for in-house use and tested under several conditions. This device has been added to the Skyjack Test and Validation department as a Transducer compatible with the eDAQ system. The connections are compatible with both Molex and Deutch bulk connectors for transferability. Data is collected and passed through the arduino script to be converted to CAN data.",
    // image: "Caption.png",
  },
  {
    name: "6900 Grinder Belt Guard",
    technologies: ["Weldment", "SolidWorks", "FEA"],
    highlights:
      "Designed and managed the weldment of a 1:1 belt guard for sheave testing of the Grinder belt. This guard ensures safety is accounted for while having access to the sheave for marking when needed. The components of this guard include several bent sheet metal parts, lexan sheets for visability, and a accesible door for sheave access. Furthermore a lifting lug is included and located at the Center of Gravity for safe lifting and mounting of this guard. Extensive weld calculations were performed to ensure the appropriate welds were made (majority are filet welds).",
    // image: "Caption.png",
  },
  {
    name: "Trestles",
    technologies: ["Weldment", "Spring loaded", "FEA"],
    highlights:
      "Designed and spearheaded the weldment and assembly of a high capacity Trestle stand. Two were made for use within different bays. These stands were made up of tubing and a few bent plates. The wheels are strategically engineered to compress and retract once the weight is placed on the trestles, keeping them stationary and secure. Weightless trestles are easily transportable through the unretrackted wheels. This mechanism can be seen below in the DWG as well as the model. The chain link is added to ensure the wheel subassembly does not fall out if the trstles are lifted high off the ground using jib cranes.",
    // image: "NumerAI.png",
  },
  {
    name: "Trackstand",
    technologies: ["Sheet metal", "SolidWorks"],
    highlights:
      "Designed and fabricated a st of trackstands to support the heavy tracks during assembly. The tracks rest on these stands to ensure safe assembly. The stands are strategically made to increase in height as needed with a self locking nut. These can also be sloped within 30 degrees.",
    // image: "Smart.png",
  },
  {
    name: "Prop Stands",
    technologies: ["Break Press", "Solidworks"],
    highlights:
      "Designed and developed 4 Prop Stands to hold open the roof of Tigercats 800's machines. A turnbuckle is used in each rpop stand for adjustability and rigidity. Additionally, a sophisticated set of nut patterns is used within both tubing sections to ensure proper locking and assembly strength. FEA was conducted to ensure the Prop Stand could sufficiently support the weight of the roof within a factor of safety of 3.",
    // image: "BITCOIN.png",
  },
  {
    name: "Cooler Carts",
    technologies: ["Break Press", "Solidworks", "Weldment"],
    highlights:
      "Designed and developed two dual cooler carts for the storage and transportation of cooler carts from initial assembly to machine assembly. These carts have angled platforms allowing the carts to rest stably.",
    // image: "BITCOIN.png",
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
            <p className="text-sm text-gray-700 w-full text-left whitespace-pre-wrap">
              {project.highlights}
            </p>
            {/* 
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
            */}
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
