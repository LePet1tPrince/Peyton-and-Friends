import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/app.css';
import StyleSheet from './components/Stylesheet';
import Navbar from './components/Navbar';
import InventoryView from './components/Pages/InventoryView';
import HomeView from './components/Pages/HomeView';
import { Routes, Route } from 'react-router-dom';
import BlankSpace from './components/BlankSpace';
import ContactView from './components/Pages/ContactView';



function App() {
  return (
    <>
    <Navbar/>
    <BlankSpace/>

    <Routes>
        <Route path="/inventory" element={<InventoryView />}/>
        <Route path="/contact" element={<ContactView />}/>
        <Route exact path="/" element={<HomeView />}/>


    </Routes>
    <BlankSpace/>
    <StyleSheet/>
    </>
    
  );
}

export default App;
