import Maincard from "./components/Maincard";
import Dashboadrcard from "./components/Dashboardcard";
import './scss/app.scss';
import { activities } from "./assets/data.js"
import { v4 as unicId } from 'uuid'; //генерация уникальных ключей

export default function App() {
  return (
    <div className="App">
      <main>
        <Maincard />
        {activities.map((obj) => (
          <Dashboadrcard key={unicId()} title={obj.title} timeframes={obj.timeframes} imgSrc={obj.imgSrc}/>
        ))}
        
      </main>
    </div>
  );
}


