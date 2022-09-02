import styled from "styled-components";
import NavButton from "../nav-button/nav-button";
import icon from "./icon.svg";
import iconDark from "./icon-dark.svg";

const NavigationEl = styled.nav`
  margin: 0 auto;
  max-width: 355px;
  width: 100%;
  font-size: 12px;
  padding: 30px 5px 0 5px;
  color: ${props => props.isDark ? "#000" : "#fff"};
  ul {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    list-style: none;
  }
  button:first-of-type {
    display: flex;
    align-items: flex-end;
  }
`;

const Navigation = (props) => {
    return (
        <NavigationEl isDark={props.isDark}>
            <ul>
                {props.data.map((item, index) =>
                    index === 0
                        ?
                        <li key={index}>
                            <NavButton onChangePage={props.onChangePage} pageName={item.title}>
                                {
                                    props.isDark
                                    ? <img src={iconDark} alt="Icon"/>
                                    : <img src={icon} alt="Icon"/>
                                }
                                {item.title}
                            </NavButton>
                        </li>
                        :
                        <li key={index}>
                            <NavButton onChangePage={props.onChangePage} pageName={item.title}>
                                {item.title}
                            </NavButton>
                        </li>
                )}
            </ul>
        </NavigationEl>
    );
}

export default Navigation;
