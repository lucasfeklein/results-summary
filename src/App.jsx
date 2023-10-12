function App() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex">
        <div className="flex-1 text-center flex flex-col bg-gradient-to-t from-light-royal-blue to-light-slate-blue">
          <h1>Your Result</h1>
          <div>
            <p className="text-white">76</p>
            <p>of 100</p>
          </div>
          <h2 className="text-white">Great</h2>
          <p>
            You scored higher than 65% of the people who have taken these test
          </p>
        </div>
        <div className="flex-1">
          <h2>Summary</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
