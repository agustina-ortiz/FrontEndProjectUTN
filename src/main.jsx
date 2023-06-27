import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './components/header/header.jsx'
import AboutMe from './components/About me/aboutme.jsx'
import Contact from './components/Contact/contact.jsx'
import Footer from './components/Footer/footer.jsx'
import Home from './components/Home/home.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Header/>
    <Home />
    <AboutMe />
    <Contact />
    <Footer />
  </React.StrictMode>
)
