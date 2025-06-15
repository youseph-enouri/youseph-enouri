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
                    <h2 className="text-left text-xl font-bold">Manufacturing Design Intern<span className="font-normal text-[#4A4A4A]"> - Tigercat Industries</span></h2>
                    <span className="font-normal">Jan - August 2025</span>
                  </div>
                  <p className=" text-left text-sm">
                  Designed and spearheaded several lean manufacturing improvements modelling and processing 65+ projects across multiple plants. Worked cross functionally with senior engineers to brainstorm and implement both dynamic and static designs.
                  Created a large scale safety guard for sheave testing on the 6900 Grinder. Increased safety and convinience by 90%. Directed several weldments in-house and at bordering plants to ensure proper communication of engineering drawings.
                  Created a VBA macro enabled priority tracker and weldment tracker to create cohesion between production and manufacturing designs, increasing productivity by 80%.
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-col  gap-1">
                  <div className="flex flex-row justify-between">
                    <h2 className="text-left text-xl font-bold">Design and Validation Intern <span className="font-normal text-[#4A4A4A]"> - Skyjack Inc.</span></h2>
                    <span className="font-normal"> May - August 2024</span>
                  </div>
                  <p className=" text-left text-sm">
                  Scheduled and executed Master Schedule meetings to promtly update progress on engineering ongoing projects. Developed several automated spreadsheets accounting for daily tedious tasks. This increased productivity by 75%. Designed a Rotary Encoder Signal Conditioner compatible with eDAQ device for RPM and CAN data analysis on all machines.

                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-col  gap-1">
                  <div className="flex flex-row justify-between">
                    <h2 className="text-left text-xl font-bold">Research Assistant<span className="font-normal text-[#4A4A4A]"> - University of Guelph</span></h2>
                    <span className="font-normal">May 2023 - Jan 2025</span>
                  </div>
                  <p className=" text-sm text-left">
                  Accompanied MSc and PhD candidates under professor supervision to complete ongoing research projects. Designed and fabricated an updated version of a copper electrode sensor to accurately convey data from flow patterns.
                  This sensor has 40 electrodes in comparison to the past model with only 4, increasing credibility significantly. 
                  Additionally I designed a prototype of a solar powered packed bed dehumidifier which proved through litterature reviews and a detailed mathematical model to efficiently generate water through atmospheric air.

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
