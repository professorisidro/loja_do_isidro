import React from 'react';
import apiLoja from '../servicos/Api';
import { NavLink } from 'react-router-dom';

class Produtos extends React.Component {

    state = {
        lista: []
    }
    render() {
        const { lista } = this.state;
        return (

            <>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center mt-3 mb-3">
                            <h3>Confira nossos produtos</h3>
                        </div>
                    </div>
                    <div className="row">
                        {lista.map(produto => (
                            <div className="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3">
                                <div className="card" key={produto.id}>
                                    <img src={produto.link_foto} class="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{produto.nome}</h5>
                                        <p className="card-text">{produto.descricao} <br/>
                                           R$ {produto.preco} </p>
                                           <p>Categoria: {produto.categoria.descricao} </p>
                                        <NavLink to={'/produtos/' + produto.codigo} className="btn btn-primary">Detalhes</NavLink>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>

                </div>
            </>
        );
    }

    componentDidMount() {
        console.log("Acabei de renderizar meu componente");
        apiLoja.get("/produtos")
            .then(res => {
                console.log("recebi dados");
                this.setState({ lista: res.data });
            })
            .catch(erro => {
                alert("Erro ao recupear dados");
            })
    }
}

export default Produtos;