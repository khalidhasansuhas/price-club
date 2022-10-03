import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Pricing from './components/Pricing/Pricing';
import AssignmentMarks from './components/AssignmentMarks/AssignmentMarks';
import PhoneBar from './components/PhoneBar/PhoneBar';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Pricing></Pricing>
      <h1 className='text-4xl font-semibold mt-5'> Assignment Mark presentaion using lineChart</h1>
      <AssignmentMarks></AssignmentMarks>
      <h1 className='text-4xl font-semibold mt-5'> Phone Price presentaion using axios and barChart</h1>
      <PhoneBar></PhoneBar>
    </div>
  );
}

export default App;
