import React,{Component} from "react";

class WelcomeComponent extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                WELCOME {this.props.match.params.name}
            </div>
        );
    }
}
export default WelcomeComponent