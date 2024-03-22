import { Route, Routes } from 'react-router-dom'
// import { Rules } from "./components/Rules";
import { Register } from './components/Register'
import { Home } from './components/Home'
import { Toaster } from 'sonner'
import { routes } from './routes'
import { Nav } from './components/Nav'

function App() {
  return (
    <main className=" h-screen flex bg-cBackogrund text-cWhite">
      <section className="max-w-5xl mx-auto w-full">
        <Nav />
        <Routes>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.register} element={<Register />} />
          {/* <Route path={routes.rules} element={<Rules />} /> */}
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
