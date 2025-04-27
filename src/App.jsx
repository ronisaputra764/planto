import Navbar from "./components/Navbar"
import InteractiveCard from "./components/InteractiveCard";
import Header from "./components/Header";
import HeaderReview from "./components/HeaderReview";
import TrendyPlant from "./components/TrendyPlant";
import TopSelling from "./components/TopSelling";
import CustomerReview from "./components/CustomerReview";
import Footer from "./components/Footer";



function App() {

  return (
    <>
      <div className="w-full absolute">
        <img className="w-full max-h-[2550px] object-cover" src="/assets/img/background.png" alt="background-image" />
        <div className="absolute top-105 z-0 inset-0 bg-gradient-to-t from-[#1B2316]  to-transparent" />
      </div>

      <div className="w-full h-full overflow-hidden">
        <Navbar />
        <Header />
        <InteractiveCard />
        <HeaderReview />
        <TrendyPlant />
        <TopSelling />
        <CustomerReview />
        <Footer />
      </div>
    </>
  )
}

export default App
