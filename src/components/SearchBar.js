import React from "react";
class SearchBar extends React.Component {
    state = {
        term: "Hi there"
    }
    onSubmitChange(event){
        event.preventDefault();
        console.log("from submit event");
    }
    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onSubmitChange} className="ui form">
                    <div className="field">
                        <label>Search Image</label>
                        <input type="text"
                            value={this.state.term}
                            onChange={e => this.setState({ term: e.target.value })}></input>
                    </div>

                </form>
            </div>
        );
    }

}


export default SearchBar;