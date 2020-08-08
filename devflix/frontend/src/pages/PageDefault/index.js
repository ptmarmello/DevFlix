import React from 'react';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import styled from 'styled-components';

const Main = styled.main `
    background: var(--black);
    color: var(--white);
    flex:1;
    padding-top:50px;
    padding-left:5%;
    padding-right:5%;
`;


export default function PageDefault({ children }){
    return(
        <>
        {/* <React.Fragment>
            é o mesmo que a tag ali de cima!!!!
        </React.Fragment> */}
            <Menu/>
                <Main>
                    {children}
                </Main>
            <Footer/>
        </>
    );
}