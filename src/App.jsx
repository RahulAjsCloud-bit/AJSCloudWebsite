import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

/* Layout */
import Header from "./components/Header";
import Footer from "./components/Footer";

/* Home Sections */
import Carousel from "./components/Carousel";
import Ladderstep5 from "./components/Ladderstep5";
import Livingage from "./components/Livingage";
import WhyAjsCloud from "./components/WhyAjsCloud";
import Expertise from "./components/Expertise";
import Onboard from "./components/Onboard";
import Hybride from "./components/Hybride";
import Products from "./components/Products";
import ServicesHighlight from "./components/ServicesHighlight";
import Devtool from "./components/Devtool";
import Competitive from "./components/Competitive";

/* Industry Pages */
import FinancialServices from "./components/industry/FinancialServices";
import GovernmentAgencies from "./components/industry/GovernmentAgencies";
import Healthcare from "./components/industry/Healthcare";
import ManufacturingSector from "./components/industry/ManufacturingSector";
import MarketingRetail from "./components/industry/MarketingRetail";


/* Services Pages */
import CompetitiveAdvantage from "./components/services/CompetitiveAdvantage";
import DevelopingNewTools from "./components/services/DevelopingNewTools";
import HybridCloud from "./components/services/HybridCloud";
import OnBoardingWithAJS from "./components/services/OnBoardingWithAJS";
import OptimizingInfrastructure from "./components/services/OptimizingInfrastructure";


/* Career Pages */
import CareerUSA from "./components/career/CareerUSA";
import CareerIndia from "./components/career/CareerIndia";




import "./css/main.css";
import AIPioneersSection from "./components/AIPioneersSection";
import AboutUs from "./components/AboutUs";

// ----------------------
// Home page grouped
// ----------------------
const Home = () => (
  <>
    {/* <Carousel /> Full screen */}
    
    <Livingage />
    <Ladderstep5 />
    <WhyAjsCloud/>
    <Expertise />
    <AIPioneersSection/>
    <Onboard />
    <Hybride />
    {/* <Products /> */}
    {/* <ServicesHighlight /> */}
    <Devtool />
    <Competitive />
  </>
);

// ----------------------
// Carousel Wrapper
// ----------------------
const CarouselWrapper = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className={isHome ? "carousel-full" : "carousel-half"}>
      <Carousel />
    </div>
  );
};

// ----------------------
// App Component
// ----------------------
function App() {
  return (
    <Router>
      <Header />

      {/* Carousel rendered first, adjusts height per page */}
      <CarouselWrapper />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Industry */}
        <Route path="/industry/financial-services" element={<FinancialServices />} />
        <Route path="/industry/government-agencies" element={<GovernmentAgencies />} />
        <Route path="/industry/healthcare" element={<Healthcare />} />
        <Route path="/industry/manufacturing-sector" element={<ManufacturingSector />} />
        <Route path="/industry/marketing-retail" element={<MarketingRetail />} />


        {/* Services */}
        <Route path="/services/on-boarding-with-ajs" element={<OnBoardingWithAJS />} />
        <Route path="/services/hybrid-cloud" element={<HybridCloud />} />
        <Route path="/services/optimizing-infrastructure" element={<OptimizingInfrastructure />} />
        <Route path="/services/developing-new-tools" element={<DevelopingNewTools />} />
        <Route path="/services/competitive-advantage" element={<CompetitiveAdvantage />} />
       


        {/* Career */}
        {/* <Route path="/career/usa" element={<CareerUSA />} />
        <Route path="/career/india" element={<CareerIndia />} /> */}
        <Route path="/about-us" element={<AboutUs />} />

      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
