import React from 'react';
import Logo from '../../assets/DevFlixpng.png';

import './styles.css';
// import ButtonLink from '../ButtonLink';
// import { Link } from 'react-router-dom';

export default function Menu(){
    return (
        <nav className="Menu">
            <a href="/">
                <img src={Logo} alt="DevFlix" className="Logo"/>
            </a>

            {/* <ButtonLink as={Link} href="/cadastro/video" className="ButtonLink">
                New Video
            </ButtonLink> */}

        </nav>

    );
}