import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { NextUIProvider } from '@nextui-org/react'
import DarkModeContext from './context/DarkModeContext.jsx'
import { ErrorBoundary } from "react-error-boundary";
import Fallback from './pages/FallbackRender.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={Fallback}>
      <DarkModeContext>
        <NextUIProvider>
          <App />
        </NextUIProvider>
      </DarkModeContext>
    </ErrorBoundary>
  </React.StrictMode>
)
