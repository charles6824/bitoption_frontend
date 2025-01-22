import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import store from './store.ts'
import { ThemeProvider } from '@material-tailwind/react'

createRoot(document.getElementById('root')!).render(
      <Provider store={store}>
      <ThemeProvider>
      <ToastContainer />
       <App />
    </ThemeProvider>
  </Provider>,
)
