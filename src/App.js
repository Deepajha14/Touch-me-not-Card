import './App.css';
import Glasscard from './Glasscard';
import background from './images/background.jpg'

function App() {
  return (
    <div className="App"
    style={{
      width: '100vw',
      height: '100vh',
      backgroundImage: `url(${background})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}
    >
      <Glasscard/>
    </div>
  );
}

export default App;
