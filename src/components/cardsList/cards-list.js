import styled from "styled-components";
import Card from "../card/card";

const CardsListEl = styled.ul`
  display: flex;
  max-width: 802px;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px 71px;
  padding-top: 40px;
  margin: 0 auto;
`;

const CardList = (props) => {
    return (
        <CardsListEl>
            {props.data.map(item =>
                <Card key={item.id} data={item}/>
            )}
        </CardsListEl>
    );
}

export default CardList;