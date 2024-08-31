// import './App.css'
import Header from "./components/header"
import Section from "./components/section-home"
import Card from "./components/card"
import Caixote from "./assets/img/Caixote.svg"
import Hero from "./components/hero/"

export default function App() {
  return (
      <div className='app-container'>
          <Header />
          
          <Section />

          <Card scr= {Caixote}
          title= "Highlight benefit two"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique.
                    Duis cursus, mi quis viverra ornare, eros dolor interdum nulla."/>

          <Hero aligment="left" />
      </div>
  )
}