import Greeting from "../greeting/greeting";
import bg from "./bg.jpg";
import Header from "../header/header";
import PictureText from "../picture-text/picture-text";
import PageContainer from "../page-container/page-container";
import styled from "styled-components";
import SearchPanel from "./search-panel/search-panel";
import CardsList from "../cardsList/cards-list";
import Footer from "../footer/footer";

const Divide = styled.div`
  width: 240px;
  height: 1px;
  background-color: #000;
  margin: 60px auto;

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
                <SearchPanel
                    filters={props.filters}
                    currentFilter={props.currentFilter}
                    onUpdateFilter={props.onUpdateFilter}
                    onUpdateSearch={props.onUpdateSearch}
                />
                <CardsList isDetailed={true} data={props.productData}/>
                <Footer headerData={props.headerData}/>
            </PageContainer>
        </>
    );
}

export default OurCoffee;