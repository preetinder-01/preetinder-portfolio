import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Layout from './components/Layout'
import Portfolio from './components/Portfolio'
// import Dashboard from './components/Dashboard'
import './App.scss'
// import {useNavigate} from 'react-router'

window.addEventListener("pageshow", (event) => {
  const historyTraversal =
    event.persisted ||
    (typeof window.performance != "undefined" &&
      window.performance.navigation.type === 2);

  if (historyTraversal) {
    window.location.reload();
  }
});
function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout /> } >
           {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route index element={<Home />} />
           <Route path="/about" element={<About />} />
           <Route path="/contact" element={<Contact />} />
           <Route path="/portfolio" element={<Portfolio />} />
        </Route>
      </Routes>
    </>
  )
}

export default App