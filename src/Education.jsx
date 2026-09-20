import Header from "./components/Header/Header";
import Capabilities from "./pages/Capabilities";
import CaseStudy from "./pages/CaseStudy";
import ContentDelivery from "./pages/ContentDelivery";
import Footer from "./pages/Footer";
import Hero from "./pages/Hero";
import Launchpad from "./pages/Launchpad";
import Metrics from "./pages/Metrics";
import Portfolio from "./pages/Portfolio";
import Roadmap from "./pages/Roadmap";
import "./styles/variables.css";

const Education = () => {
    return (
        <main className='bg-[var(--bg-color)]'>
            <Header />
            <Hero />
            <CaseStudy />
            <Capabilities />
            <ContentDelivery/>
            <Metrics/>
            <Portfolio/>
            <Launchpad/>
            <Roadmap/>
            <Footer/>
        </main>
    )
}

export default Education