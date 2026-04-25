import './App.css';
import Navbar from './components/Navbar/Navbar';
import AppRouter from './components/AppRouter';
import Footer from './components/Footer/Footer';
import AIBoat from './components/AIBoat/AIBot';
function App() {
  return (
    <div className="App">
      {/* Navbar sits outside the router so it stays on screen forever */}
      <Navbar />
      
      {/* AppRouter swaps out the pages underneath the Navbar */}
      <AppRouter />
      <AIBoat/> 
      <Footer/>
    </div>
  );
}

export default App;