import Maincart from "./components/Maincard";
import Dashboadrcart from "./components/Dashboardcard";
import './scss/app.scss';

export default function App() {
  return (
    <div className="App">
      <body className="body">
        <Maincart />
        <Dashboadrcart /> 
      </body>
    </div>
  );
}


