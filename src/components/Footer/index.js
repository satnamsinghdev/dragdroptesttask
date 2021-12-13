import React from 'react';
import { FullWrap, FooterTopWrap } from './styles';


const Footer = () => {
    return (
        <FullWrap >
            <FooterTopWrap>
                <a href="/" className="logo"><img src="/images/logo-footer.svg" alt="" /></a>
            </FooterTopWrap>
        </FullWrap>
    );
}

export default Footer;