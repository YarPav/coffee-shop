import styled from "styled-components";
import {Component} from "react";

const SearchEl = styled.label`
  color: #000;
  display: flex;
  row-gap: 5px;
  column-gap: 25px;
  input {
    font-size: 12px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.25);
    color: #000;
    padding: 6px 36px;
    border-radius: 4px;
    &::placeholder {
      color: #00000080;
    }
  }
`;

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchString: ''
        }
    }

    onUpdateSearch = (e) => {
        const searchString = e.target.value;
        this.setState({searchString});
        this.props.onUpdateSearch(searchString);
    }

    render() {
        return (
            <SearchEl>
                <p>Looking for</p>
                <input type="text"
                       className="form-control search-input"
                       placeholder="Start typing here..."
                       value={this.state.searchString}
                       onChange={this.onUpdateSearch}
                />
            </SearchEl>
        )
    }
}

export default Search;
