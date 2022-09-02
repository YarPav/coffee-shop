import styled from "styled-components";
import Heading from "../../heading/heading";
import bg from "./bg.jpg";
import CardsList from "../../cardsList/cards-list";

const OurBestEl = styled.section`
  background-image: url("${bg}");
  padding: 80px 0 110px 0;
  h3 {
    margin-bottom: 40px;
  }
`;

const OurBest = (props) => {
    return (
        <OurBestEl>
            <Heading isImg={false} heading="Our best"/>
            <CardsList data={props.bestSellersData} onOpenProduct={props.onOpenProduct}/>
        </OurBestEl>
    );
}

export default OurBest;
