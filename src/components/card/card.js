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
  box-shadow: ${props => props.isShadowed ? '5px 5px 15px rgba(0, 0, 0, 0.25)' : null};
  p {
    align-self: flex-end;
    font-weight: 700;
  }
  .country {
    font-weight: 400;
    text-transform: capitalize;
  }
`;

const Card = (props) => {
    const {title, img, price, country} = props.data;
    return(
        <CardEl isShadowed={props.isDetailed}>
            <img src={img} alt={title}/>
            <h4>{title}</h4>
            {props.isDetailed ? <p className="country">{country}</p> : null}
            <p>{price}$</p>
        </CardEl>
    );
}

export default Card;
