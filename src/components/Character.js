import React, { Component } from 'react';
import $ from 'jquery'

class Character extends Component {
    constructor(props){
        super(props)

        this.state = {
            character: []
        }
    }

    componentDidMount =  async() => {
        console.log('::Query::byId')
        const query = `https://rickandmortyapi.com/api/character/${ this.props.match.params.id }`

        $.ajax({
            url: query,
            success: (response) => {
                console.log('::Query::byId:success')

                this.setState({ character: response })
            },
            error: (xhr, status, error) => {
                console.error('::Query::byId::failed')
            },
            statusCode: {
                404: function() {
                    this.setState({character: 'Nenhum personagem encontrado'})
                }
            }
        })
    }

    render() {
        const character = this.state.character
        console.log(character)
    
        return (
            <div className="container">
                <table className="table">
                    <tbody>
                        <tr>
                            <td>
                                <img className="rounded float-left" alt={ character.name } src={ character.image } />
                            </td>
                            <td>
                                <h3>{ character.name }</h3>
                                <p>
                                    STATUS <strong className="float-right">{ character.status }</strong><br />
                                    ESPÉCIME <strong className="float-right">{ character.species }{ character.type.length > 0 ? `, ${ character.type }` : ''}</strong><br />
                                    GÊNERO <strong className="float-right">{ character.gender }</strong><br />
                                    ORIGEM <strong className="float-right">{ character.origin.name }</strong>
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Character;