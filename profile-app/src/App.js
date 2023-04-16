import './App.css';
import Profile from './Profile/Profile';
import image from './logo192.png';
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const handleName = (name) => alert(`Hello, my name is ${name}`);
  return (
    <div className="App">
      <header className="App-header">
        <Profile fullName="Jane Doe" bio="Frontend developer" profession="Developer" handleName={handleName}>
        {image}
      </Profile>
      </header>
    </div>
  );
}

export default App;
