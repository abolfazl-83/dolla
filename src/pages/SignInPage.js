import React from 'react';
import Signin from '../components/Signin';
import ScrollToTop from '../components/ScrollToTop';

const SignInPage = () => {
    return (
        <React.Fragment>
            <ScrollToTop />
            <Signin />
        </React.Fragment>
    );
}

export default SignInPage;