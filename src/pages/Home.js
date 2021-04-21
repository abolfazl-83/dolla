import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import Services from '../components/Services';
import Footer from '../components/Footer'
import { homeObj1, homeObj2 , homeObj3 } from '../components/InfoSection/data';

const Home = () => {
    const[isOpen , setIsOpen] = useState(false);
    const handleIsOpenChange = () => {
        setIsOpen(!isOpen);
    }
    return (
        <React.Fragment>
            <Navbar handleIsOpenChange = {handleIsOpenChange} />
            <Sidebar handleIsOpenChange = {handleIsOpenChange} isOpen = {isOpen} />
            <HeroSection />
            <InfoSection {...homeObj1}/>
            <InfoSection {...homeObj2}/>
            <Services />
            <InfoSection {...homeObj3}/>
            <Footer />
        </React.Fragment>
    );
};

export default Home;
