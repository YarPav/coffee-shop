import styled from "styled-components";
import Search from "./search/search";
import Filter from "./filter/filter";

const SearchPanelEl = styled.section`
  display: flex;
`;

const SearchPanel = (props) => {
    return (
        <SearchPanelEl>
            <Search/>
            <Filter/>
        </SearchPanelEl>
    );
}

export default SearchPanel;
