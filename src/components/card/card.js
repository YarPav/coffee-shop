import styled from "styled-components";

const CardEl = styled.article`
  width: 220px;
  height: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, .65);
  border-radius: 8px;
  padding: 22px 20px;
  color: #000;
  p {
    align-self: flex-end;
    font-weight: 700;
  }
`;

const Card = (props) => {
    const {title, img, price} = props.data;
    return(
        <CardEl>
            <img src={img} alt={title}/>
            <h4>{title}</h4>
            <p>{price}$</p>
        </CardEl>
    );
}

export default Card;
