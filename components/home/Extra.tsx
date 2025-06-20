import Modal from "@/components/shared/modal";
import {
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
} from "react";
// import QMIND from "public/QMIND.png";
// import QTMA from "public/QTMA.png";
// import ICONS from "public/ICONS.png";
// import Image from "next/image";

const Extra = ({
  showExtra,
  setShowExtra,
}: {
  showExtra: boolean;
  setShowExtra: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Modal showModal={showExtra} setShowModal={setShowExtra}>
      <div className="w-full overflow-hidden md:max-w-4xl md:rounded-2xl md:border md:border-gray-100 md:shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 bg-white px-4 py-6 pt-8 text-center md:px-16">
          <h3 className="font-display text-2xl font-bold">Extra-Curricular Activities</h3>
          <div className="bg-[#4A4A4A] w-full h-0.5"></div>
          <div className="flex flex-row flex-wrap justify-center">
            <div className="flip-container overflow-hidden">
              <div className="flipper">
                <div className="front flex justify-center gap-5 shadow-md">
                  {/* 
                  <Image 
                    src={QTMA}
                    alt="QTMA"
                    width={200}
                    height={100}
                  />
                  */}
                  <div className="w-[220px] h-[30px] rounded-xl border border-gray bg-white">
                    {/* Senior Software Developer */}
                  </div>
                </div>
                <div className="back text-xs">
                  <div className="w-[70%]">
                    {/* Engineered a software product using 5+ distinct technologies... */}
                  </div>
                </div>
              </div>
            </div>

            <div className="flip-container overflow-hidden">
              <div className="flipper">
                <div className="front flex justify-center gap-5 shadow-md">
                  {/* 
                  <Image 
                    src={QMIND}
                    alt="Product Team"
                    width={200}
                    height={100}
                  />
                  */}
                  <div className="w-[220px] h-[30px] rounded-xl border border-gray bg-white">
                    {/* Product Team */}
                  </div>
                </div>
                <div className="back text-xs">
                  <div className="w-[70%]">
                    {/* Engineered the QMIND.ca website. Implemented the front end... */}
                  </div>
                </div>
              </div>
            </div>

            <div className="flip-container overflow-hidden">
              <div className="flipper">
                <div className="front flex justify-center gap-5 shadow-md">
                  {/* 
                  <Image 
                    src={ICONS}
                    alt="iCons"
                    width={200}
                    height={100}
                  />
                  */}
                  <div className="w-[220px] h-[30px] rounded-xl border border-gray bg-white">
                    {/* iCon */}
                  </div>
                </div>
                <div className="back text-xs">
                  <div className="w-[70%]">
                    {/* Operated after ILC administration hours to keep the facility open... */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export function useExtra() {
  const [showExtra, setShowExtra] = useState(false);

  const DemoModalCallback = useCallback(() => {
    return (
      <Extra
        showExtra={showExtra}
        setShowExtra={setShowExtra}
      />
    );
  }, [showExtra, setShowExtra]);

  return useMemo(
    () => ({ setShowExtra, Extra: DemoModalCallback }),
    [setShowExtra, DemoModalCallback]
  );
}
