import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Careers from './pages/Careers'
import VirtualCFO from './pages/VirtualCFO'
import StartupAdvisory from './pages/StartupAdvisory'
import ServiceDetail from './pages/ServiceDetail'
import Insights from './pages/Insights'
import InsightDetail from './pages/InsightDetail'
import ComplianceCalendar from './pages/ComplianceCalendar'
import TaxCalculator from './pages/TaxCalculator'
import Legal from './pages/Legal'

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-300 bg-primary selection:bg-secondary selection:text-primary overflow-x-hidden">
      <Header />

      <main className="flex-grow pt-20">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/virtual-cfo-services" element={<VirtualCFO />} />
            <Route path="/startup-advisory" element={<StartupAdvisory />} />
            <Route path="/service/:serviceId" element={<ServiceDetail />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/insight/:insightId" element={<InsightDetail />} />
            <Route path="/compliance-calendar" element={<ComplianceCalendar />} />
            <Route path="/tax-calculator" element={<TaxCalculator />} />
            <Route path="/privacy-policy" element={<Legal />} />
            <Route path="/terms" element={<Legal />} />
            <Route path="/disclaimer" element={<Legal />} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  )
}

export default App
