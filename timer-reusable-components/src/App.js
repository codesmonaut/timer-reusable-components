import Stopwatch from './components/Stopwatch';
import CountdownTimer from './components/CountdownTimer';

const App = () => {
  return (
    <div className="App">
      <div className="content">
        <Stopwatch></Stopwatch>
        <CountdownTimer cT={`Oct 01, 2022 00:00:00`}></CountdownTimer>
      </div>
    </div>
  );
}

export default App;
