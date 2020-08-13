import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      {/* <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a> */}
      <p>
        Criado e desenvolvido por
        {' '}
        <a href="https://github.com/ptmarmello">
          PeThi
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
