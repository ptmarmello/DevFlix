import React from 'react';
import Logo from '../../assets/Logo.png';

import './styles.css';
import ButtonLink from '../ButtonLink';

export default function Menu(){
    return (
        <nav className="Menu">
            <a href="/">
                <img src={Logo} alt="DevFlix" className="Logo"/>
            </a>

            <ButtonLink href="/" className="ButtonLink">
                New Video
            </ButtonLink>

        </nav>

    );
}