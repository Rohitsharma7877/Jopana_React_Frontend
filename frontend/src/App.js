import './App.css';
import Navbar from './components/Navbar/Navbar';
import AppRouter from './components/AppRouter';
import Footer from './components/Footer/Footer';
import AIBoat from './components/AIBoat/AIBot';
function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRouter />
      <AIBoat/> 
      <Footer/>
    </div>
  );
}

export default App;