import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Router>
      <div className='h-screen bg-black'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/resume' component={Resume} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
