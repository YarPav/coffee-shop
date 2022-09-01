import Navigation from "../navigation/navigation";
import dividingLine from "../heading/dividing-line-black.svg";
import styled from "styled-components";

const FooterEl = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  .dividing-line {
    padding: 30px 0 21px 0;
  }
`;
const Footer = (props) => {
    return (
        <FooterEl>
            <Navigation data={props.headerData} isDark={true} onChangePage={props.onChangePage}/>
            <img className="dividing-line" src={dividingLine} alt="Dividing line"/>
        </FooterEl>
    );
}

export default Footer;
