import Card from "./components/Card";

function App() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col h-screen md:h-auto md:flex-row w-screen md:max-w-[610px] shadow-lg md:rounded-3xl">
        <div className="md:flex-1 text-center flex flex-col md:justify-between items-center gap-4 md:gap-6 bg-gradient-to-t from-light-royal-blue to-light-slate-blue p-9 rounded-b-3xl md:rounded-3xl">
          <h1 className="text-secondary text-lg">Your Result</h1>
          <div className="border border-none rounded-full h-[150px] w-[150px] flex flex-col justify-center bg-gradient-to-t from-persian-blue to-violet-blue">
            <p className="text-white text-[50px] font-bold leading-[55px]">
              76
            </p>
            <p className="text-gray-400 text-sm">of 100</p>
          </div>
          <div>
            <h2 className="text-white text-2xl mb-2">Great</h2>
            <p className="text-gray-400">
              You scored higher than 65% of the people who have taken these test
            </p>
          </div>
        </div>
        <div className="flex-1 p-9 flex flex-col gap-6 justify-between">
          <h2 className="text-dark-grey-blue text-lg">Summary</h2>
          <div className="flex flex-col gap-3">
            <Card icon="./icon-reaction.svg" title="Reaction" score={80} />
            <Card icon="./icon-memory.svg" title="Memory" score={92} />
            <Card icon="./icon-verbal.svg" title="Verbal" score={61} />
            <Card icon="./icon-visual.svg" title="Visual" score={72} />
          </div>
          <button className="bg-dark-grey-blue text-white rounded-full p-3 hover:bg-gradient-to-t from-light-royal-blue to-light-slate-blue">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
