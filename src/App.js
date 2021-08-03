import './App.css'
import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

const Home = lazy(() => import('./components/home'))
const Estoque = lazy(() => import('./components/product'))

const App = () => (
  <Provider store={store}>
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/estoque" component={Estoque} />
        </Switch>
      </Suspense>
    </Router>
  </Provider>
)

export default App
