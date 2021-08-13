import "./App.scss"
import NavbarComponent from "./Components/NavbarComponent"
import HomePage from "./Pages/HomePage"
import { Switch, Route } from "react-router-dom"
import AboutPage from "./Pages/AboutPage"
import ResearchPage from "./Pages/ResearchPage"
import ProjectsPage from "./Pages/ProjectsPage"
import ContactPage from "./Pages/ContactPage"
import { useState } from "react"
import StarryBackground from "./Components/StarryBackground/StarryBackground"
import ResumePage from "./Pages/ResumePage/ResumePage"

function App() {
  const [navToggle, setNavToggle] = useState(false)

  const navClick = () => {
    setNavToggle(!navToggle)
  }

  return (
    <div className='App'>
      <div className={`sidebar ${navToggle ? "nav-toggle" : ""}`}>
        <NavbarComponent />
      </div>
      <div className='nav-btn' onClick={navClick}>
        <div className='lines-1'></div>
        <div className='lines-2'></div>
        <div className='lines-3'></div>
      </div>
      <div className='main-content'>
        <StarryBackground />
        <div style={{ zIndex: "5" }} className='content'>
          <Switch>
            <Route path='/' exact>
              <HomePage />
            </Route>
            <Route path='/about' exact>
              <AboutPage />
            </Route>
            <Route path='/research' exact>
              <ResearchPage />
            </Route>
            <Route path='/projects' exact>
              <ProjectsPage />
            </Route>
            <Route path='/contact' exact>
              <ContactPage />
            </Route>
            <Route path='/resume' exact>
              <ResumePage />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  )
}

export default App
