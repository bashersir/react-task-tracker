
import './App.css';
import profileImage from './img/abul-basher.jpg';
function App() {
  return (
    <div className="App">
      <h1>My React App</h1>
      <h2>Aughtor: Abul Basher</h2>
      <img src={profileImage} alt="profile-image" />
    </div>
  );
}

export default App;
