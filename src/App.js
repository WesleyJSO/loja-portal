import './App.css'
import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

const Home = lazy(() => import('./components/home'))
const Products = lazy(() => import('./components/product'))
const Product = lazy(() => import('./components/product/detail-product'))

const App = () => (
  <Provider store={store}>
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/produtos" component={Products} />
          <Route path="/produto" component={Product} />
        </Switch>
      </Suspense>
    </Router>
  </Provider>
)

export default App
