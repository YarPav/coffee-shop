import Greeting from "../greeting/greeting";
import bg from "./bg.jpg";
import Header from "../header/header";
import PictureText from "../picture-text/picture-text";
import PageContainer from "../page-container/page-container";
import styled from "styled-components";
import SearchPanel from "./search-panel/search-panel";

const Divide = styled.div`
  width: 240px;
  height: 1px;
  background-color: #000;
  margin: 0 auto; 
`;

const OurCoffee = (props) => {
    return (
        <>
            <Greeting bg={bg} headerData={props.headerData}>
                <Header data={props.headerData}/>
                <h1>Our coffee</h1>
            </Greeting>
            <PageContainer>
                <PictureText data={props.aboutOutCoffee}/>
                <Divide/>
                <SearchPanel prodcutData={}/>
            </PageContainer>
        </>
    );
}

export default OurCoffee;