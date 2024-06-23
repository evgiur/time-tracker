import Maincard from "./components/Maincard";
import Dashboadrcard from "./components/Dashboardcard";
import './scss/app.scss';

export default function App() {
  return (
    <div className="App">
      <body className="body">
        <Maincard />
        <Dashboadrcard /> 
      </body>
    </div>
  );
}


