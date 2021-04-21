import svg1 from '../../images/svg-1.svg';
import svg2 from '../../images/svg-2.svg';
import svg3 from '../../images/svg-3.svg';

export const homeObj1 = {
    id : 'about',
    lightBg : false,
    lightText : true,
    lightTextDesc : true,
    topLine : 'Premium Bank',
    headline : 'Unlimited Transactions with zero fees',
    description : `Get access to our exclusive app that allows you
     to send unlimited tranactions without getting charged any fees.`,
     buttonLabel: 'Get started',
     imgStart : false,
     img : svg1,
     alt: 'Car',
     dark : true,
     primary : true,
     darkText : false
}

export const homeObj2 = {
    id : 'discover',
    lightBg : true,
    lightText : false,
    lightTextDesc : false,
    topLine : 'Unlimited Access',
     headline : 'Login to your account at any time',
     description : `We have you covered no matter where you are located.
     All you need is an internet connection and a phone or computer.`,
     buttonLabel: 'Learn More',
     imgStart : true,
     img : svg2,
     alt: 'Piggybank',
     dark : false,
     primary : false,
     darkText : true
}


export const homeObj3 = {
    id : 'signup',
    lightBg : true,
    lightText : false,
    lightTextDesc : false,
    topLine : 'Join Our Team',
    headline : 'Creating an account is extremly easy',
    description : `Get everything set up and ready in under 18 minutes. All you need to do is add your 
    information and you're ready to go.`,
     buttonLabel: 'Start Now',
     imgStart : false,
     img : svg3,
     alt: 'Paper',
     dark : false,
     primary : false,
     darkText : true
}