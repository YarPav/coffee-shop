import {Component} from "react";

class PageMaster extends Component {
    constructor(props) {
        super(props);
    }
    render(data) {
        if (this.props.currentPage !== this.props.componentName) {
            return null;
        }
        return data;
    }
}

export default PageMaster;