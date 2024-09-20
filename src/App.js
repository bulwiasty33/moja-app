import './App.css';
import InfoBox from './components/infoBox/infoBox';
import Button from './components/infoBox/button';
import List from './components/infoBox/list';


function App() {
  return (
    <div className="App">
     <h1>Siemanko</h1>
     <InfoBox></InfoBox>
      <Button></Button>
      <List></List>
    </div>
  );
}

export default App;
