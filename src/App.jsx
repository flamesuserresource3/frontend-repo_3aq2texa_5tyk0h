import Header from './components/Header'
import Hero from './components/Hero'
import Variants from './components/Variants'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <Variants />
      </main>
      <Footer />
    </div>
  )
}

export default App
