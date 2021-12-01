import React from 'react';
import apiLoja from '../servicos/Api';
import { NavLink } from 'react-router-dom';
import Disponivel from './Disponivel';


class Detalhe extends React.Component {
    state = {
        produto: {
            codigo:0,
            nome:'',
            descricao:'',
            link_foto:'',
            qtde_estoque:0
        }
    }
    render() {
        const { produto } = this.state;
        return (
            <div className ="container" >
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <img src={produto.link_foto} width="100%"/>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <h3>{produto.nome}</h3>
                        <p>{produto.descricao}</p>
                        <p><strong>Preço R$ {produto.preco}</strong></p>
                        <Disponivel qtde={produto.qtd_estoque} />
                        <p>Categoria: {produto.categoria.descricao} </p>
                        <NavLink to="/produtos" className="btn btn-primary">Voltar</NavLink>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
       // let teste = useParams();
        //console.log(teste);
        let id = window.location.pathname.replace("/produtos/", "");
        console.log("ID Recuperado = " + id);
        apiLoja.get("/produtos/" + id)
            .then(res => {
                console.log(res.data);
                this.setState({ produto: res.data })
            })
    }
}
export default Detalhe;