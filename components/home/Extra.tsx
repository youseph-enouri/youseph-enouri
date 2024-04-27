import Modal from "@/components/shared/modal";
import {
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
} from "react";
import QMIND from "public/QMIND.png"
import Image from "next/image";

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
            <div className="bg-[#4A4A4A] w-[100%] h-0.5"></div>
            <div className="flex flex-row">
                <div className="flip-container overflow-hidden">
                    <div className="flipper ">
                        <div className="front items-center justify-center flex justify-between">
                            <Image 
                                src={QMIND}
                                alt="Product Team"
                                width={200}
                                height={100} // Assuming you want to control the height as well
                            />
                            <div className="w-[220px] h-[30px] rounded-xl border border-gray-200 bg-white">
                                Product Team
                            </div>
                        </div>
                        <div className="back">
                            <div>More information about the Product Team</div>
                            <div>Details about roles and contributions</div>
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
    [setShowExtra, DemoModalCallback],
  );
}
