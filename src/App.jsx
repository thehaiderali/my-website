import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Portfolio from './components/Portfolio'
import Playground from './pages/Playground'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/playground" element={<Playground />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
