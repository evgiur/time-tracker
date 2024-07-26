import Maincard from "./components/Maincard";
import Dashboadrcard from "./components/Dashboardcard";
import './scss/app.scss';
// import icon from '../assets/images/icon-work.svg';
{/*const card = [{icon: icon, color:  }]*/}

export default function App() {
  return (
    <div className="App">
      <main>
        <Maincard />
        <Dashboadrcard />
        <Dashboadrcard /> 
        <Dashboadrcard /> 
        <Dashboadrcard /> 
        <Dashboadrcard /> 
        <Dashboadrcard /> 
      </main>
    </div>
  );
}


