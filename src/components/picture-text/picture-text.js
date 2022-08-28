import styled from "styled-components";
import dividingLine from "../heading/dividing-line-black.svg";
import Heading from "../heading/heading";

const PictureTextEl = styled.section`
  display: flex;
  color: #000;
  column-gap: 80px;
  padding: 70px 0 60px 72px;
  .text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding-bottom: 15px;
  }
  p {
    line-height: 20px;
  }
  .dividing-line {
    width: 200px; 
  }
`;

const PictureText = (props) => {
    const {img, heading, desc} = props.data;
    return (
        <PictureTextEl>
            <div>
                <img src={img.img} alt={img.desc}/>
            </div>
            <div className="text">
                <Heading isImg={true} heading={heading}/>
                {desc.split("\n").map((item, index) =>
                    <p key={index}>{item}</p>
                )}
            </div>
        </PictureTextEl>
    );
}

export default PictureText;
