import styled from "styled-components";
import {Component} from "react";

const FilterEl = styled.section`
  color: #000;
  display: flex;
  align-items: center;
  column-gap: 25px;
  .button-wrapper {
    display: flex;
    flex-wrap: wrap;
    row-gap: 5px;
  }
  button {
    font-size: 12px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.25);
    width: 75px;
    padding: 7px 0;
    text-align: center;
    margin-right: 5px;

  }
  button:last-child {
    margin-right: 0;
  }
`;

class Filter extends Component {
    onUpdateFilter = (e) => {
        const currentFilter = e.currentTarget.value;
        this.props.onUpdateFilter(currentFilter);
    }

    render() {
        return (
            <FilterEl>
                <p>Or filter</p>
                <div className="button-wrapper">
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
                </div>
            </FilterEl>
        )
    }
}

export default Filter;
