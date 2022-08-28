import styled from "styled-components";
import {Component} from "react";

const SearchEl = styled.form`
  
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
            <input type="text"
                   className="form-control search-input"
                   placeholder="Найти сотрудника"
                   value={this.state.searchString}
                   onChange={this.onUpdateSearch}
            />
        )
    }
}

export default Search;
