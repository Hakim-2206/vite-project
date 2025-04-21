import Navbar from "../components/Navbar.jsx";
import Header from "../components/Header.jsx";
import Features from "../components/Features.jsx";
import ExperienceSection from "../components/ExperienceSection.jsx";
import FournisseursSection from "../components/FournisseursSection.jsx";
import ContactSection from "../components/ContactSection.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
    return (
        <div className="homePage">
            <Navbar/>
            <Header/>
            <Features/>
            <ExperienceSection/>
            <FournisseursSection/>
            <ContactSection/>
            <Footer/>
        </div>
    );
}

export default Home;