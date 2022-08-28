import styled from "styled-components";
import {Component} from "react";

const FilterEl = styled.section`
  
`;

class Filter extends Component {
    onUpdateFilter = (e) => {
        const currentFilter = e.currentTarget.value;
        this.props.onUpdateFilter(currentFilter);
    }

    render() {
        return (
            <FilterEl>
                {this.props.filters.map(filter => {
                    const btnClass = this.props.currentFilter === filter.name
                        ? "btn-light"
                        : "btn-outline-light";
                    return (
                        <button type="button"
                                // className={`btn ${btnClass}`}
                                value={filter.name}
                                onClick={this.onUpdateFilter}
                                key={filter.id}
                        >
                            {filter.title}
                        </button>
                    )
                })}
            </FilterEl>
        )
    }
}

export default Filter;
