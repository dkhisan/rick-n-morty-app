import React, { Component } from 'react';

class NotFound extends Component {
    render() {
        return (
        <div className="jumbotron">
            <h1 className="display-4">404 NOT FOUND</h1>
            <p className="lead">A página que vc procura não foi encontrada :(</p>
            <hr className="my-4" />
            <p>Página requisitada <code>{ this.props.url }</code></p>
            <a className="btn btn-outline-secondary" href="#" role="button">voltar</a>
        </div>
        )
    }
}

export default NotFound;