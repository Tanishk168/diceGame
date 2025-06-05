export const Home = ({setIsGameLoaded,isGameLoaded}) => {
  return (
    <section
      id="Home"
      className="w-full flex h-100% flex-col md:flex-row justify-center items-center "
    >
      <div className="flex-1 w-full md:max-w-1/2 h-auto  flex justify-center items-center ">
        <img
          className=" object-scale-down md:object-cover  "
          src="./images/dices 1.png"
          alt="Dice imaage"
        />
      </div>
      <div className=" flex flex-1  w-full  md:max-w-1/2 flex-col px-10 py-4">
        <h1 className="text-3xl md:text-7xl   font-bold">DICE GAME</h1>
        <div className="flex justify-end">
          <button onClick={() => setIsGameLoaded(true)} className="text-base md:text-3xl lg:text-5xl  text-white bg-black font-medium h- rounded-xl mt-4 px-7 py-3">
            Play Now
          </button>
        </div>
      </div>
    </section>
  );
};
