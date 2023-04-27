import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'
import Detalles from './pages/Detalles'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index={true} element={<Home/>}/>
          <Route path={'/:id'} element={<Detalles/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
