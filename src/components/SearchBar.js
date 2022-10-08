import React from "react";
class SearchBar extends React.Component {

    render() {
        return (
            <div className="ui segment">
                <from className="ui form">
                    <div className="field">
                        <label>Search Image</label>
                        <input type="text"></input>
                    </div>

                </from>
            </div>
        );
    }

}


export default SearchBar;