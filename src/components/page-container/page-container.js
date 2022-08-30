import styled from "styled-components";

const PageContainerEl = styled.main`
  max-width: 802px;
  width: 100%;
  margin: 0 auto;
  padding-top: 70px;
`;

const PageContainer = (props) => {
    return (
        <PageContainerEl>
            {props.children}
        </PageContainerEl>
    );
}

export default PageContainer;
