import styled from "styled-components";
import bgImg from "../coffee-house/bg.jpg";

const GreetingEl = styled.section`
  background-image: url(${props => props.bg});
  background-size: cover;
  background-position: center ;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  h1 {
    text-align: center;
    font-size: 40px;
    padding: 60px 0 84px 0;
  }
`;

const Greeting = (props) => {
    return (
        <GreetingEl bg={props.bg}>
            {props.children}
        </GreetingEl>
    );
}

export default Greeting;