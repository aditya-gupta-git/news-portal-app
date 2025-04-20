import React from 'react'
// import { Button } from './components/ui/button'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignUpForm from './auth/forms/SignUpForm'
import SignInForm from './auth/forms/SignInForm'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import News from './pages/News/News'
import Dashboard from './pages/dashboard/Dashboard'

const App = () => {
  return (
    <div>
     <Router>
      <Routes>
        <Route path='/register' element={<SignUpForm />} />
        <Route path='/login' element={<SignInForm />} />

        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/news' element={<News />} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
     </Router>

    </div>
  )
}

export default App