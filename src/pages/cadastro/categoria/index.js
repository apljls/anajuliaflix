/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function HandleChange(infosDoEvento) {
    // const [getAttribute, value] = infosDoEvento.target
    setValue(
      infosDoEvento.target.getAttribute('name'), // getAttribute('name'),
      infosDoEvento.target.value, // value
    );
  }

  useEffect(() => {
    //console.log('Teste useEffect');
    const URL_TOP = window.location.hostname.includes('localhost') 
      ? 'http://localhost:8080/categorias'
      : 'https://anajuliaflix.herokuapp.com/categorias';
    // fetch(URL_TOP);
    fetch(URL_TOP).then(async (respostaDoServer) => {
      const resposta = await respostaDoServer.json();
      // setCategorias(resposta); isso tb funciona no lugar do setCategorias abaixo
      setCategorias([
        ...resposta,
      ]);
    });
    /*     setTimeout(() => {
      setCategorias([
        ...categorias,
        {   
          id: 1,
          nome: 'Front End',
          descricao: 'Categoria mais ou menos',
          cor: '#cbd1ff',
        },
        {   
          id: 2,
          nome: 'BackEnd',
          descricao: 'Categoria Sensacional',
          cor: '#cbd1ff',
        },
      ]);
    }, 4 * 1000); */
  },
  []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias, // Aqui vc pega todos os itens q ja tem em categorias e add no []
          values, // aqui vc add o novo item no array
        ]);
        setValues(valoresIniciais);
      }}
      >
        {/*
          <div>
            <label>
              Nome da Categoria:
              <input
                type="text"
                value= {values.nome}
                name="nome"
                onChange={HandleChange}
              />
            </label>
          </div>
          Componentizando o item acima */ }

        <FormField
          label="Nome da Categoria "
          type="text"
          value={values.nome}
          name="nome"
          onChange={HandleChange}
        />
        
        <FormField
          label="Descrição "
          type="textarea"
          value={values.descricao}
          name="descricao"
          onChange={HandleChange}
        />
        
        <FormField
          label="Cor"
          type="color"
          value={values.cor}
          name="cor"
          onChange={HandleChange}
        />

        <Button>
          Cadatrar
        </Button>
      </form>
      
      {categorias.length === 0 && (
      <div>
        Carregando ...
      </div>
      )}
      
      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.nome}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>
      <Link to="/">
        ir pra home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
