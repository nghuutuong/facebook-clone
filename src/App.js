import './App.css';
import Header from './Header';
import Content from './Content';
import Login from './Login';
import {useStateValue} from "./Provider";
function App() {
  const [ {user} , dispatch ] = useStateValue();
  return ( 
    <div className="app">
      {!user ? (<Login/>) : (<>
      <div className="app_header">
        <Header/>  
      </div>
      <div className="app_content">
        <Content/>  
      </div>
      </>
  )}
  </div>
  );
}

export default App;
