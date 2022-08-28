import styled from "styled-components";
import dividingLine from "./dividing-line.svg";
import NavButton from "../../nav-button/nav-button";

const PromoEl = styled.div`
  font-weight: 700 !important;
  margin-top: 111px;
  margin-bottom: 201px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  max-width: 670px;
  text-align: center;
  align-self: center;
  h1 {
    padding: 0;
  }
  h2 {
    font-size: 24px;
    line-height: 41px;
    padding-bottom: 18px;
  }
  img {
    width: 200px;
    padding-top: 20px;
    padding-bottom: 30px;
  }
  button {
    font-size: 14px;
    padding: 10px 42px;
    background-color: rgba(255, 255, 255, 0);
    border: 1px solid #fff;
    border-radius: 3px;
    color: inherit;
    font-weight: inherit;
  }
`;
const PromoNavButton = styled(NavButton)`
  font-size: 14px;
  padding: 10px 42px;
  background-color: rgba(255, 255, 255, 0);
  border: 1px solid #fff;
  border-radius: 3px;
  color: inherit;
  font-weight: inherit;
`;
const Promo = () => {
    return (
        <PromoEl>
            <h1>Everything You Love About Coffee</h1>
            <img src={dividingLine} alt="Dividing line"/>
            <h2>
                We makes every day full of energy and taste<br/>
                Want to try our beans?
            </h2>
            <PromoNavButton>More</PromoNavButton>
        </PromoEl>
    );
}

export default Promo;