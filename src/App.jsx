function App() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex border rounded-3xl overflow-hidden">
        <div className="flex-1 text-center flex flex-col items-center gap-5 bg-gradient-to-t from-light-royal-blue to-light-slate-blue p-7 border rounded-3xl">
          <h1 className="text-secondary text-lg">Your Result</h1>
          <div className="border border-none rounded-full h-[130px] w-[130px] flex flex-col justify-center bg-gradient-to-t from-light-royal-blue to-light-slate-blue">
            <p className="text-white text-[50px] font-bold leading-[45px]">
              76
            </p>
            <p className="text-secondary">of 100</p>
          </div>
          <div>
            <h2 className="text-white text-2xl mb-2">Great</h2>
            <p className="text-secondary">
              You scored higher than 65% of the people who have taken these test
            </p>
          </div>
        </div>
        <div className="flex-1">
          <h2>Summary</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
