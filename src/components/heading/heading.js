import styled from "styled-components";
import dividingLine from "./dividing-line-black.svg";

const HeadingEl = styled.div`
  text-align: center;
  h3 {
    font-size: 24px;
    color: #000;
    font-weight: 400;
  }
  img {
    width: 200px;
    padding-top: 20px;
  }
`;
const Heading = (props) => {
    return (
        <HeadingEl style={props.style}>
            <h3>{props.heading}</h3>
            {props.isImg ? <img src={dividingLine} alt="Dividing line"/> : null}
        </HeadingEl>
    );
}

export default Heading;