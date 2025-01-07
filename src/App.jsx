import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Home from './Home/Home'
import About from './About/About';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';
import Layout from './Layout/Layout';
import NotFound from './NotFound/NotFound';

function App() {
  let Routes = createBrowserRouter([
    {
      path: '',
      element: <Layout />,
      errorElement: <NotFound/>,
      children: [
        { path: '', element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'portfolio', element: <Portfolio /> },
        { path: 'contact', element: <Contact /> }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={Routes}/>
    </>
  )
}

export default App
