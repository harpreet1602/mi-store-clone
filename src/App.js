
import UpperNavbar from './components/UpperNavbar';
import Navbar from './components/Navbar.js';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Slider from "./components/Slider.js";
import data from "./data/data.json";
import Offers from "./components/Offers.js";
import Heading from "./components/Heading.js";
import StarProduct from "./components/StarProduct.js";
import HotAccessoriesMenu from "./components/HotAccessoriesMenu.js";
import HotAccessories from './components/HotAccessories.js';
import ProductReviews from "./components/ProductReviews.js";
import Videos from "./components/Videos.js";
import Banner from "./components/Banner.js";
import Footer from './components/Footer.js';
import NavOptions from './components/NavOptions.js';

// _redirects has to be made in public folder to enable the anchor tag links to work through netlify
// in NavOptions

function App() {
  return (
    <Router className="app"> 
      <UpperNavbar />
      <Navbar />
      {/* here also in navOptions we can do routing but here we are understanding useEffect */}
      <NavOptions miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home= {data.home} audio={data.audio} accessories={data.accessories} />
      

      <Slider start = {data.banner.start} />
      <Offers offer = {data.offer} />
      <Heading text = "STAR PRODUCTS"/>
      <StarProduct starProduct = {data.starProduct}/>
      <Heading text = "HOT ACCESSORIES" />
      <HotAccessoriesMenu />
      <Route exact path ="/music">
        <HotAccessories music={data.hotAccessories.music} musicCover = {data.hotAccessoriesCover.music} />
      </Route>

      <Route exact path ="/smartDevice">
        <HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover = {data.hotAccessoriesCover.smartDevice} />
      </Route>
      
      <Route exact path ="/home">
        <HotAccessories home={data.hotAccessories.home} homeCover = {data.hotAccessoriesCover.home} />
      </Route>
      
      <Route exact path ="/lifeStyle">
        <HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover = {data.hotAccessoriesCover.lifeStyle} />
      </Route>

      <Route exact path ="/mobileAccessories">
        <HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover = {data.hotAccessoriesCover.mobileAccessories} />
      </Route>

      <Heading text = "PRODUCT REVIEWS" />
      <ProductReviews productReviews={data.productReviews} />

      <Heading text="VIDEOS" />
      <Videos videos={data.videos} />

      <Heading text="IN THE PRESS" />
      <Banner banner={data.banner} />

      <Footer footer = {data.footer}/>

      
    </Router>
  );
}

export default App;
