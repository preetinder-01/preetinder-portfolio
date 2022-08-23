import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Layout from './components/Layout'
import Portfolio from './components/Portfolio'
// import Dashboard from './components/Dashboard'
import './App.scss'
import {useNavigate} from 'react-router'

function App() {
  const history = useNavigate();
  const refreshPage = () => {
    history(0);
}
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
           <Route path="about" element={<About />} />
           <Route path="/contact" element={<Contact />} />
           <Route path="/portfolio" element={<Portfolio />} />
           {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        </Route>
      </Routes>
    </>
  )
}

export default App