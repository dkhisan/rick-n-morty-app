import React, { Component } from 'react'
import $ from 'jquery';
import CharacterSearchResult from './CharacterSearchResult'

class Characters extends Component {
    constructor(props) {
        super(props)

        this.state = {
            characters: []
        }
    }
    
    searchHandler(event) {
        event.preventDefault()
    
        if ( event.target.value.length > 3 ) {
            this.findCharacterByName( event.target.value )
        }
    }

    findCharacterByName(name) {
        console.log('::Query::byName')
        const characterQuery = `https://rickandmortyapi.com/api/character/?name=${ name }` 
    
        $.ajax({
            url: characterQuery,
            xhr: () => {
                var xhr = new window.XMLHttpRequest()
                xhr.addEventListener('progress', function( evt ) {
                    if (evt.lengthComputable) {
                        var percentComplete = (evt.loaded / evt.total) * 100
                        $('.progress-bar').css({ 'width': `${ percentComplete }%` })
                    }
                }, false)
                return xhr
            },
            beforeSend: () => {
                $('.progress-bar').show()
            },
            success: (response) => {
                console.log('::Query::byName:success')

                this.setState({ characters: response.results })
            },
            error: (xhr, status, error) => {
                console.error('::Query::byName::failed')
            },
            statusCode: {
                404: function() {
                    this.setState({characters: 'Nenhum personagem encontrado'})
                }
            },
            complete: () => {
                $('.progress-bar').hide()
            }
        })
    }

    render() {
        return (
            <div className="App">
                <input className="form-control mr-sm-2" type="search" onChange={ this.searchHandler.bind( this ) } placeholder="Comece a digitar..." />
                <CharacterSearchResult characters = { this.state.characters } />
            </div>
        )
    }
}

export default Characters;