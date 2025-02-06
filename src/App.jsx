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
    </>
  );
}

export default App;