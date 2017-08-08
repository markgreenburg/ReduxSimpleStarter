import React, { Component } from 'react';

// const SearchBar = () => <input />;
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(term) {
    this.setState ({term}, () => {
      this.props.onSearchTermChange(this.state.term);
    });
  }

  render() {
    return (
      <div className="search-bar">
        <input
          onChange={(event) => this.onInputChange(event.target.value)}
          value={this.state.term}
        />
      </div>
    )
  }
}

export default SearchBar;