import styled from "styled-components";

const WrapperEl = styled.main`
  padding: 0 25px;
`;

const Wrapper = (props) => {
    return(
        <WrapperEl>
            {props.children}
        </WrapperEl>
    );
}

export default Wrapper;