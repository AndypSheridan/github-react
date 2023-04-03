import logo from './logo.svg';
import './App.css';
import StatefulGreeting from './components/StatefulGreeting';

function App() {
  return (
    <div className="App">
      {/* <FunctionalGreeting /> */}
      {/* FunctionalGreetingWithProps greeting="Nice to meet you!" name="Andy" */}
      <StatefulGreeting greeting="I'm a stateful class component!" name="Andy" />
    </div>
  );
}

export default App;
