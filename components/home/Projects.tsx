import Modal from "@/components/shared/modal";
import {
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
} from "react";
import QMIND from "public/QMIND.png"
import QTMA from "public/QTMA.png"
import ICONS from "public/ICONS.png"
import Image from "next/image";

const Projects = ({
  showProjects,
  setShowProjects,
}: {
  showProjects: boolean;
  setShowProjects: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Modal showModal={showProjects} setShowModal={setShowProjects}>
      <div className="w-full overflow-hidden md:max-w-4xl md:rounded-2xl md:border md:border-gray-100 md:shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 bg-white px-4 py-6 pt-8 text-center md:px-16">
            <h3 className="font-display text-2xl font-bold">Projects</h3>
            <div className="bg-[#4A4A4A] w-[100%] h-0.5"></div>
            <div className="flex flex-row flex-wrap justify-center">
                <div className="flip-container overflow-hidden">
                    <div className="flipper ">
                        <div className="front flex justify-center gap-5 shadow-md">
                            <Image 
                                src={QTMA}
                                alt="QTMA"
                                width={200}
                                height={100} // Assuming you want to control the height as well
                            />
                            <div className="w-[220px] h-[30px] rounded-xl border border-gray bg-white">
                                Senior Software Developer
                            </div>
                        </div>
                        <div className="back text-xs ">
                            <div className="w-[70%]">Engineered a software product using 5+ distinct technologies, contributing to a full-stack solution.
Acted as a dynamic leader within the development team, directly managing a sub-team of 4 developers and oversaw contributions to the project.</div>
                        </div>
                    </div>
                </div>
                <div className="flip-container overflow-hidden">
                    <div className="flipper ">
                        <div className="front flex justify-center gap-5 shadow-md">
                            <Image 
                                src={QMIND}
                                alt="Product Team"
                                width={200}
                                height={100} // Assuming you want to control the height as well
                            />
                            <div className="w-[220px] h-[30px] rounded-xl border border-gray bg-white">
                                Product Team
                            </div>
                        </div>
                        <div className="back text-xs">
                            <div className="w-[70%]">Engineered the QMIND.ca website. Implemented the front end using Next.js and backend system of Supabase to allow users to sign in with JWT authentication system and submit their projects for display on the website.</div>
                        </div>
                    </div>
                </div>
                <div className="flip-container overflow-hidden">
                    <div className="flipper ">
                        <div className="front flex justify-center gap-5 shadow-md">
                            <Image 
                                src={ICONS}
                                alt="iCons"
                                width={200}
                                height={100} // Assuming you want to control the height as well
                            />
                            <div className="w-[220px] h-[30px] rounded-xl border border-gray bg-white">
                                iCon
                            </div>
                        </div>
                        <div className="back">
                            <div className="text-xs w-[70%]">Operated after ILC administration hours to keep the facility open to students promote a positive studying and learning atmosphere, and to act as a resource to undergraduate students for academic courses.</div>
                        </div>
                    </div>
                </div>
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
      <Projects
        showProjects={showProjects}
        setShowProjects={setShowProjects}
      />
    );
  }, [showProjects, setShowProjects]);

  return useMemo(
    () => ({ setShowProjects, Projects: DemoModalCallback }),
    [setShowProjects, DemoModalCallback],
  );
}
