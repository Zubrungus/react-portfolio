import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client'

import './index.css'

//Bring in pages router will use
import App from './App.jsx'
import About from './Pages/about.jsx'
import Contact from './Pages/contact.jsx'
import Portfolio from './Pages/portfolio.jsx'
import Resume from './Pages/resume.jsx'
import Error from './Pages/error.jsx'

//Direct routes to correct pages
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/portfolio',
        element: <Portfolio />,
      },
      {
        path: '/resume',
        element: <Resume />,
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  
  <RouterProvider router={router} />
  
)
