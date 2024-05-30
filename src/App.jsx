import { Routes, Route } from 'react-router-dom'
import Projects from './Routes-folio/Projects'
import Home from './Routes-folio/Home'
// import Nav from './Routes-folio/Components/Navbar'
import Header from './Routes-folio/Components/Header'
import Skills from './Routes-folio/Skills'
import Emall from './Routes-folio/Mainset/Emall'
import Rentsys from './Routes-folio/Mainset/Rentsys'
import Votescope from './Routes-folio/Mainset/Votescope'
// import Contact from './Routes-folio/Contact'
import Experience from './Routes-folio/Components/Experience'
import Footer from './Routes-folio/Components/Footer'
import Blog from './Routes-folio/Blog'


function App() {

  return (
    <>
    <Header/>
   <div className='d-flex' id='light-theme'>
     {/* <Nav>
     </Nav> */}
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/experience' element={<Experience/>} />
    <Route path='/projects' element={<Projects/>} />
    <Route path='/skills' element={<Skills/>} />
    <Route path='/blog' element={<Blog/>} />
    <Route path='/projects/emall-ecommerce' element={<Emall/>} />
    <Route path='/projects/rentsys-chatbot-rent-a-car' element={<Rentsys/>} />
    <Route path='/projects/votescope-agency-dashboard' element={<Votescope/>} />
    </Routes>
    </div>
    <Footer></Footer>
    </>
  )
}

export default App
