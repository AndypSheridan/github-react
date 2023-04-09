import logo from './logo.svg';
import './App.css';
// import StatefulGreeting from './components/StatefulGreeting';
// import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';
// import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';
// import EventsFunctional from './components/EventsFunctional';
// import EventsClass from './components/EventsClass';
// import EventBinding from './components/EventBinding';
import ConditionalRenderingClass from './components/ConditionalRenderingClass';
import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';


function App() {
  return (
    <div className="App">
      {/* <FunctionalGreeting /> */}
      {/* FunctionalGreetingWithProps greeting="Nice to meet you!" name="Andy" */}
      {/* <StatefulGreetingWithPrevState /> */}
      {/* <EventsFunctional />
      <EventsClass /> */}
      {/* <EventBinding /> */}
      <ConditionalRenderingClass />
      <ConditionalRenderingFunctional />
    </div>
  );
}

export default App;
