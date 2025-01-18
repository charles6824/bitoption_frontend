import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import store from './store.ts'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <ToastContainer />
    <App />
  </Provider>,
)
