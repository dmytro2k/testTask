import { Provider } from 'react-redux'
import './App.css'
import { store } from './state/store'
import Router from './routes/AppRouter'

function App() {


  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}

export default App
