// import "Your code here";
import useTimer from "./useTimer";
import ButtonsBoard from "./components/ButtonsBoard/ButtonsBoard";
import { timerContext } from "./Context/timerContext";

function App() {
  const { time, startTimer, stopTimer, resetTimer, isStart } = useTimer(0);

  return (
    <timerContext.Provider value={{ time, startTimer, stopTimer, resetTimer, isStart }}>
      <div className="container">
        <h1>Coder Timer</h1>
        <ButtonsBoard/>
      </div>
    </timerContext.Provider>
  );
}

export default App;
