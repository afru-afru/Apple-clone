
import Card2 from './components/Card2/Card2'
import Card3 from './components/Card3/Card3'
import Footer from './components/Footer/Footer'
import Header from './components/header/header'
import Ipad from './components/Ipad/Ipad'
// import Iphone11 from './components/Iphone 11/Iphone11'
import Iphone11pro from './components/iphone11Pro/Iphone11pro'
import MacBookPro from './components/MacBookPro/MacBookPro'
import Watch from './components/watch/Watch'
import AppleYoutube from './components/Youtube/AppleYoutube'
import './index.css'


function App() {
return (
  <>
    <Header />
    <MacBookPro/>
    <Ipad/>
    <Iphone11pro/>
    {/* <Iphone11/> */}
    <Watch/>
    <Card2/>
    <Card3/>
    <AppleYoutube/>
    <Footer/>

  </>

  )
}

export default App
