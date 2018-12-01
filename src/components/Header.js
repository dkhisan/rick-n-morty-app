import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#282c34' }}>
                <span className="navbar-brand mb-2 h1">Rick & Morty Search</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/personagens" className="nav-link">Personagens</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/locais" className="nav-link">Locais</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/episodios" className="nav-link">Episódios</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="progress" style={{ height: '1px', backgroundColor: '#eee' }}>
                <div className="progress-bar" role="progressbar" style={{ width: '0%', display: 'none' }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
        )
    }
}

export default Header;