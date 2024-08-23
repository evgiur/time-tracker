import Maincard from "./components/Maincard";
import Dashboadrcard from "./components/Dashboardcard";
import './scss/app.scss';
// import icon from '../assets/images/icon-work.svg';
import activities from "../src/assets/images/data.json"

export default function App() {
  return (
    <div className="App">
      <main>
        <Maincard />
        {activities.map((obj) => (
          <Dashboadrcard title={obj.title} timeframes={obj.timeframes}/>
        ))}
        
      </main>
    </div>
  );
}


