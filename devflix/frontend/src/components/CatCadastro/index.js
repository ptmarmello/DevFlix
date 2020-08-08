import React from 'react';
import PageDefault from '../../pages/PageDefault';
import { Link } from 'react-router-dom';

export default function CatCadastro(){
    return(
        <PageDefault>
            <h1>Página de Cadastro</h1>

            <Link to="/">
                Cadastrar Categoria
            </Link>

        </PageDefault>
    );
}