import styled from "styled-components";

const PageContainerEl = styled.main`
  max-width: 865px;
  width: 100%;
  margin: 0 auto;
  padding: 70px 5px 0 5px;
`;

const PageContainer = (props) => {
    return (
        <PageContainerEl>
            {props.children}
        </PageContainerEl>
    );
}

export default PageContainer;
