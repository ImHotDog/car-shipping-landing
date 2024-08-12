import HeroSection from "widgets/HeroSection/ui/HeroSection";
import { Navbar } from "widgets/Navbar";
import "./MainPage.module.scss";

const MainPage = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
        </>
    );
}

export default MainPage;