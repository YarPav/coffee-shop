import styled from "styled-components";
import {Component} from "react";

const Button = styled.button`
  font-size: 12px;
  background-color: rgba(255, 255, 255, 0);
  color: inherit;
  display: flex;
  align-items: center;
`;

class NavButton extends Component {
    onChangePage = (e) => {
        this.props.onChangePage(e.target.value);
    }
    render() {
        return (
            <Button onClick={this.onChangePage} value={this.props.pageName}>
                {this.props.children}
            </Button>
        );
    }
}

export default NavButton;