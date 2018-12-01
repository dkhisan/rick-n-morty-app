import React from 'react';
import { Link } from 'react-router-dom';

const CharacterSearchResult = props => (
    <div className="jumbotron">
        <div className="row">
            { props.characters.map((character) => {
                return (
                    <div className="col-sm-3" key={ character.id }>
                        <div className="card text-white bg-dark mb-3" style={{ maxWidth: '18rem' }}>
                            <img className="card-img-top" alt={ character.name } src={ character.image } />
                            <div className="card-body">
                                <h5 className="card-title">{ character.name.length < 22 + 1 ? character.name : `${ character.name.substring(0, 22) }...` }</h5>
                                <p className="card-text">
                                    STATUS <strong className="float-right">{ character.status === 'Alive' ? 'Vivo' : 'Morto' }</strong><br />
                                    ESPÉCIME <strong className="float-right">{ character.species }{
                                        character.type.length > 0 ?
                                            character.species.length > 5 ?
                                                `, ${ character.type.substring(0, 9) }...`
                                            :
                                                character.type.length < 15 ?
                                                    `, ${ character.type }`
                                                :
                                                    `, ${ character.type.substring(0, 10) }...`
                                        :
                                        ''
                                    }</strong><br />
                                    GÊNERO <strong className="float-right">{ character.gender === 'Male' ? 'Homem' : 'Mulher' }</strong><br />
                                    ORIGEM <strong className="float-right">{
                                        character.origin.name === 'unknown' ?
                                            'Desconhecida'
                                        :
                                            character.origin.name.length < 15 ?
                                                character.origin.name
                                            :
                                                `${ character.origin.name.substring(0, 18) }...)`
                                    }</strong>
                                </p>
                                {/* <Link to={{ pathname: `/personagem/${character.id}` }} className="btn btn-light btn-block">mais informações</Link> */}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
)

export default CharacterSearchResult;