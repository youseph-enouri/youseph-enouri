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
                    <h2 className="text-left text-xl font-bold">Software Engineer Intern<span className="font-normal text-[#4A4A4A]"> - STraffic America</span></h2>
                    <span className="font-normal">May - August 2024</span>
                  </div>
                  <p className=" text-left text-sm">
                  Developed computer vision models for fare collection, processing 300,000+ images with 97% accuracy using YOLOv10X, resulting in $10
Million in additional revenues from fare evasion detection. Created and managed API endpoints ensuring secure data transmission via SSL/TLS and conducted real-time data processing for client-server communications. Architected and deployed an internal calendar system using Spring Boot and React, integrating RESTful APIs for efficient data handling
and employing Spring Security for robust user protection.
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-col  gap-1">
                  <div className="flex flex-row justify-between">
                    <h2 className="text-left text-xl font-bold">Teaching Assistant <span className="font-normal text-[#4A4A4A]"> - Queen&apos;s Univesity</span></h2>
                    <span className="font-normal">January - April 2024</span>
                  </div>
                  <p className=" text-left text-sm">
                  Guided 200+ students in mastering computer programming concepts, providing targeted feedback and resolving individual queries to ensure
proficiency. Directed 5 team-based design projects, guiding students in applying engineering principle and managing project timelines, collaboration, and
integration of technical, economic, and social factors.
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-col  gap-1">
                  <div className="flex flex-row justify-between">
                    <h2 className="text-left text-xl font-bold">Front End Developer<span className="font-normal text-[#4A4A4A]"> - Musical Moon</span></h2>
                    <span className="font-normal">January - April 2024</span>
                  </div>
                  <p className=" text-sm text-left">
                  Constructed the front-end for a social web platform using Next.js, serving over 1,000 active users, and reducing load times by 30% through
server-side rendering. Implemented routing and authentication to deliver personalized and efficiently retrieve user-specific data. Integrated real-time data fetching using Next.js API routes for instant updates to user profiles, posts, and notifications, improving platform.
Collaborated on UI/UX improvements, enhancing user engagement by designing intuitive interfaces and smooth navigation flows.
                  </p>
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
