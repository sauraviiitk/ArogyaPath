import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ClerkProvider } from '@clerk/clerk-react';

  const clerk_key= "pk_test_ZGlzdGluY3Qtc3RhcmxpbmctODIuY2xlcmsuYWNjb3VudHMuZGV2JA";
  console.log(clerk_key)
  if(!clerk_key){
    throw new Error("Key Not Found")
  }

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={clerk_key}>
    <App />
    </ClerkProvider>
  </StrictMode>,
)