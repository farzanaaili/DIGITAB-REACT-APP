import Header from "./Componant/HeaderArea/Header";
import Hero from "./Componant//heroArea/Hero";
import Brand from "./Componant/brandArea/Brand";
import About from "./Componant/aboutArea/About";
import GreatService from "./Componant/greatService/Service";
import Video from "./Componant/VideoArea/Video";
import TeamMember from "./Componant/TeamMember/TeamMember";
import BusinessIdea from "./Componant/BusinessIdea/BusinessIdea";
import Feedback from "./Componant/CustomerFeedback/Feedback";
import Footer from "./Componant/Footer/Footer";
// import "swiper/css/bundle";
// import "./styles.css";
import "./App.css";
import "swiper/css/bundle";



function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Brand />
      <About />
      <GreatService />
      <Video />
      <TeamMember />
      <BusinessIdea />
      <Feedback />
      <Footer />
    </div>
  );
}

export default App;
