import styled from "styled-components";
import dividingLine from "../heading/dividing-line-black.svg";
import Heading from "../heading/heading";

const PictureTextEl = styled.section`
  display: flex;
  color: #000;
  column-gap: 80px;
  row-gap: 55px;
  //padding-left: 72px;
  flex-wrap: wrap;
  justify-content: center;
  .block-img {
    max-width: 277px;
    min-width: 310px;
    width: 100%;
    img {
      width: 100%;
      box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.25);
    }
  }
  .text {
    max-width: 346px;
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
            <div className="block-img">
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
