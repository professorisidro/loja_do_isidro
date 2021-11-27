import React from "react";
import './Inicio.css';
class Inicio extends React.Component {
    render() {
        return (
            <>
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://www.istoedinheiro.com.br/wp-content/uploads/sites/17/2017/09/tecnologia-tivit-1280x720.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://multivix.edu.br/wp-content/uploads/2019/06/tecnologia-da-informa%C3%A7%C3%A3o-multivix-1280x720.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://brasilpaisdigital.com.br/wp-content/uploads/2020/11/beneficios-da-tecnologia-na-saude-min-1280x720-1.jpg" className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                <div className="container" id="texto">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h3>Bem vindos / Welcome / Benvenidos</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center">
                            <p>
                            Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Delegadis gente finis, bibendum egestas augue arcu ut est. Quem num gosta di mim que vai caçá sua turmis!

                            </p>
                            <p>
                            Interagi no mé, cursus quis, vehicula ac nisi. Manduma pindureta quium dia nois paga. Paisis, filhis, espiritis santis. Per aumento de cachacis, eu reclamis.

                            </p>
                            <p>
                            A ordem dos tratores não altera o pão duris. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Suco de cevadiss deixa as pessoas mais interessantis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.
                            </p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Inicio;