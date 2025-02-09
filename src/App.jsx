import { Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar.jsx'

function App() {
  return (
    <>
      <header>
        <h1>Nick Bappe</h1>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Site made by Nick Bappe</footer>
    </>
  );
}

export default App;