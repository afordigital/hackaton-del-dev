import { Route, Routes } from 'react-router-dom'
import { Register } from './components/Register'
import { Home } from './components/Home'
import { Toaster } from 'sonner'
import { ROUTE } from './routes'
import { Nav } from './components/Nav'
import { Regulation } from './components/Regulation'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <Nav />
      <main className="min-h-screen flex bg-cBackground text-cWhite max-w-7xl mx-auto px-8">
        <Routes>
          <Route path={ROUTE.home} element={<Home />} />
          <Route path={ROUTE.register} element={<Register />} />
          <Route path={ROUTE.regulation} element={<Regulation />} />
        </Routes>
        <Toaster
          theme="dark"
          toastOptions={{
            style: { background: '#171717' },
            classNames: {
              toast: 'border border-cSecondary'
            }
          }}
        />
      </main>
      <Footer />
    </>
  )
}

export default App
