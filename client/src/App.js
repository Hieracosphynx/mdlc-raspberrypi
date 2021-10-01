import Raspberry from './components/raspberry/Raspberry';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='container-column-temp'>
        <Raspberry />
      </div>
    </div>
  );
}

export default App;
