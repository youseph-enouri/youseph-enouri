import Modal from "@/components/shared/modal";
import {
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
} from "react";
import Image from "next/image";
import SMITH from "public/SMITH.png"
import DEBACLE from "public/Debacle.png"
import STRAFFIC from "public/STRAFFIC.png"

const PastExperiences = ({
  showPastExperiences,
  setShowPastExperiences,
}: {
  showPastExperiences: boolean;
  setShowPastExperiences: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Modal showModal={showPastExperiences} setShowModal={setShowPastExperiences}>
      <div className="w-full overflow-hidden md:max-w-4xl md:rounded-2xl md:border md:border-gray-100 md:shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 bg-white px-4 py-6 pt-8 text-center md:px-16">
          <h3 className="font-display text-2xl font-bold">Past Experiences</h3>
          <div className="bg-[#4A4A4A] w-[100%] h-0.5"></div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-row justify-between">
                <div className="flex flex-col  gap-1">
                  <div className="flex flex-row justify-between">
                    <h2 className="text-left text-xl font-bold">Teaching Assistant <span className="font-normal text-[#4A4A4A]"> - Queen's</span></h2>
                    <span className="font-normal">Winter 2024</span>
                  </div>
                  <p className=" text-left text-sm">Delivered comprehensive support to over 200 students specializing in computer programming concepts ensuring proficiency. Addressed
                    individual queries with precision, fostering a strong foundation of key principles and delivering feedback on assignments for improvement.
                    Demonstrated leadership, communication, and problem-solving skills through active engagement with students and collaborative teamwork.
                    Leveraged cutting-edge tools such as CLion and Gradescope, streamlining processes and facilitating a dynamic exchange of information.</p>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-col  gap-1">
                  <div className="flex flex-row justify-between">
                    <h2 className="text-left text-xl font-bold">Software Engineer Intern <span className="font-normal text-[#4A4A4A]"> - Debacle inc.</span></h2>
                    <span className="font-normal">Winter 2024</span>
                  </div>
                  <p className=" text-sm text-left">Engineered a highly effective Shopify plug-in app, leveraging data from over 250 Shopify stores worldwide. Employing JSON, Python, and
                    advanced machine-learning techniques to generate keywords for user recommendation enhancing user engagement and sales conversion rates.
                    Implemented secure authentication with Shopify AUTH and optimized query efficiency with GraphQL resulting in a 30% reduction in response time
                    Addressed and debugged complex challenges including Admin Block issues resulting in a 40% increase in app stability and optimized performance.</p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </Modal>
  );
};

export function usePastExperiences() {
  const [showPastExperiences, setShowPastExperiences] = useState(false);

  const DemoModalCallback = useCallback(() => {
    return (
      <PastExperiences
        showPastExperiences={showPastExperiences}
        setShowPastExperiences={setShowPastExperiences}
      />
    );
  }, [showPastExperiences, setShowPastExperiences]);

  return useMemo(
    () => ({ setShowPastExperiences, PastExperiences: DemoModalCallback }),
    [setShowPastExperiences, DemoModalCallback],
  );
}
