import { Route, Routes } from 'react-router-dom'
import { Register } from './components/Register'
import { Home } from './components/Home'
import { Toaster } from 'sonner'
import { ROUTE } from './routes'
import { Nav } from './components/Nav'
import { Regulation } from './components/Regulation'

function App() {
  return (
    <main className="h-screen flex bg-cBackogrund text-cWhite">
      <section className="max-w-7xl mx-auto w-full px-8">
        <Nav />
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
      </section>
    </main>
  )
}

export default App
