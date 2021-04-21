import React, {useState} from 'react';
import HeroVideo from '../../videos/Video.mp4';
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElements';
import { Button } from '../ButtonElement';
const HeroSection = () => {
    const[hover , setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }
    return (
        <HeroContainer id = 'home'>
            <HeroBg>
                <VideoBg autoPlay loop muted src = {HeroVideo} type = 'video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Virtual Banking Made Easy</HeroH1>
                <HeroP>
                    Sign up for a new account today and recieve $250 in credit towards your next payment.
                </HeroP>
                <HeroBtnWrapper>
                    <Button 
                    to = 'signup' 
                    onMouseEnter = {onHover}
                    onMouseLeave = {onHover}
                    smooth = {true}
                    duration = {500}
                    spy ={true}
                    exact = 'true'
                    offset = {-80}
                    >
                        Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
}

export default HeroSection;