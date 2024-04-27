import Modal from "@/components/shared/modal";
import {
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
} from "react";
import NUMERAI from "public/NumerAI.png"
import NBA from "public/NBA.png"
import SMART from "public/Smart.png"
import SPREADSHEET from "public/Spreadsheet.png"
import BITCOIN from "public/BITCOIN.png"
import WORDLE from "public/WORDLE.png"
import PACMAN from "public/PACMAN.png"

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
            <div className="bg-[#4A4A4A] w-[100%] h-0.5"></div>
            <div className="flex flex-row flex-wrap justify-center">
                <div className="flex flex-row gap-5 flex-wrap justify-center">
                    {PROJECTS.map((work) => (
                        <button
                            className="text-lg"
                            onClick={() => {
                            setProject(work);
                            }}
                            style={{
                                textDecoration: project.name === work.name ? "underline" : "none"
                            }}
                        >
                            {work.name}
                        </button>
                    ))}
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

export const PROJECTS = [
    {
      name: "NumerAI Model",
      technologies: ["Python", "API"],
      highlights: 
        "Developped a ML model to participate in the NumerAI tournament to trade crypto currencies. Currently have a 12% profit and ranked top 25 in the season. Used a LightGBM model to process the data given by NumerAI.",
      image: NUMERAI,
      github: "https://github.com/kayne-lee/numerAIModel",
      website: "https://numer.ai/~kaynelee",
    },
    {
      name: "SmartPlate",
      technologies: ["Next.js", "OpenAI"],
      highlights: 
        "Created a Next.js application integrated with OpenAI API to create a budget friendly meal planner. Took data from the user and input into a GPT-3.5-Turbo model and output a list of meals along with ingredients and price of the meal. These ingredients could then be added to a grocery list where all the ingredients needed are stored along with total price, number of meals, and average cost per meal spent.",
      image: SMART,
      github: "https://github.com/kayne-lee/smartplate",
      website: "https://youtu.be/L--EFs7gULE",
    },
    {
      name: "NBA Game Predictor",
      technologies: ["Python", "Jupyter Notebook"],
      highlights: 
        "Created an algorithm to predict the outcome of future NBA gamers. This was done by web scraping NBA box scores through BeautifulSoup and parsed the box scores into Pandas data frames. This data was used to train a machine learning model to make predictions.",
      image: NBA,
      github: "https://github.com/kayne-lee/NBA-Game-Predictor",
      website: "",
    },
      {
      name: "Bitcoin Predictor",
      technologies: ["Python", "Jupyter Notebook"],
      highlights: 
        "Developed an algorithm to predict the future price of Bitcoin using historical price and sentimental data. This project used USD/BTC price from Yahoo Fincance, along with data from wikipedia about edits to the Bitcoin page. These datas were merged then used to train a random forest model then switched to XGBoost model to improve accuracy. Developped a backtesting system and use a robust error metric to determine if the algorithm is performing well. This system is also able to make next-day predictions.",
      image: BITCOIN,
      github: "https://github.com/kayne-lee/bitcoin-predictor",
      website: "",
    },
    {
      name: "Wordle",
      technologies: ["React.js", "Node.js", "JSON"],
      highlights: 
        "Created a clone of the New York Times game, Wordle, using React.js. Implemented all of the rules used in the real game. This project used a database using JSON. The project would take in user input, and would check for the correct letters. Letters would display different colours based off the results.",
      image: WORDLE,
      github: "https://github.com/kayne-lee/kayneWordle",
      website: "https://youtu.be/GgezcaMuh8o",
    },
    
  
  ];
  