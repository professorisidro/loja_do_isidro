import React from 'react';
import './Rodape.css';

class Rodape extends React.Component{
    render(){
        return (
            <div id="rodape" className="container-fluid">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 text-center">
                        <p>Sigam-nos no Insta @lojadoisidro</p>
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 text-center">
                        <h3>Loja do Isidro</h3>
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 text-center">
                        <p>Siga no TikTok @lojadoIsidro </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Rodape;