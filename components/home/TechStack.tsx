// import Modal from "@/components/shared/modal";
// import {
//   useState,
//   Dispatch,
//   SetStateAction,
//   useCallback,
//   useMemo,
// } from "react";
// import C from "public/C.png"
// import CP from "public/C++.png"
// import PYTHON from "public/PYTHON.png"
// import JAVA from "public/JAVA.png"
// import JS from "public/JS.png"
// import TS from "public/TS.png"
// import AWS from "public/AWS.png"
// import NEXT from "public/NEXT.png"
// import REACT from "public/REACT.png"
// import GIT from "public/GIT.png"
// import SQL from "public/SQL.png"
// import Image from "next/image";

// const TechStack = ({
//   showTechStack,
//   setShowTechStack,
// }: {
//   showTechStack: boolean;
//   setShowTechStack: Dispatch<SetStateAction<boolean>>;

// }) => {

//   return (
//     <Modal showModal={showTechStack} setShowModal={setShowTechStack}>
//       <div className="w-full overflow-hidden md:max-w-4xl md:rounded-2xl md:border md:border-gray-100 md:shadow-xl">
//         <div className="flex flex-col items-center justify-center space-y-3 bg-white px-4 py-6 pt-8 text-center md:px-16">
//           <h3 className="font-display text-2xl font-bold">Tech Stack</h3>
//           <div className="bg-[#4A4A4A] w-[100%] h-0.5"></div>
//             <div className=" flex flex-row flex-wrap justify-center pt-3 gap-3">
//               <div className="float rounded-full border-[1px] border-[#36CEE9] w-[125px] h-[125px] flex justify-center items-center">
//                 <Image 
//                   src={C}
//                   alt="kayne"
//                   width={80}
//                 />
//               </div>
//               <div className="rounded-full border-[1px] border-[#33BAEA] w-[125px] h-[125px] flex justify-center items-center">
//                 <Image 
//                   src={CP}
//                   alt="kayne"
//                   width={80}
//                 />
//               </div>
//               <div className="rounded-full border-[1px] border-[#2FA3EC] w-[125px] h-[125px] flex justify-center items-center">
//                 <Image 
//                   src={PYTHON}
//                   alt="kayne"
//                   width={80}
//                 />
//               </div>
//               <div className="rounded-full border-[1px] border-[#2C91ED] w-[125px] h-[125px] flex justify-center items-center">
//                 <Image 
//                   src={JAVA}
//                   alt="kayne"
//                   width={48}
//                 />
//               </div>
//               <div className="rounded-full border-[1px] border-[#2C91ED] w-[125px] h-[125px] flex justify-center items-center">
//                 <Image 
//                   src={JS}
//                   alt="kayne"
//                   className="rounded-lg"
//                   width={70}
//                 />
//               </div>
//               <div className="rounded-full border-[1px] border-[#30A9EB] w-[125px] h-[125px] flex justify-center items-center">
//                 <Image 
//                   src={TS}
//                   alt="kayne"
//                   width={70}
//                 />
//               </div>
//               <div className="rounded-full border-[1px] border-[#2C90ED] w-[125px] h-[125px] flex justify-center items-center">
//                 <Image 
//                   src={AWS}
//                   alt="kayne"
//                   width={80}
//                 />
//               </div>
//               <div className="rounded-full border-[1px] border-[#2878EE] w-[125px] h-[125px] flex justify-center items-center">
//                 <Image 
//                   src={NEXT}
//                   alt="kayne"
//                   width={80}
//                 />
//               </div>
//               <div className="rounded-full border-[1px] border-[#2FA4EC] w-[125px] h-[125px] flex justify-center items-center">
//                 <Image 
//                   src={REACT}
//                   alt="kayne"
//                   width={80}
//                 />
//               </div>
//               <div className="rounded-full border-[1px] border-[#2B89ED] w-[125px] h-[125px] flex justify-center items-center">
//                 <Image 
//                   src={SQL}
//                   alt="kayne"
//                   width={80}
//                 />
//               </div>
//               <div className="rounded-full border-[1px] border-[#2670EF] w-[125px] h-[125px] flex justify-center items-center">
//                 <Image 
//                   src={GIT}
//                   alt="kayne"
//                   width={80}
//                 />
//               </div>
//             </div>
//         </div>
//       </div>
//     </Modal>
//   );
// };

// export function useTechStack() {
//   const [showTechStack, setShowTechStack] = useState(false);

//   const DemoModalCallback = useCallback(() => {
//     return (
//       <TechStack
//         showTechStack={showTechStack}
//         setShowTechStack={setShowTechStack}
//       />
//     );
//   }, [showTechStack, setShowTechStack]);

//   return useMemo(
//     () => ({ setShowTechStack, TechStack: DemoModalCallback }),
//     [setShowTechStack, DemoModalCallback],
//   );
// }
import Modal from "@/components/shared/modal";
import {
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
} from "react";
import IconCloud from "@/components/icon-could"; // Assuming this is the correct import path

const TechStack = ({
  showTechStack,
  setShowTechStack,
}: {
  showTechStack: boolean;
  setShowTechStack: Dispatch<SetStateAction<boolean>>;
}) => {
  // Define technology slugs for IconCloud
  const slugs = [
    "C.png",
    "C++.png",
    "PYTHON.png",
    "SolidWorks.png",
    "ANSYS.png",
    "autocad.png",     
    "NEXT.png",
    "GIT.png",
    "HTML.png",
    "CSS.png",
    "mastercam.png",
    "excel.png",
    "PowerBI.png",
  ];

  return (
    <Modal showModal={showTechStack} setShowModal={setShowTechStack}>
      <div className="w-full overflow-hidden md:max-w-4xl md:rounded-2xl md:border md:border-gray-100 md:shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 bg-white px-4 py-6 pt-8 text-center md:px-16">
          <h3 className="font-display text-2xl font-bold">Tech Stack</h3>
          <div className="bg-[#4A4A4A] w-[100%] h-0.5"></div>
          <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden bg-background pb-20 pt-8 mx-auto">
            <IconCloud imageArray={slugs} />
          </div>
        </div>
      </div>
    </Modal>
  );
};

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
    [setShowTechStack, TechStackCallback],
  );
}