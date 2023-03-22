import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/app.css';
import StyleSheet from './components/Stylesheet';
import Navbar from './components/Navbar';
import InventoryView from './components/Pages/InventoryView';
import HomeView from './components/Pages/HomeView';
import { Routes, Route } from 'react-router-dom';
import BlankSpace from './components/BlankSpace';
import ContactView from './components/Pages/ContactView';
import InventoryDetailView from './components/Pages/InventoryDetailView';
import AboutView from './components/Pages/AboutView';
import AppContext from './components/Context/AppContext';



function App() {
  return (
    <>
      <Navbar/>
      <BlankSpace/>

        <AppContext>
          <Routes>
              <Route path="/inventory" element={<InventoryView />}/>
              <Route path="/inventory/:id" element={<InventoryDetailView/>}/>
              <Route path="/about" element={<AboutView/>}/>
              <Route path="/order" element={<ContactView />}/>
              <Route exact path="/" element={<HomeView />}/>
          </Routes>
        </AppContext>
      <BlankSpace/>
      {/* <StyleSheet/> */}
    </>
    
  );
}

export default App;
