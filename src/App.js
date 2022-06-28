import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layouts/Default'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Layout page='home' />} />
        <Route path='/login' element={<Layout page='login' />} />
        <Route path='/posts' element={<Layout page='post' />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
