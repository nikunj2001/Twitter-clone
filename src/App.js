import './App.css';
import SideBar from './components/SideBar'
import Twittes from './components/Twittes'
import Trends from './components/Trends'
function App() {
  return (
    <div className="twitter">
      <SideBar/>
      <Twittes/>
      <Trends/>
    </div>
  );
}

export default App;
