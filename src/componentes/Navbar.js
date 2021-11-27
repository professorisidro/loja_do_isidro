import React from 'react';
import { NavLink }  from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">LOJA</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item nav-link">
                                <NavLink to="/">Institucional</NavLink>
                            </li>
                            <li className="nav-item nav-link">
                                <NavLink to="/produtos">Produtos</NavLink>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;