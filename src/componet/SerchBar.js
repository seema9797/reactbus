import React from 'react';

class SearchBar extends React.Component{
    state={ term:' '};

    render(){
        return(
            <div className="container">
                <div className="form">
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                          type="text"
                          value={this.state.term}
                          onChange={e =>
                             this.setState({term: e.target.value.toUpperCase()})
                          }
                        />
                    </div>
                </div>
            </div>
        )
    }
};
export default SearchBar;