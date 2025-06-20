import Modal from "@/components/shared/modal";
import {
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
} from "react";
// import HOCKEY from "public/Hockey.png";
// import FOOTBALL from "public/Football.png";
// import SKATE from "public/Skate.png";
// import SHOE from "public/Shoe.png";
// import WORKOUT from "public/Workout.png";
// import Image from "next/image";

const Interests = ({
  showInterests,
  setShowInterests,
}: {
  showInterests: boolean;
  setShowInterests: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Modal showModal={showInterests} setShowModal={setShowInterests}>
      <div className="w-full overflow-hidden md:max-w-4xl md:rounded-2xl md:border md:border-gray-100 md:shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 bg-white px-4 py-6 pt-8 text-center md:px-16">
          <h3 className="font-display text-2xl font-bold">Personal Interests</h3>
          <div className="bg-[#4A4A4A] w-full h-0.5"></div>
          <div className="flex flex-row flex-wrap gap-5 justify-center">
            {INTERESTS.map((interests) => (
              <div
                key={interests.name}
                className="flex flex-col gap-5 border-2 rounded-xl border-gray-200 p-5 items-center"
              >
                {interests.name}
                {/* 
                <Image 
                  className="rounded-lg"
                  src={interests.image}
                  alt={interests.name}
                  width={100}
                /> 
                */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export function useInterests() {
  const [showInterests, setShowInterests] = useState(false);

  const DemoModalCallback = useCallback(() => {
    return (
      <Interests
        showInterests={showInterests}
        setShowInterests={setShowInterests}
      />
    );
  }, [showInterests, setShowInterests]);

  return useMemo(
    () => ({ setShowInterests, Interests: DemoModalCallback }),
    [setShowInterests, DemoModalCallback]
  );
}

export const INTERESTS = [
  {
    name: "Hockey",
    // image: HOCKEY,
  },
  {
    name: "Football",
    // image: FOOTBALL,
  },
  {
    name: "Skateboarding",
    // image: SKATE,
  },
  {
    name: "Working Out",
    // image: WORKOUT,
  },
  {
    name: "Shoe Collection",
    // image: SHOE,
  },
];
