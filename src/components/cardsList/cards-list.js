import styled from "styled-components";
import Card from "../card/card";

const CardsListEl = styled.ul`
  display: flex;
  max-width: 802px;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px 71px;
  margin: 0 auto;
`;

const CardsList = (props) => {
    return (
        <CardsListEl>
            {props.data.map(item =>
                <Card key={item.id} data={item} isDetailed={props.isDetailed}/>
            )}
        </CardsListEl>
    );
}

export default CardsList;