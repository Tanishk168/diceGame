import { use, useEffect, useState } from "react";

export const GamePage = () => {
  const [score, setScore] = useState(0);
  const [numberSelected, setNumberSelected] = useState(null);
  const [noSelectionError, setNoSelectioneError] = useState(false);
  const numbers = [1, 2, 3, 4, 5, 6];
  const [showRules, setShowRules] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isRolled,setIsRolled] = useState(0)


  const rollDice = () => {
    
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    console.log(randomNumber);
    setIsRolled(randomNumber)
    if (randomNumber == numberSelected) {
      setScore((prev) => prev + randomNumber);
    } else {
      if (score >= 2) {
        setScore((prev) => prev - 2);
      }
    }
  };

  useEffect(() =>{
    setTimeout (() => {
      setIsVisible(true)
    },10)
  }),[];

  return (
    // main wrapper div
    <div className={`w-full  h-screen justify-center px-6 py-8 duration-1000 ${isVisible ? "opacity-100 translate-x-8 " : "opacity-0 translate-x-0"} transition-all ease-in-out`}>
      {/* top setcion div*/}
      <div className="w-full h-[20%] flex justify-between ">
        {/* score */}
        <div className="flex flex-col items-center ">
          <h1 className="text-xl md:text-6xl font-semibold">{score}</h1>
          <h4 className="font-medium text-xl md:text-2xl">Total Score</h4>
        </div>
        {/* numbers selection */}

        <div className="w-1/2 flex flex-col items-center ">
          {noSelectionError && (
            <p className="text-red-400 text-xl md:text-2xl fond-medium">
              You have not selected any number
            </p>
          )}
          <div className="space-x-5 px-4">
            {numbers.map((num, key) => {
              return (
                <button
                  key={key}
                  onClick={() => {
                    setNumberSelected(num);
                    setNoSelectioneError(false);
                  }}
                  className={`
                ${
                  numberSelected == num
                    ? "bg-black  text-white"
                    : "bg-white text-black"
                }
                 border py-3 px-5 my-1 font-semibold text-xl md:text-2xl`}
                >
                  {num}
                </button>
              );
            })}
          </div>
          <h4 className="font-medium text-xl md:text-2xl flex justify-center my-3">
            Select number
          </h4>
        </div>
      </div>
      {/* mid */}
      <section id="Game" className=" w-full h-[50%] flex justify-center">
        <div className="my-6 flex flex-col p-4  items-center justify-center">
          <img
            src={isRolled ? `./images/dice-face-${isRolled}.png` : './images/dice-face-1.png'}
            onClick={() =>
              numberSelected ? rollDice() : setNoSelectioneError(true)
            }
            className=" h-[30vh]  object-contain transition-transform ease-in-out duration-900"
            alt="not loading"
          />

          <h3 className=" text-xl md:text-2xl font-medium">
            Click on dice to roll
          </h3>
          <div className="my-3 mt-8 flex flex-col gap-2 ">
            <button
              onClick={() => setScore(0)}
              className="border text-xl md:2xl font-medium rounded  px-5 py-1 hover:shadow-[2px_5px_15px_rgba(210,200,200,1)]"
            >
              Reset Score
            </button>
            <button
              onClick={() => setShowRules(true)}
              className="border text-white bg-black text-lg md:text-xl font-medium rounded  px-5 py-1 hover:shadow-[2px_5px_15px_rgba(210,200,200,1)]"
            >
              Show Rules
            </button>
          </div>
        </div>
      </section>
      {/* Rules */}
      <section id="Rules" className={` w-full h-[20%]  ${showRules ? "flex" : "hidden"} justify-center items-center`}>
        <div className="border w-2xl mt-18 h-40 md:w-3xl bg-[rgba(251,241,241,1)] p-4 overflow-y-auto">
          <h1 className="text-xl md:text-2xl font-bold ">
            How To Play Dice Game
          </h1>
          <ul className="space-y-1 list-disc list-inside ">
            <li className="text-sm md:text-xl font-normal">Select any number</li>
            <li className="text-sm md:text-xl font-normal">Click on dice image</li>
            <li className="text-sm md:text-xl font-normal">After clicking on dice:</li>
            <li className="text-sm md:text-xl font-normal">
              If selected number is equal to dice number, you will get same
              points as dice
            </li>
            <li className="text-sm md:text-xl font-normal">If you get wrong guess, then 2 points will be deducted</li>
          </ul>
        </div>
      </section>
    </div>
  );
};
