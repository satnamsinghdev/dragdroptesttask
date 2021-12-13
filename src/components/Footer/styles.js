import styled from "styled-components";


export const FullWrap = styled.footer`
    background-color: #495e66;
    font-size: 16px;
    line-height: 30px;
    color: #ffffff;
    padding: 60px 90px;
    .logo{
        margin-right: 70px;
        @media only screen and (max-width:767px){
            margin-right: 0px;
            display: block;
            width: 100%;
            text-align: center;
        }
        img{
            min-width: 260px;
            max-width: 260px;
            height: 74px;
            @media only screen and (max-width:991px){
                margin-bottom:30px;
            }
        }
    }
    @media only screen and (max-width:1200px){
        padding: 60px 20px;
    }
`;
export const FooterTopWrap = styled.div`
    display: flex;
    align-items: flex-start;
    @media only screen and (max-width:991px){
        flex-wrap: wrap;
    }
`;
export const LinkWrap = styled.div`
    max-width: 280px;
    height: 170px;
    border-left: 2px solid #aad27c;
    padding: 0px 20px;
    @media only screen and (max-width:767px){
        height: 100%;
        margin-bottom: 30px;
    }
`;
export const FooterLink = styled.a`
    transition-duration: 0.3s;
    font-size: 16px;
    line-height: 30px;
    color: #ffffff;
    font-weight: 500;
    display: block;
    &:hover{
        color: #8cc63f;
        text-decoration:none;
    }
    &.active{
        color: #8cc63f;
        &:hover{
            text-decoration: underline;
        }
    }
`;
export const RightWrap = styled.div`
    margin-left:auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right:90px;
    @media only screen and (max-width:1200px){
        margin-right:0px;
        width:100%;
        flex: 1;
        margin-top:20px;
    }
`;
export const ContactButton = styled.a`
    margin-right: 20px;
    margin-top: .25em;
    color: #ffffff;
    border: 2px solid #8cc63f;
    border-radius: 5px;
    font-size: 14px;
    background-color: transparent;
    padding: 0px 30px;
    line-height: 28px;
    text-transform: uppercase;
    transition-duration: 0.15s;
    transition-timing-function: cubic-bezier(0.250, 0.100, 0.250, 1.000);
    text-align: center;
    font-weight: 600;
    &:hover{
        background-color: rgba(140, 198, 63, 0.7);
        color: #ffffff;
        text-decoration:none;
    }
`;

export const IconsWrap = styled.div`
    display: flex;
    align-items: center;
`;
export const IconItem = styled.div`
    a{
        padding: 0px 5px !important;
    }
    svg{
        color:#fff;
        font-size: 18px;
    }
`;
export const FooterBottomWrap = styled.div`
    margin-top: 40px;
    p{
        font-size: 16px;
        line-height: 30px;
        color: #ffffff;
        font-weight: 500;
        margin-bottom:0px;
    }
`;
export const BottomLinkWrap = styled.div`
    
`;
export const BottomFooterLink = styled.a`
    transition-duration: 0.3s;
    font-size: 16px;
    line-height: 30px;
    color: #ffffff;
    font-weight: 500;
    text-decoration:underline;
    padding-right: 20px;
    margin-right:20px;
    border-right: 1px solid #ffffff;
    &:hover{
        color: #8cc63f;
    }
`;
