import styled from "styled-components";

const Button = styled.button`
  font-size: 12px;
  background-color: rgba(255, 255, 255, 0);
  color: inherit;
  display: flex;
  align-items: center;
`;

const NavButton = (props) => {
    return (
        <Button onClick={() => console.log('Click')}>
            {props.children}
        </Button>
    );
}

export default NavButton;