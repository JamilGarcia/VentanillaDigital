import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import Institutions from './pages/Institutions'
import TramiteDetail from './pages/TramiteDetail'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/institutions" element={<Institutions />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/servicios/:id" element={<ServiceDetail />} />
        <Route path="/tramites/:id" element={<TramiteDetail />} />
      </Routes>
    </Layout>
  )
}

export default App
