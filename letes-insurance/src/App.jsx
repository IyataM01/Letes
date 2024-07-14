
import './App.css'
import AppContact from './assets/componets/Contact-Us'
import Appfaqs from './assets/componets/FAQs'
import AppFAQs from './assets/componets/FAQs'
import AppFAQ from './assets/componets/FAQs'
import AppInsurance_plan from './assets/componets/Insurance-plans'
import AppTestimonial from './assets/componets/Testimonies'
import AppAbout from './assets/componets/about'
import AppFooter from './assets/componets/footer'
import AppHeader from './assets/componets/header'
import AppServices from './assets/componets/services'
import Slider  from './assets/componets/slider'
function App() {
 return(

<main>
<header>
<AppHeader/>
</header>

<section>
  <Slider/>
 </section>


 <section>
  <AppAbout/>
 </section>

 <section>
  <AppServices/>
 </section>

 <section>
  <AppInsurance_plan/>
 </section>

 <section>
  <AppTestimonial/>
 </section>

 
 <section>
  <Appfaqs/>
 </section>

 <section>
  <AppContact/>
 </section>

 <section>
  <AppFooter/>
 </section>

</main>

 )
}

export default App
