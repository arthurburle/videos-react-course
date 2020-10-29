import React from 'react';

class SearchBar extends React.Component {
    state = { term: ''}

    onInputChange = event => { // armazena a busca
        this.setState({ term: event.target.value });
    };

    onFormSubmit = event => { //
        event.preventDefault();
        // o onSubmit só chama essa função

        this.props.onHereSubmit(this.state.term);
        // a frase foi gravada nesse state pelo onChange

    };

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;