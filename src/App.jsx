import { useState, useEffect } from 'react'
import { Switch, Route, HashRouter } from 'react-router-dom'
import { Navigation } from './components/navigation'
import { Header } from './components/header'
import { Features } from './components/features'
import { About } from './components/about'
import { Services } from './components/services'
// import { Gallery } from './components/gallery'
// import { Testimonials } from './components/testimonials'
// import { Team } from './components/Team'
import { Contact } from './components/contact'
import { Blog } from './components/Blog/blog'
import { SingleBlog } from './components/SingleBlog/SingleBlog'
import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll'

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <div>
      <HashRouter>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <Services data={landingPageData.Services} />
      {/* <Gallery /> */}
      {/* <Testimonials data={landingPageData.Testimonials} /> */}
      <Switch>
      <Route>
        <Blog/>
      </Route>
   
      <Route path="/:id" exact component={SingleBlog}></Route>
      </Switch>
      
      <About data={landingPageData.About} />
      {/* <Team data={landingPageData.Team} /> */}
      
      
     {/* <ShowBlog /> */}
      <Contact data={landingPageData.Contact} />
      </HashRouter>
    </div>
  )
}

export default App
