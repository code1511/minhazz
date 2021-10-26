import './App.css';
import Body from './component/Body';
function App() {
  return (
    <div className="App">
     <h1>Welcome to MinhaZ</h1>
     <Body/>
     <form action="../../post" method="post" 
              className="form">
          <button type="submit">Connected?</button>
        </form>
    </div>
  );
}

export default App;
