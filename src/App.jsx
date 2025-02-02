import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import '../src/styles/App.css';

function App() {  
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer className="footer" />
    </>
  );
}

export default App;
