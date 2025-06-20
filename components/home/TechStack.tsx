import Modal from "@/components/shared/modal";
import {
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
} from "react";
import Image from "next/image";

// ✅ Static imports (adjust paths if needed)
import C from "public/C.png";
import CPP from "public/C++.png";
import PYTHON from "public/PYTHON.png";
import SOLIDWORKS from "public/SolidWorks.png";
import ANSYS from "public/ANSYS.png";
import AUTOCAD from "public/autocad.png";
import NEXT from "public/NEXT.png";
import GIT from "public/GIT.png";
import HTML from "public/HTML.png";
import CSS from "public/CSS.png";
import MASTERCAM from "public/mastercam.png";
import EXCEL from "public/excel.png";
import POWERBI from "public/PowerBI.png";

// ✅ Tech icon data
const techIcons = [
  { src: C, size: 70 },
  { src: CPP, size: 70 },
  { src: PYTHON, size: 75 },
  { src: SOLIDWORKS, size: 60 },
  { src: ANSYS, size: 65 },
  { src: AUTOCAD, size: 60 },
  { src: NEXT, size: 70 },
  { src: GIT, size: 60 },
  { src: HTML, size: 75 },
  { src: CSS, size: 75 },
  { src: MASTERCAM, size: 55 },
  { src: EXCEL, size: 65 },
  { src: POWERBI, size: 60 },
];

// ✅ Main component
const TechStack = ({
  showTechStack,
  setShowTechStack,
}: {
  showTechStack: boolean;
  setShowTechStack: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Modal showModal={showTechStack} setShowModal={setShowTechStack}>
      <div className="w-full overflow-hidden md:max-w-4xl md:rounded-2xl md:border md:border-gray-100 md:shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 bg-white px-4 py-6 pt-8 text-center md:px-16">
          <h3 className="font-display text-2xl font-bold">Tech Stack</h3>
          <div className="bg-[#4A4A4A] w-full h-0.5 mb-4"></div>
          <div className="flex flex-row flex-wrap justify-center gap-4">
            {techIcons.map(({ src, size }, idx) => (
              <div
                key={idx}
                className="rounded-full border border-blue-400 w-[125px] h-[125px] flex justify-center items-center"
              >
                <Image
                  src={src}
                  alt={`tech-${idx}`}
                  width={size}
                  height={size}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
};

// ✅ Hook
export function useTechStack() {
  const [showTechStack, setShowTechStack] = useState(false);

  const TechStackCallback = useCallback(() => {
    return (
      <TechStack
        showTechStack={showTechStack}
        setShowTechStack={setShowTechStack}
      />
    );
  }, [showTechStack, setShowTechStack]);

  return useMemo(
    () => ({ setShowTechStack, TechStack: TechStackCallback }),
    [setShowTechStack, TechStackCallback]
  );
}
