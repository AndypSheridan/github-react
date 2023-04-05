import logo from './logo.svg';
import './App.css';
// import StatefulGreeting from './components/StatefulGreeting';
// import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';
import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';

function App() {
  return (
    <div className="App">
      {/* <FunctionalGreeting /> */}
      {/* FunctionalGreetingWithProps greeting="Nice to meet you!" name="Andy" */}
      <StatefulGreetingWithPrevState />
    </div>
  );
}

export default App;
