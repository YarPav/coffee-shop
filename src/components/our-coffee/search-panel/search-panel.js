import styled from "styled-components";
import Search from "./search/search";
import Filter from "./filter/filter";

const SearchPanelEl = styled.section`
  display: flex;
  flex-wrap: wrap;
  row-gap: 25px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 60px;
`;

const SearchPanel = (props) => {
    return (
        <SearchPanelEl>
            <Search onUpdateSearch={props.onUpdateSearch}/>
            <Filter
                onUpdateFilter={props.onUpdateFilter}
                currentFilter={props.currentFilter}
                filters={props.filters}
            />
        </SearchPanelEl>
    );
}

export default SearchPanel;
