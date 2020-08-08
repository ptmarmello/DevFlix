import React from 'react';
import PageDefault from '../../pages/PageDefault';
import { Link } from 'react-router-dom';

export default function VidCadastro(){
    return(
        <PageDefault>
            <h1>Página de Cadastro</h1>

            <Link to="/cadastro/categoria">
                Cadastrar Categoria
            </Link>

        </PageDefault>
    );
}