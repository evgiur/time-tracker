import Maincart from "./components/Maincart";
import Dashboadrcart from "./components/Dashboardcart";
import './scss/app.scss';

export default function App() {
  return (
    <div className="App">
      <Maincart />
      <Dashboadrcart />
    </div>
  );
}


